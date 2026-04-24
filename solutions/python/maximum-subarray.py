# id: 006
# title: Maximum Subarray
# approach: Kadane's Algorithm
# time: O(n) | space: O(1)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split()
    n = int(data[0])
    nums = list(map(int, data[1:n+1]))

    current_sum = nums[0]
    max_sum = nums[0]

    for i in range(1, n):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)

    print(max_sum)

if __name__ == "__main__":
    main()
