class MasterMind
  attr_accessor :first, :second, :third, :forth
  def initialize (first=nil, second=nil, third=nil, forth=nil)
    @first=first || rand(0..9)
    @second=second || rand(0..9)
    @third=third || rand(0..9)
    @forth=forth || rand(0..9)
  end

  def numbers
    [@first, @second, @third, @forth]
  end

  def find_correct_positions(first, second, third, forth)
    correct_positions = 0
    correct_positions += 1 if first == @first
    correct_positions += 1 if second == @second
    correct_positions += 1 if third == @third
    correct_positions += 1 if forth == @forth
    return correct_positions
  end

  def find_correct_numbers (first, second, third, forth)
    correct_numbers = 0
    guessed_numbers = [first, second, third, forth]
    numbers.each do |number|
      if (guessed_numbers.include? number)
        correct_numbers += 1
      end
    end
    return correct_numbers
  end

  def guess (first, second, third, forth)
    correct_numbers = find_correct_numbers(first, second, third, forth)
    correct_positions = find_correct_positions(first, second, third, forth)
    GuessResult.new correct_numbers, correct_positions
  end
end
