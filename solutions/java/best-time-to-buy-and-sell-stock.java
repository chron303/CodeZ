// id: 121
// title: Best Time to Buy and Sell Stock
// approach: Greedy (Track minimum price)
// time: O(n) | space: O(1)
// author: arnav-goel

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int n = Integer.parseInt(br.readLine().trim());
        String[] input = br.readLine().trim().split(" ");
        
        int[] prices = new int[n];
        for (int i = 0; i < n; i++) {
            prices[i] = Integer.parseInt(input[i]);
        }

        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int i = 0; i < n; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            }
        }

        System.out.println(maxProfit);
    }
}