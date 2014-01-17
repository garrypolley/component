# component

This is simply a testing ground for making HTML based components.

Current components:

* [tab](./src/tab/)


## running locally

Install npm -> `brew install nodejs`

Make sure you have npm modules loaded up locally:

```shell
npm install
````

I use this command to compile the less & js files (run it from inside src/):

```shell
../node_modules/nodemon/bin/nodemon.js --exec './compile.sh' -e less,css,js
```

This command builds the `component.css` and `component.min.js` files in the [build](./build/)
directory.  These files are the needed files to make this all work.


May use python to run the server in the examples folder:

```shell
python -m SimpleHTTServer
```

or

```shell
python -m http.server
```