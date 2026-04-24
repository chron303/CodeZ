# id: 005
# title: Merge Two Sorted Lists
# approach: Two Pointer Merge
# time: O(n + m) | space: O(n + m)
# author: chron303

import sys

def main():
    lines = sys.stdin.read().split('\n')
    idx = 0

    n = int(lines[idx].strip())
    idx += 1
    a = list(map(int, lines[idx].strip().split())) if n > 0 else []
    idx += 1

    m = int(lines[idx].strip())
    idx += 1
    b = list(map(int, lines[idx].strip().split())) if m > 0 else []

    merged = []
    i, j = 0, 0
    while i < n and j < m:
        if a[i] <= b[j]:
            merged.append(a[i])
            i += 1
        else:
            merged.append(b[j])
            j += 1
    while i < n:
        merged.append(a[i])
        i += 1
    while j < m:
        merged.append(b[j])
        j += 1

    if merged:
        print(" ".join(map(str, merged)))

if __name__ == "__main__":
    main()
