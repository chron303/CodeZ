# id: 009
# title: Valid Parentheses
# approach: Stack
# time: O(n) | space: O(n)
# author: chron303

import sys

def main():
    s = sys.stdin.read().strip()

    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for c in s:
        if c in pairs:
            if not stack or stack[-1] != pairs[c]:
                print("false")
                return
            stack.pop()
        else:
            stack.append(c)

    print("true" if not stack else "false")

if __name__ == "__main__":
    main()
