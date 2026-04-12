// id: 001
// title: Two Sum
// approach: Hash Map
// time: O(n) | space: O(n)
// author: arnav-goel

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    int target;
    cin >> target;

    unordered_map<int, int> seen;
    for (int i = 0; i < n; i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            cout << "[" << seen[complement] << "," << i << "]" << endl;
            return 0;
        }
        seen[nums[i]] = i;
    }
    return 0;
}