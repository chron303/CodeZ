// id: 005
// title: Merge Two Sorted Lists
// approach: Two Pointer Merge
// time: O(n + m) | space: O(n + m)
// author: chron303

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());
        int[] a = new int[n];
        if (n > 0) {
            String[] parts = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) a[i] = Integer.parseInt(parts[i]);
        } else {
            br.readLine(); // consume empty line
        }

        int m = Integer.parseInt(br.readLine().trim());
        int[] b = new int[m];
        if (m > 0) {
            String[] parts = br.readLine().trim().split(" ");
            for (int i = 0; i < m; i++) b[i] = Integer.parseInt(parts[i]);
        }

        List<Integer> merged = new ArrayList<>();
        int i = 0, j = 0;
        while (i < n && j < m) {
            if (a[i] <= b[j]) merged.add(a[i++]);
            else merged.add(b[j++]);
        }
        while (i < n) merged.add(a[i++]);
        while (j < m) merged.add(b[j++]);

        if (!merged.isEmpty()) {
            StringBuilder sb = new StringBuilder();
            for (int k = 0; k < merged.size(); k++) {
                if (k > 0) sb.append(" ");
                sb.append(merged.get(k));
            }
            System.out.println(sb.toString());
        }
    }
}
