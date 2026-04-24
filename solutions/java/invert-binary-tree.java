// id: 012
// title: Invert Binary Tree
// approach: BFS with level-order I/O
// time: O(n) | space: O(n)
// author: chron303

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());

        if (n == 0) {
            return;
        }

        String[] input = br.readLine().trim().split(" ");
        int[] tree = new int[n];
        for (int i = 0; i < n; i++) {
            tree[i] = Integer.parseInt(input[i]);
        }

        // Invert by swapping left and right children
        for (int i = 0; i < n; i++) {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            if (left < n && right < n) {
                int temp = tree[left];
                tree[left] = tree[right];
                tree[right] = temp;
            }
        }

        // Trim trailing -1s
        int last = n - 1;
        while (last >= 0 && tree[last] == -1) last--;

        if (last >= 0) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i <= last; i++) {
                if (i > 0) sb.append(" ");
                sb.append(tree[i]);
            }
            System.out.println(sb.toString());
        }
    }
}
