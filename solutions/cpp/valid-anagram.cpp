// id: 003
// title: Valid Anagram
// approach: Frequency Count
// time: O(n) | space: O(1)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string s, t;
    cin >> s >> t;

    if (s.length() != t.length()) {
        cout << "false" << endl;
        return 0;
    }

    int count[26] = {0};
    for (int i = 0; i < (int)s.length(); i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }

    for (int i = 0; i < 26; i++) {
        if (count[i] != 0) {
            cout << "false" << endl;
            return 0;
        }
    }

    cout << "true" << endl;
    return 0;
}
