FROM ruby:2.7

WORKDIR /usr/src/app

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN gem install bundler -v 1.17.3
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

# Set some other necessary ENVs
ENV LC_ALL=C.UTF-8

CMD bundle exec jekyll serve --host 0.0.0.0 --incremental
