def max(list):
    d = []
    for i in range(len(list)-1):
        if(list[i] == list[i+1]):
            d.append(1)
        else:
            d.append(0)
    return d

s = input()
tests = int(input())
consec = max(list(s))
for i in range(tests):
    inp = input()
    l = int(inp.split(" ")[0])
    r = int(inp.split(" ")[1])
    print (consec[l-1:r-1].count(1))
