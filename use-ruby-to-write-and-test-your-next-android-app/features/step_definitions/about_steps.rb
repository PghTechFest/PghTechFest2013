
When(/^the user chooses 'About' from the menu$/) do
  on(MainScreen).click_menu_item 'menu_about'
end

Then(/^he will see the applications version info$/) do
  on(MainScreen).has_text?('Version').should == true
end
