# encoding: utf-8
$LOAD_PATH.unshift(File.dirname(__FILE__))
$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), '..', 'src'))

require 'rspec'
require './src/domain/guess_result'
require './src/domain/master_mind'
