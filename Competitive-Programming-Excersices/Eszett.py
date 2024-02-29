word = input()
lword = word.lower()
arr = list(lword)
print(lword)
if("sss" in lword):
    print(lword.replace("sss", "Bs"))
    print(lword.replace("sss", "sB"))
elif("ss" in lword):
    print(lword.replace("ss","B"))
