require 'html/proofer'

task :build do
  sh 'bundle exec jekyll build'
end

task ci_test: [:build] do
  HTML::Proofer.new('./_site', disable_external: true).run
end

task test: [:build] do
  HTML::Proofer.new('./_site').run
end

task default: :test
