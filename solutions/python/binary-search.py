# id: 008
# title: Binary Search
# approach: Iterative Binary Search
# time: O(log n) | space: O(1)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split()
    n = int(data[0])
    nums = list(map(int, data[1:n+1]))
    target = int(data[n+1])

    left, right = 0, n - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            print(mid)
            return
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    print(-1)

if __name__ == "__main__":
    main()
