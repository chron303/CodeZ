// id: 004
// title: Reverse Linked List
// approach: Iterative Reversal
// time: O(n) | space: O(1)
// author: chron303

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());

        if (n == 0) {
            System.out.println("");
            return;
        }

        String[] input = br.readLine().trim().split(" ");
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(input[i]);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = n - 1; i >= 0; i--) {
            if (i < n - 1) sb.append(" ");
            sb.append(arr[i]);
        }
        System.out.println(sb.toString());
    }
}
