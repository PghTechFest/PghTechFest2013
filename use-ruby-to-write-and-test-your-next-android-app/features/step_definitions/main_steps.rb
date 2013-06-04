When(/^the application launches$/) do
  on(MainScreen).wait_for_text('Enter four numbers')
end

Then(/^I see "(.*?)"$/) do |text|
  on(MainScreen).has_text?(text).should == true
end

Then(/^I do not see "(.*?)"$/) do |text|
  on(MainScreen).has_text?(text).should == false
end

