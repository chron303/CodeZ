// id: 011
// title: Maximum Depth of Binary Tree
// approach: DFS Recursion (level-order input)
// time: O(n) | space: O(n)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int maxDepth(vector<int>& tree, int i) {
    if (i >= (int)tree.size() || tree[i] == -1) return 0;
    return 1 + max(maxDepth(tree, 2 * i + 1), maxDepth(tree, 2 * i + 2));
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    if (n == 0) {
        cout << 0 << endl;
        return 0;
    }

    vector<int> tree(n);
    for (int i = 0; i < n; i++) cin >> tree[i];

    cout << maxDepth(tree, 0) << endl;
    return 0;
}
