cat core/js/intro.js tab/js/tab.js core/js/outro.js | ../node_modules/uglify-js/bin/uglifyjs \
  - \
  --output ../build/js/component.min.js \
  --compress

../node_modules/less/bin/lessc core/less/core.less ../build/css/component.css --compress