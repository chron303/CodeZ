# id: 007
# title: Climbing Stairs
# approach: Bottom-Up DP (Fibonacci)
# time: O(n) | space: O(1)
# author: chron303

import sys

def main():
    n = int(sys.stdin.read().strip())

    if n <= 2:
        print(n)
        return

    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr

    print(prev1)

if __name__ == "__main__":
    main()
