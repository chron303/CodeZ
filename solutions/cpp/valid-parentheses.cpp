// id: 009
// title: Valid Parentheses
// approach: Stack
// time: O(n) | space: O(n)
// author: chron303

#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string s;
    cin >> s;

    stack<char> st;
    unordered_map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};

    for (char c : s) {
        if (pairs.find(c) != pairs.end()) {
            if (st.empty() || st.top() != pairs[c]) {
                cout << "false" << endl;
                return 0;
            }
            st.pop();
        } else {
            st.push(c);
        }
    }

    cout << (st.empty() ? "true" : "false") << endl;
    return 0;
}
