// id: 005
// title: Merge Two Sorted Lists
// approach: Two Pointer Merge
// time: O(n + m) | space: O(n + m)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int m;
    cin >> m;
    vector<int> b(m);
    for (int i = 0; i < m; i++) cin >> b[i];

    vector<int> merged;
    int i = 0, j = 0;
    while (i < n && j < m) {
        if (a[i] <= b[j]) merged.push_back(a[i++]);
        else merged.push_back(b[j++]);
    }
    while (i < n) merged.push_back(a[i++]);
    while (j < m) merged.push_back(b[j++]);

    for (int k = 0; k < (int)merged.size(); k++) {
        if (k > 0) cout << " ";
        cout << merged[k];
    }
    if (!merged.empty()) cout << endl;

    return 0;
}
