# component

This is simply a testing ground for making HTML based components



## running locally

I use this command to compile the less files:

```shell
node_modules/nodemon/bin/nodemon.js --exec 'node_modules/less/bin/lessc static/less/main.less static/css/main.css' -e less,css
```

install npm stuff with the `packages.json` file.

used python to run the server:
`pythom -m SimpleHTTServer` or `python -m http.server`