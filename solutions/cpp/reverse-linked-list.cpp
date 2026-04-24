// id: 004
// title: Reverse Linked List
// approach: Iterative Three Pointers
// time: O(n) | space: O(1)
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

    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    // Reverse the array (simulating linked list reversal)
    reverse(arr.begin(), arr.end());

    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;

    return 0;
}
