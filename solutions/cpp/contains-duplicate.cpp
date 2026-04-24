// id: 010
// title: Contains Duplicate
// approach: Hash Set
// time: O(n) | space: O(n)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    
    unordered_set<int> seen;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if (seen.count(x)) {
            cout << "true" << endl;
            return 0;
        }
        seen.insert(x);
    }

    cout << "false" << endl;
    return 0;
}
