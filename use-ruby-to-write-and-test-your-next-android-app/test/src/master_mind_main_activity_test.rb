activity Java::org.leandog.mastermind.ruboto.MasterMindMainActivity

setup do |activity|
  start = Time.now
  loop do
    @text_view = activity.findViewById(MasterMindMainActivity::TEXT_MESSAGE_VIEWID)
    break if @text_view || (Time.now - start > 60)
    sleep 1
  end
  assert @text_view
end

test('initial setup') do |activity|
  assert_equal 'Enter four numbers below and submit your guess', @text_view.text
end

test('button changes text') do |activity|
  button = activity.findViewById(MasterMindMainActivity::BUTTON_SUBMIT_GUESS)
  button.performClick
  assert @text_view.text.match 'You have (.*) numbers and (.*) positions correct.'
end
