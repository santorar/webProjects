test = int(input())
for _ in range(test):
    inp = input().split(" ")
    a = int(inp[0]) + int(int(inp[2])/2) + int(inp[2]) % 2
    b = int(inp[1]) + int(inp[2]) /2
    if a > b: print('First')
    else: print('Second')