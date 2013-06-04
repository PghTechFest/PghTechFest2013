require 'spec_helper'

describe MasterMind do

  it "knows what the numbers are" do
    mastermind = MasterMind.new
    mastermind.first.should_not be_nil
    mastermind.second.should_not be_nil
    mastermind.third.should_not be_nil
    mastermind.forth.should_not be_nil
  end

  it "uses random numbers" do
    mastermind1 = MasterMind.new
    mastermind2 = MasterMind.new
    first_numbers = "#{mastermind1.first},#{mastermind1.second},#{mastermind1.third},#{mastermind1.forth}"
    second_numbers = "#{mastermind2.first},#{mastermind2.second},#{mastermind2.third},#{mastermind2.forth}"
    first_numbers.should_not equal second_numbers
  end

  context "initialized game" do
    let(:mastermind) { MasterMind.new 4, 2, 1, 9 }

    it "can give feedback on a guess" do
      result = mastermind.guess(1, 2, 3, 4)
      result.should_not be_nil
    end

    it "can determine a user's accuracy" do
      result = mastermind.guess(4, 1, 3, 4)
      result.correct_numbers.should equal 2
      result.correct_positions.should equal 1
    end

    it "can inform a user on a correct guess" do
      result = mastermind.guess(4, 2, 1, 9)
      result.correct_numbers.should equal 4
      result.correct_positions.should equal 4
      result.correctly_guessed.should equal true
    end
  end

  context "game started with repeated numbers" do
    let(:mastermind) { MasterMind.new 4, 2, 1, 4 }

    it "can determine a user's accuracy" do
      result = mastermind.guess(4, 1, 3, 4)
      result.correct_numbers.should equal 3
      result.correct_positions.should equal 2
    end
    it "can determine a user's accuracy" do
      result = mastermind.guess(4, 1, 4, 4)
      result.correct_numbers.should equal 3
      result.correct_positions.should equal 2
    end
  end
end