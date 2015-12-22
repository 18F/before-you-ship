require 'html/proofer'

BASE_OPTS = {
  url_ignore: [
    %r{https://github.com/18F/Accessibility_Reviews}i,
    %r{https://github.com/18F/DevOps}i,
    %r{https://github.com/18F/handbook}i
  ]
}

task :build do
  # https://github.com/jekyll/jekyll/issues/4122#issuecomment-159439360
  sh 'bundle exec jekyll build -d _site/before-you-ship/'
end

task ci_test: [:build] do
  HTML::Proofer.new('./_site', BASE_OPTS.merge(
    disable_external: true
  )).run
end

task test: [:build] do
  HTML::Proofer.new('./_site', BASE_OPTS).run
end

task default: :test
