#!/usr/bin/env sh

# abort on errors
set -env

# build
yarn build

# navigate into the build output directory
cd dist

git push -f git@github.com:Phoxloxley/Phoxloxley.github.io.git master