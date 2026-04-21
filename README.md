# Contributing to DSA Problems

Thank you for contributing! Every problem you add helps thousands of learners.

---

## Quick Start

```bash
# 1. Fork this repo, then clone your fork
git clone https://github.com/YOUR-USERNAME/dsa-problems.git
cd dsa-problems

# 2. Create a branch
git checkout -b add/042-trapping-rain-water

# 3. Add your files (see format below)
# 4. Validate locally
node scripts/validate.js

# 5. Push and open a Pull Request
git add .
git commit -m "add: 042 Trapping Rain Water"
git push origin add/042-trapping-rain-water
```

---

## File Format

### 1. Problem — `problems/NNN-problem-slug.json`

The filename number (`NNN`) must be **3 digits** and match the next available number.
Check `problems.index.json` for the current highest number.

```json
{
  "id": "042",
  "number": 42,
  "title": "Trapping Rain Water",
  "topic": "Two Pointers",
  "difficulty": "Hard",
  "description": "Given n non-negative integers representing elevation map...",
  "url": "https://leetcode.com/problems/trapping-rain-water/",
  "tags": ["array", "two-pointers", "stack"],
  "examples": [
    {
      "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      "output": "6",
      "explanation": "The above elevation map traps 6 units of rain water."
    }
  ],
  "testCases": [
    {
      "label": "Standard",
      "input": "[[0,1,0,2,1,0,1,3,2,1,2,1]]",
      "stdinLines": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
      "expected": "6",
      "hidden": false
    },
    {
      "label": "Simple",
      "input": "[[4,2,0,3,2,5]]",
      "stdinLines": "6\n4 2 0 3 2 5",
      "expected": "9",
      "hidden": false
    },
    {
      "label": "Edge: flat",
      "input": "[[1,1,1]]",
      "stdinLines": "3\n1 1 1",
      "expected": "0",
      "hidden": true
    }
  ],
  "author": "your-github-username",
  "contributed": "2026-04-12"
}
```

**Test case fields:**
| Field | Required | Description |
|-------|----------|-------------|
| `label` | Yes | Short name shown in the UI |
| `input` | Yes | JSON string — what Python's `solve(input)` receives |
| `stdinLines` | Yes | Plain text stdin for C++/Java |
| `expected` | Yes | Expected stdout (compared after trim) |
| `hidden` | No | `true` = shown in results but not examples panel |

---

### 2. Solutions (optional but encouraged)

Add one file per language. The first 4 lines **must** be metadata comments:

**`solutions/cpp/042-trapping-rain-water.cpp`**
```cpp
// id: 042
// title: Trapping Rain Water
// approach: Two Pointers | time: O(n) | space: O(1)
// author: your-github-username

#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    vector<int> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];
    // ... your solution
    cout << answer << endl;
    return 0;
}
```

**`solutions/python/042-trapping-rain-water.py`**
```python
# id: 042
# title: Trapping Rain Water
# approach: Two Pointers | time: O(n) | space: O(1)
# author: your-github-username

import sys, json

def solve(input):
    height = input
    # ... your solution
    return answer

raw = sys.stdin.read().strip()
print(json.dumps(solve(json.loads(raw))))
```

**`solutions/java/042-trapping-rain-water.java`**
```java
// id: 042
// title: Trapping Rain Water
// approach: Two Pointers | time: O(n) | space: O(1)
// author: your-github-username

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] h = new int[n];
        for (int i = 0; i < n; i++) h[i] = sc.nextInt();
        // ... your solution
        System.out.println(answer);
    }
}
```

---

### 3. Comments (optional but valuable)

**`comments/042-trapping-rain-water.json`**
```json
{
  "id": "042",
  "intuition": "Explain the key insight in 2-3 sentences...",
  "approach": "Step by step how the algorithm works...",
  "walkthrough": [
    "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    "Step 1: ...",
    "Step 2: ..."
  ],
  "complexity": {
    "time": "O(n)",
    "space": "O(1)"
  },
  "hints": [
    "First hint (subtle)",
    "Second hint (more specific)",
    "Third hint (almost the answer)"
  ],
  "commonMistakes": [
    "Mistake 1 and why it's wrong",
    "Mistake 2 and why it's wrong"
  ],
  "relatedProblems": ["011", "015"],
  "author": "your-github-username",
  "contributed": "2026-04-12"
}
```

---

## Topics

Use one of these exact strings for `topic`:
`Arrays`, `Strings`, `Linked Lists`, `Trees`, `Graphs`,
`Dynamic Programming`, `Recursion`, `Backtracking`, `Sorting`,
`Binary Search`, `Heaps`, `Stacks`, `Queues`, `Hashing`,
`Two Pointers`, `Sliding Window`, `Greedy`, `Tries`,
`Bit Manipulation`, `Math`

---

## Rules

- Problems must be **original or from open platforms** (LeetCode, HackerRank, Codeforces)
- Include the source URL if from another platform
- **Minimum 2 visible test cases** + at least 1 hidden edge case
- Solutions must actually pass all test cases
- No plagiarised explanations in comments — write in your own words
- One problem per PR

---

## PR Checklist

- [ ] Problem JSON is valid (`node scripts/validate.js` passes)
- [ ] Filename format: `NNN-problem-slug.json` with correct number
- [ ] At least 2 visible test cases + 1 hidden
- [ ] `stdinLines` matches `input` — both represent the same data
- [ ] Solution files have metadata comments on lines 1-4
- [ ] Comment file has `intuition`, `approach`, and at least 2 hints
