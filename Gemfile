source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails',                  '4.2.6'
# Use PostgreSQL as the database for Active Record
# Starting postgresql server - sudo service postgresql start
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails',             '5.0.4'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier',               '2.7.2'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails',           '4.1.1'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'bootstrap-sass',         '3.3.6'


# Use jquery as the JavaScript library
gem 'jquery-rails',           '4.1.1'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks',             '2.5.3'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder',               '2.4.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc',                   '0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt',                 '3.1.11'

gem 'will_paginate',          '3.0.7'
gem 'bootstrap-will_paginate', '0.0.10'
gem 'stripe'
# gem 'whenever', :require => false CRONJOBS GEM

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug',               '8.2.1'
  gem 'web-console',          '3.1.1'
  gem 'spring',               '1.6.2'
end


group :test do
  gem 'minitest-reporters',   '1.1.7'
  gem 'mini_backtrace',       '0.1.3'
  gem 'guard-minitest',       '2.4.4'
end

group :production do
  gem 'rails_12factor',       '0.0.3'
  gem 'puma',                 '2.16.0'
end