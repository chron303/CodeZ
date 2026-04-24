// id: 010
// title: Contains Duplicate
// approach: Hash Set
// time: O(n) | space: O(n)
// author: chron303

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());
        String[] input = br.readLine().trim().split(" ");

        Set<Integer> seen = new HashSet<>();
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(input[i]);
            if (seen.contains(num)) {
                System.out.println("true");
                return;
            }
            seen.add(num);
        }

        System.out.println("false");
    }
}
