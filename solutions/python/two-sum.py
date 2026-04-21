# id: 001
# title: Two Sum
# approach: Hash Map
# time: O(n) | space: O(n)
# author: arnav-goel

import sys

def main():
    data = sys.stdin.read().split()
    
    n = int(data[0])
    nums = list(map(int, data[1:n+1]))
    target = int(data[n+1])

    seen = {}

    for i in range(n):
        complement = target - nums[i]
        if complement in seen:
            print(f"[{seen[complement]},{i}]")
            return
        seen[nums[i]] = i

if __name__ == "__main__":
    main()