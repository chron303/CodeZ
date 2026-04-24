# id: 010
# title: Contains Duplicate
# approach: Hash Set
# time: O(n) | space: O(n)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split()
    n = int(data[0])
    nums = list(map(int, data[1:n+1]))

    seen = set()
    for num in nums:
        if num in seen:
            print("true")
            return
        seen.add(num)

    print("false")

if __name__ == "__main__":
    main()
