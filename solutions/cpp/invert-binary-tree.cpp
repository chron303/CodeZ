// id: 012
// title: Invert Binary Tree
// approach: BFS with level-order I/O
// time: O(n) | space: O(n)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    if (n == 0) {
        cout << "" << endl;
        return 0;
    }

    vector<int> tree(n);
    for (int i = 0; i < n; i++) cin >> tree[i];

    // Invert using level-order: swap left and right children
    for (int i = 0; i < n; i++) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        if (left < n && right < n) {
            swap(tree[left], tree[right]);
        }
    }

    // Output non-trailing-null elements
    int last = n - 1;
    while (last >= 0 && tree[last] == -1) last--;

    for (int i = 0; i <= last; i++) {
        if (i > 0) cout << " ";
        cout << tree[i];
    }
    if (last >= 0) cout << endl;

    return 0;
}
