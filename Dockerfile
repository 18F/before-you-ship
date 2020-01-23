FROM starefossen/ruby-node:2-8

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

# Set some other necessary ENVs
ENV LC_ALL=C.UTF-8

CMD bundle exec jekyll serve --host 0.0.0.0 --incremental
