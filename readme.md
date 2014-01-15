# component

This is simply a testing ground for making HTML based components.

Right now the index.html + main.less + plugins.less have the only "component".  Which is
a tabbed layout of HTML with a structure of:

```html
<div class="tab-group">
    <section class="tab xOfY">
        <header></header>
        <article></article>
    </section>
</div>
```

The classes are necessary as is the markup.  The xOfY class can be:

* oneOfTwo
* twoOfThree
* fourOfSix
* Goes all the way up to fiveOfSix

## running locally

I recommend running all commands from the root of this repo.

Install npm -> `brew install nodejs`

Make sure you have npm modules loaded up locally:

```shell
npm install
````

I use this command to compile the less files (run it from the root of the git repo):

```shell
node_modules/nodemon/bin/nodemon.js --exec 'node_modules/less/bin/lessc static/less/main.less static/css/main.css' -e less,css
```

used python to run the server:

```shell
python -m SimpleHTTServer
```

or

```shell
python -m http.server
```