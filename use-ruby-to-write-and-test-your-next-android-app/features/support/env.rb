require 'rspec-expectations'
require 'brazenhead'
require 'brazenhead/server'
require 'gametel'
require 'ADB'
require 'require_all'

require_rel 'screens'

World(Gametel::Navigation)

server = Brazenhead::Server.new("bin/MasterMindRuboto-debug.apk")

class Driver
  include Brazenhead
end

Before do
  @driver = Driver.new
  server.start("MasterMindRubotoActivity")
end

After do
  server.stop
end


