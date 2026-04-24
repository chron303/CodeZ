// id: 006
// title: Maximum Subarray
// approach: Kadane's Algorithm
// time: O(n) | space: O(1)
// author: chron303

import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine().trim());
        String[] input = br.readLine().trim().split(" ");

        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(input[i]);
        }

        int currentSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < n; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        System.out.println(maxSum);
    }
}
