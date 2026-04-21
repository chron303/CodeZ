// id: 001
// title: Two Sum
// approach: Hash Map
// time: O(n) | space: O(n)
// author: arnav-goel

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());
        String[] input = br.readLine().trim().split(" ");

        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(input[i]);
        }

        int target = Integer.parseInt(br.readLine().trim());

        HashMap<Integer, Integer> seen = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                System.out.println("[" + seen.get(complement) + "," + i + "]");
                return;
            }
            seen.put(nums[i], i);
        }
    }
}