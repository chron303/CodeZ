// scripts/validate.js
// Validates all problem/solution/comment files and builds problems.index.json
// Run: node scripts/validate.js

var fs   = require('fs');
var path = require('path');

var ROOT      = path.join(__dirname, '..');
var PROBLEMS  = path.join(ROOT, 'problems');
var SOLUTIONS = path.join(ROOT, 'solutions');
var COMMENTS  = path.join(ROOT, 'comments');

var errors   = [];
var warnings = [];
var index    = [];

function err(msg)  { errors.push('  ✗ ' + msg); }
function warn(msg) { warnings.push('  ⚠ ' + msg); }
function ok(msg)   { console.log('  ✓ ' + msg); }

// Derive slug from filename
function fileToSlug(filename) {
  return filename.replace(/\.json$/, '').replace(/\.(cpp|py|java)$/, '');
}

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

  // Slug from filename (source of truth)
  var slug = fileToSlug(file);

  // Required fields
  ['title','topic','difficulty','description','testCases'].forEach(function(f) {
    if (!data[f]) err(file + ': missing required field "' + f + '"');
  });

  if (data.difficulty && !['Easy','Medium','Hard'].includes(data.difficulty)) {
    err(file + ': difficulty must be Easy, Medium, or Hard');
  }

  if (Array.isArray(data.testCases)) {
    if (data.testCases.length < 2) warn(file + ': should have at least 2 test cases');
    data.testCases.forEach(function(tc, i) {
      if (!tc.input)    err(file + ': testCase[' + i + '] missing input');
      if (!tc.expected) err(file + ': testCase[' + i + '] missing expected');
    });
  }

  ok(file);
  return { slug: slug, data: data };
}

function validateSolution(lang, file, slugs) {
  var filePath = path.join(SOLUTIONS, lang, file);
  var content  = fs.readFileSync(filePath, 'utf8');
  var slug     = fileToSlug(file);
  if (!slugs.includes(slug)) {
    warn('solutions/' + lang + '/' + file + ': no matching problem for slug "' + slug + '"');
  }
  ok('solutions/' + lang + '/' + file);
}

function validateComment(file, slugs) {
  var filePath = path.join(COMMENTS, file);
  var raw, data;
  try {
    raw  = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(raw);
  } catch(e) {
    err('comments/' + file + ': invalid JSON — ' + e.message);
    return;
  }
  var slug = fileToSlug(file);
  if (!slugs.includes(slug)) {
    warn('comments/' + file + ': no matching problem for slug "' + slug + '"');
  }
  if (!data.intuition) warn('comments/' + file + ': missing intuition');
  if (!data.approach)  warn('comments/' + file + ': missing approach');
  ok('comments/' + file);
}

// ── Main ──────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════');
console.log(' DSA Problems Validator');
console.log('═══════════════════════════════════\n');

console.log('📋 Problems:');
var problemFiles = fs.readdirSync(PROBLEMS)
  .filter(function(f) { return f.endsWith('.json'); })
  .sort();

var slugs = [];
problemFiles.forEach(function(file) {
  var result = validateProblem(file);
  if (result) {
    slugs.push(result.slug);
    index.push({
      slug:       result.slug,
      title:      result.data.title,
      topic:      result.data.topic,
      difficulty: result.data.difficulty,
      tags:       result.data.tags || [],
      author:     result.data.author || '',
    });
  }
});

console.log('\n💻 Solutions:');
['cpp','python','java'].forEach(function(lang) {
  var dir = path.join(SOLUTIONS, lang);
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(function(f) {
    if (!f.match(/\.(cpp|py|java)$/)) return;
    validateSolution(lang, f, slugs);
  });
});

console.log('\n💬 Comments:');
if (fs.existsSync(COMMENTS)) {
  fs.readdirSync(COMMENTS)
    .filter(function(f) { return f.endsWith('.json'); })
    .forEach(function(f) { validateComment(f, slugs); });
}

// Sort alphabetically by slug
index.sort(function(a, b) { return a.slug.localeCompare(b.slug); });

fs.writeFileSync(path.join(ROOT, 'problems.index.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  count:       index.length,
  problems:    index,
}, null, 2));

console.log('\n📦 Built problems.index.json (' + index.length + ' problems)');
console.log('\n═══════════════════════════════════');
if (warnings.length) {
  console.log('⚠  Warnings:');
  warnings.forEach(function(w) { console.log(w); });
}
if (errors.length) {
  console.log('✗  Errors:');
  errors.forEach(function(e) { console.log(e); });
  console.log('\nValidation FAILED\n');
  process.exit(1);
} else {
  console.log('✓  All checks passed! (' + index.length + ' problems)\n');
}