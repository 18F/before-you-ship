desc 'Build the site for testing'
task :test_build do
  # https://github.com/jekyll/jekyll/issues/4122#issuecomment-159439360
  sh 'jekyll build -d _test_site/'
end


require 'html-proofer'

# keep in sync with the `ignoreUrls` in `./assets/js/before-you-ship.js`
BASE_PROOFER_OPTS = {
  url_ignore: [
    %r{https://github.com/18F/Accessibility_Reviews}i,
    %r{https://github.com/18F/DevOps}i,
    %r{https://github.com/18F/handbook}i,
    %r{https://github.com/18F/writing-lab},
    # https://github.com/gjtorikian/html-proofer/issues/118
    '#'
  ]
}

desc 'Build and test the site, checking local URLs only'
task ci_test: [:test_build] do
  HTMLProofer.check_directory('./_test_site', BASE_PROOFER_OPTS.merge(
    disable_external: true
  )).run
end

desc 'Build and test the site, checking all URLs'
task test: [:test_build] do
  HTMLProofer.check_directory('./_test_site', BASE_PROOFER_OPTS).run
end
