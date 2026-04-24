# id: 012
# title: Invert Binary Tree
# approach: BFS with level-order I/O
# time: O(n) | space: O(n)
# author: chron303

import sys

def main():
    data = sys.stdin.read().split()
    n = int(data[0])

    if n == 0:
        return

    tree = list(map(int, data[1:n+1]))

    # Invert by swapping left and right children at each level
    for i in range(n):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and right < n:
            tree[left], tree[right] = tree[right], tree[left]

    # Trim trailing -1s
    while tree and tree[-1] == -1:
        tree.pop()

    if tree:
        print(" ".join(map(str, tree)))

if __name__ == "__main__":
    main()
