# id: 003
# title: Valid Anagram
# approach: Frequency Count
# time: O(n) | space: O(1)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split('\n')
    s = data[0].strip()
    t = data[1].strip()

    if len(s) != len(t):
        print("false")
        return

    count = [0] * 26
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1

    for c in count:
        if c != 0:
            print("false")
            return

    print("true")

if __name__ == "__main__":
    main()
