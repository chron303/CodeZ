// id: 011
// title: Maximum Depth of Binary Tree
// approach: DFS Recursion (level-order input)
// time: O(n) | space: O(n)
// author: chron303

import java.io.*;

public class Main {
    static int[] tree;

    static int maxDepth(int i) {
        if (i >= tree.length || tree[i] == -1) return 0;
        return 1 + Math.max(maxDepth(2 * i + 1), maxDepth(2 * i + 2));
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());

        if (n == 0) {
            System.out.println(0);
            return;
        }

        String[] input = br.readLine().trim().split(" ");
        tree = new int[n];
        for (int i = 0; i < n; i++) {
            tree[i] = Integer.parseInt(input[i]);
        }

        System.out.println(maxDepth(0));
    }
}
