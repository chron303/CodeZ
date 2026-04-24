// id: 007
// title: Climbing Stairs
// approach: Bottom-Up DP (Fibonacci)
// time: O(n) | space: O(1)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    if (n <= 2) {
        cout << n << endl;
        return 0;
    }

    long long prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        long long curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    cout << prev1 << endl;
    return 0;
}
