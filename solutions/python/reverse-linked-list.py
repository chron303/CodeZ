# id: 004
# title: Reverse Linked List
# approach: Iterative Reversal
# time: O(n) | space: O(1)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split()
    n = int(data[0])

    if n == 0:
        print("")
        return

    arr = list(map(int, data[1:n+1]))
    arr.reverse()
    print(" ".join(map(str, arr)))

if __name__ == "__main__":
    main()
