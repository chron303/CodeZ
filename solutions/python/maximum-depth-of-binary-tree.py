# id: 011
# title: Maximum Depth of Binary Tree
# approach: DFS Recursion (level-order input)
# time: O(n) | space: O(n)
# author: chron303

import sys
sys.setrecursionlimit(10000)

def max_depth(tree, i):
    if i >= len(tree) or tree[i] == -1:
        return 0
    return 1 + max(max_depth(tree, 2 * i + 1), max_depth(tree, 2 * i + 2))

def main():
    data = sys.stdin.read().split()
    n = int(data[0])

    if n == 0:
        print(0)
        return

    tree = list(map(int, data[1:n+1]))
    print(max_depth(tree, 0))

if __name__ == "__main__":
    main()
