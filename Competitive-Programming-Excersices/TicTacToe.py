tests = int(input())
simbols = ["O", "+", "X"]
winner = False
for i in range(tests):
    board = input() + input() + input()
    for simbol in simbols:
        if(board[0] == simbol and board[1] == simbol and board[2] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[3] == simbol and board[4] == simbol and board[5] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[6] == simbol and board[7] == simbol and board[8] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[0] == simbol and board[3] == simbol and board[6] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[1] == simbol and board[4] == simbol and board[7] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[2] == simbol and board[5] == simbol and board[8] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[0] == simbol and board[4] == simbol and board[8] == simbol):
            print(simbol)
            winner = True
            break
        elif(board[2] == simbol and board[4] == simbol and board[6] == simbol):
            print(simbol)
            winner = True
            break
    if(not winner): print("DRAW")
    winner = False


