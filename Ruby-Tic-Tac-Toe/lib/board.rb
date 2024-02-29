class Board
  attr_accessor :board
  def initialize
    @board = Array.new(3) { Array.new(3) { ' ' } }
  end

  def set_position(x, y, simbol)
    self.board[x][y] = simbol
  end

end
