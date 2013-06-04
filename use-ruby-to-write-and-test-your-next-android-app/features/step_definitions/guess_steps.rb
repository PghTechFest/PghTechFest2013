Then(/^I press the submit button$/) do
  on(MainScreen).submit
end

Then(/^I enter 4 numbers$/) do
  on(MainScreen).guess 1, 2, 3, 4
end

Given(/^I enter (\d+) correct numbers and (\d+) correct position$/) do |numbers, positions|
  nums = [0, 0, 0, 0]
  num = numbers.to_i
  pos = positions.to_i
  if pos == 1
    nums[0] = 4
    if num >= 2
      nums[1] = 1
    end
    if num >= 3
      nums[2] = 9
    end
    if num == 4
      nums[3] = 2
    end
  elsif pos == 2
    nums = [4, 2, 0, 0]
    if num >= 3
      nums[2] = 9
    end
    if num == 4
      nums[3] = 1
    end
  elsif pos == 3
    nums = [4, 2, 1, 0]
  elsif pos == 4
    nums = [4, 2, 1, 9]
  end
  on(MainScreen).guess nums[0], nums[1], nums[2], nums[3]
end

Given(/^I enter all of the correct demo numbers$/) do
  on(MainScreen).guess 4, 2, 1, 9
end
