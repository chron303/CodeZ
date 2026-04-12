// scripts/validate.js
// Validates all problem/solution/comment files and builds problems.index.json
// Run: node scripts/validate.js
// Used by GitHub Actions on every PR and merge

var fs   = require('fs');
var path = require('path');

var ROOT      = path.join(__dirname, '..');
var PROBLEMS  = path.join(ROOT, 'problems');
var SOLUTIONS = path.join(ROOT, 'solutions');
var COMMENTS  = path.join(ROOT, 'comments');

var errors   = [];
var warnings = [];
var index    = [];

// ── Helpers ───────────────────────────────────────────────────
function err(msg)  { errors.push('  ✗ ' + msg); }
function warn(msg) { warnings.push('  ⚠ ' + msg); }
function ok(msg)   { console.log('  ✓ ' + msg); }

// ── Validate one problem file ──────────────────────────────────
function validateProblem(file) {
  var filePath = path.join(PROBLEMS, file);
  var raw, data;

  try {
    raw  = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(raw);
  } catch(e) {
    err(file + ': invalid JSON — ' + e.message);
    return null;
  }

  // Required fields
  ['id','number','title','topic','difficulty','description','testCases'].forEach(function(f) {
    if (!data[f]) err(file + ': missing required field "' + f + '"');
  });

  // ID format: 3 digits
  if (data.id && !/^\d{3}$/.test(data.id)) {
    err(file + ': id must be 3 digits like "001"');
  }

  // Difficulty
  if (data.difficulty && !['Easy','Medium','Hard'].includes(data.difficulty)) {
    err(file + ': difficulty must be Easy, Medium, or Hard');
  }

  // Test cases
  if (Array.isArray(data.testCases)) {
    if (data.testCases.length < 2) {
      warn(file + ': should have at least 2 test cases');
    }
    data.testCases.forEach(function(tc, i) {
      if (!tc.input)    err(file + ': testCase[' + i + '] missing input');
      if (!tc.expected) err(file + ': testCase[' + i + '] missing expected');
      if (!tc.label)    warn(file + ': testCase[' + i + '] missing label');
    });
  }

  // Filename matches ID
  var expectedPrefix = data.id + '-';
  if (!file.startsWith(expectedPrefix)) {
    err(file + ': filename should start with ' + expectedPrefix);
  }

  ok(file);
  return data;
}

// ── Validate solution file metadata comment ────────────────────
function validateSolution(lang, file, problemIds) {
  var filePath = path.join(SOLUTIONS, lang, file);
  var content  = fs.readFileSync(filePath, 'utf8');
  var lines    = content.split('\n').slice(0, 6);
  var idLine   = lines.find(function(l) { return l.includes('id:'); });

  if (!idLine) {
    err('solutions/' + lang + '/' + file + ': missing "// id: 001" comment on line 1-6');
    return;
  }

  var id = idLine.replace(/.*id:\s*/, '').trim();
  if (!problemIds.includes(id)) {
    warn('solutions/' + lang + '/' + file + ': id "' + id + '" has no matching problem file');
  }
  ok('solutions/' + lang + '/' + file);
}

// ── Validate comment file ──────────────────────────────────────
function validateComment(file, problemIds) {
  var filePath = path.join(COMMENTS, file);
  var raw, data;

  try {
    raw  = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(raw);
  } catch(e) {
    err('comments/' + file + ': invalid JSON — ' + e.message);
    return;
  }

  if (!data.id)        err('comments/' + file + ': missing id');
  if (!data.intuition) err('comments/' + file + ': missing intuition');
  if (!data.approach)  err('comments/' + file + ': missing approach');
  if (!data.complexity) warn('comments/' + file + ': missing complexity');
  if (!data.hints || data.hints.length === 0) warn('comments/' + file + ': no hints provided');

  if (data.id && !problemIds.includes(data.id)) {
    warn('comments/' + file + ': id "' + data.id + '" has no matching problem file');
  }
  ok('comments/' + file);
}

// ── Main ───────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════');
console.log(' DSA Problems Validator');
console.log('═══════════════════════════════════\n');

// Validate problems
console.log('📋 Problems:');
var problemFiles = fs.readdirSync(PROBLEMS).filter(function(f) { return f.endsWith('.json'); });
var problems     = [];
var problemIds   = [];

problemFiles.sort().forEach(function(file) {
  var data = validateProblem(file);
  if (data) {
    problems.push(data);
    problemIds.push(data.id);
    index.push({
      id:         data.id,
      number:     data.number,
      title:      data.title,
      topic:      data.topic,
      difficulty: data.difficulty,
      tags:       data.tags || [],
      author:     data.author || '',
      hasSolution: {
        cpp:    fs.existsSync(path.join(SOLUTIONS, 'cpp',    data.id + '-' + slugify(data.title) + '.cpp')),
        python: fs.existsSync(path.join(SOLUTIONS, 'python', data.id + '-' + slugify(data.title) + '.py')),
        java:   fs.existsSync(path.join(SOLUTIONS, 'java',   data.id + '-' + slugify(data.title) + '.java')),
      },
      hasComment: fs.existsSync(path.join(COMMENTS, data.id + '-' + slugify(data.title) + '.json')),
    });
  }
});

// Validate solutions
console.log('\n💻 Solutions:');
['cpp', 'python', 'java'].forEach(function(lang) {
  var langDir = path.join(SOLUTIONS, lang);
  if (!fs.existsSync(langDir)) return;
  fs.readdirSync(langDir).forEach(function(file) {
    if (!file.match(/\.(cpp|py|java)$/)) return;
    validateSolution(lang, file, problemIds);
  });
});

// Validate comments
console.log('\n💬 Comments:');
if (fs.existsSync(COMMENTS)) {
  fs.readdirSync(COMMENTS).filter(function(f) { return f.endsWith('.json'); })
    .forEach(function(file) { validateComment(file, problemIds); });
}

// Build index
var indexPath = path.join(ROOT, 'problems.index.json');
fs.writeFileSync(indexPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  count:       index.length,
  problems:    index.sort(function(a,b) { return a.number - b.number; }),
}, null, 2));
console.log('\n📦 Built problems.index.json (' + index.length + ' problems)');

// Report
console.log('\n═══════════════════════════════════');
if (warnings.length) {
  console.log('⚠  Warnings (' + warnings.length + '):');
  warnings.forEach(function(w) { console.log(w); });
}
if (errors.length) {
  console.log('\n✗  Errors (' + errors.length + '):');
  errors.forEach(function(e) { console.log(e); });
  console.log('\nValidation FAILED — fix errors before merging.\n');
  process.exit(1);
} else {
  console.log('✓  All checks passed! (' + problems.length + ' problems valid)\n');
}

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}