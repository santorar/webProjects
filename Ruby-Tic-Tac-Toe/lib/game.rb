class Game
  attr_accessor :player1, :player2

  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @board = Board.new
    @display = Display.new(@board)
  end

  def startGame
    system "clear"
    round until checkWin[0]
    puts "The winner is #{checkWin[1].name}"
  end

  def round
    puts "turn of the player 1"
    turn('x')
    @display.printBoard
    return if checkWin[0]

    puts "turn of the player 1"
    turn('o')
    @display.printBoard
  end

  def turn(simbol)
    puts "enter the row number (0 - 2)"
    begin
      x = gets.to_i
    rescue StandardError
      puts 'invalid input'
      retry
    end
    puts "enter the column number (0 - 2)"
    begin
      y = gets.to_i
    rescue StandardError
      puts 'invalid input'
      retry
    end
    begin
    if @board.board[x][y] == ' '
       @board.set_position(x, y, simbol)
    else
      puts "already ocupated"
      turn(simbol)
    end
    rescue StandardError
      puts "invalid position"
      turn(simbol)
    end
  end

  def checkWin
    return [true, player1] if @board.board.any? { |row| row.all? { |space| space == 'x' } } ||
                              @board.board.all? { |row| row[0] == 'x' } ||
                              @board.board.all? { |row| row[1] == 'x' } ||
                              @board.board.all? { |row| row[2] == 'x' } ||
                              @board.board.all? { |row| row[@board.board.index(row)] == 'x' } ||
                              @board.board.all? { |row| row[0 - (@board.board.index(row) + 1)] == 'x' }

    return [true, player2] if @board.board.any? { |row| row.all? { |space| space == 'o' } } ||
                              @board.board.all? { |row| row[0] == 'o' } ||
                              @board.board.all? { |row| row[1] == 'o' } ||
                              @board.board.all? { |row| row[2] == 'o' } ||
                              @board.board.all? { |row| row[@board.board.index(row)] == 'o' } ||
                              @board.board.all? { |row| row[0 - (@board.board.index(row) + 1)] == 'o' }

    [false, nil]
  end
end
