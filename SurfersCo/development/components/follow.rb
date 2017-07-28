require 'watir'
require 'pry'
require 'rb-readline'
require_relative "credentials"
require_relative "users2"
Selenium::WebDriver::Chrome.driver_path = "./chromedriver.exe"

username = $username
password = $password
users = $users
like_counter = 0
num_of_rounds = 0;
followed_users = 0;
usersCountReset = 0;
browser = Watir::Browser.new :chrome, switches: ['--incognito']
browser.goto "instagram.com/accounts/login/"

#-----Logg in Start-----
puts "Logging in..."
browser.text_field(:name => "username").set "#{username}"
browser.text_field(:name => "password").set "#{password}"
browser.button(:class => "_ah57t _84y62 _i46jh _rmr7s").click
puts "Logged in."
sleep(2)
#-----Logg in End-----

#-----Follower Start-----
users.each{ |val|
  browser.goto "instagram.com/#{val}/"
  if browser.div(:class => '_nljxa').exists?
    if browser.button(:class => '_ah57t _84y62 _frcv2 _rmr7s').exists?
      puts "Following #{val}"
      browser.button(:class => '_ah57t _84y62 _frcv2 _rmr7s').click
      followed_users += 1
      usersCountReset += 1
      sleep(1)
    end
  end
  if usersCountReset > 25
    puts "Waiting for 30 minutes until continue"
    puts "Max followed #{followed_users}"
    sleep(1800)
    usersCountReset = 0
  end
}
#-----Follower end-----
