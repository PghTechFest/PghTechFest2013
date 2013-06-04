require 'ruboto/widget'
require 'ruboto/util/toast'

java_import "android.content.Context"

ruboto_import_widgets :Button, :LinearLayout, :TextView, :CheckBox

class MasterMindPreferencesActivity
  def on_create(bundle)
    super

    self.content_view =
        linear_layout :orientation => :vertical do
          linear_layout :orientation => :horizontal do
            @check_box = check_box :id => 51
            @text_view = text_view :text => 'Demo Mode?', :id => 52, :width => :match_parent
          end
          button :text => 'Save Preferences', :width => :match_parent, :id => 53, :on_click_listener => proc { save_prefs }
        end
        load_prefs
  rescue
    puts "Exception creating activity: #{$!}"
    puts $!.backtrace.join("\n")
  end

  private

  def load_prefs
    demo_mode = PreferenceManager.getDefaultSharedPreferences(self).get_boolean(MasterMindMainActivity::PREFERENCE_DEMO_MODE, false)
    @check_box.set_checked(demo_mode)
  end

  def save_prefs
    PreferenceManager.getDefaultSharedPreferences(self).edit.put_boolean(MasterMindMainActivity::PREFERENCE_DEMO_MODE, @check_box.is_checked).commit
  end

end
