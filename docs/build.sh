#!/bin/bash

pushd ..;

npm run build-static

rm -rf docs/target
mkdir -p docs/target

cp -r uw-frame-static/target/* docs/target

popd

../node_modules/bower/bin/bower --config.interactive=false --allow-root install

cp -r bower_components/marked bower_components/angular-marked target/bower_components

cp -r js img markdown my-app superstatic.json target/
