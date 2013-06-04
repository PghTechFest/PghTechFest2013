class PreferencesScreen
  include Gametel

  #activity "MasterMindPreferencesActivity"

  checkbox(:demo_mode, :index => 0)
  button(:save, :text => 'Save Preferences')

  def demo_mode= (on_or_off)
    if self.demo_mode_view.checked? != on_or_off
      self.demo_mode
    end
  end
end