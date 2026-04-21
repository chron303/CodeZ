# id: 121
# title: Best Time to Buy and Sell Stock
# approach: Greedy (Track minimum price)
# time: O(n) | space: O(1)
# author: arnav-goel

import sys

def main():
    input = sys.stdin.read
    data = input().split()
    
    n = int(data[0])
    prices = list(map(int, data[1:n+1]))

    min_price = float('inf')
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price
        else:
            max_profit = max(max_profit, price - min_price)

    print(max_profit)

if __name__ == "__main__":
    main()