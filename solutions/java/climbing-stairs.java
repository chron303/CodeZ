// id: 007
// title: Climbing Stairs
// approach: Bottom-Up DP (Fibonacci)
// time: O(n) | space: O(1)
// author: chron303

import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());

        if (n <= 2) {
            System.out.println(n);
            return;
        }

        long prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            long curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        System.out.println(prev1);
    }
}
