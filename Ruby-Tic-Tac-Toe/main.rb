require "./lib/game"
require "./lib/player"
require "./lib/display"
require "./lib/board"

puts "Tic Tac Toe"
puts "Player 1:"
player1 = Player.new(gets)
puts "Player 2:"
player2 = Player.new(gets)

game = Game.new(player1,player2)
game.startGame
