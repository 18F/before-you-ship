require 'html/proofer'

task :build do
  # https://github.com/jekyll/jekyll/issues/4122#issuecomment-159439360
  sh 'bundle exec jekyll build -d _site/before-you-ship/'
end

task ci_test: [:build] do
  HTML::Proofer.new('./_site', disable_external: true).run
end

task test: [:build] do
  HTML::Proofer.new('./_site').run
end

task default: :test
