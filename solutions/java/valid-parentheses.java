// id: 009
// title: Valid Parentheses
// approach: Stack
// time: O(n) | space: O(n)
// author: chron303

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine().trim();

        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put(')', '(');
        pairs.put(']', '[');
        pairs.put('}', '{');

        for (char c : s.toCharArray()) {
            if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.peek() != pairs.get(c)) {
                    System.out.println("false");
                    return;
                }
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        System.out.println(stack.isEmpty() ? "true" : "false");
    }
}
