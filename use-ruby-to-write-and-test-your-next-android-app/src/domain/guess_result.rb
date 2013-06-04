class GuessResult

  attr_accessor :correct_numbers, :correct_positions, :correctly_guessed

  def initialize (numbers, positions)
    @correct_numbers = numbers
    @correct_positions = positions
    @correctly_guessed = (positions == 4)
  end

end