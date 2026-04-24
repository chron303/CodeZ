// id: 003
// title: Valid Anagram
// approach: Frequency Count
// time: O(n) | space: O(1)
// author: chron303

import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String s = br.readLine().trim();
        String t = br.readLine().trim();

        if (s.length() != t.length()) {
            System.out.println("false");
            return;
        }

        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        for (int c : count) {
            if (c != 0) {
                System.out.println("false");
                return;
            }
        }

        System.out.println("true");
    }
}
