// id: 006
// title: Maximum Subarray
// approach: Kadane's Algorithm
// time: O(n) | space: O(1)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];

    int currentSum = nums[0];
    int maxSum = nums[0];

    for (int i = 1; i < n; i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }

    cout << maxSum << endl;
    return 0;
}
