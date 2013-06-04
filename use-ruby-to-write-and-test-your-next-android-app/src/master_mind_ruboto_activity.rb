require 'ruboto/widget'

class MasterMindRubotoActivity
  def on_create(bundle)
    super
    i = android.content.Intent.new
    i.setClassName($package_name, "#{$package_name}.MasterMindMainActivity")
    startActivity(i)
    finish
  end
end
