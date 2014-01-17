# tab

This is a simple component that is meant to allow a user ot "switch tabs"
and show the tab content.  Tabs are in a group, and each "tab" has an
associated article or body.  See markup below as an example of the
expected structure.

```html
<div class="tab-group">
    <section class="tab wXofY">
        <header></header>
        <article></article>
    </section>
</div>
```

The classes are necessary as is the markup.  The wXofY class can be:

* w1of2
* w1of4
* w4of6
* Goes all the way up to a configurable limit, currently w14of15

There can be any number of sections of tabs, just depends on the number of
tabs you want.  Also, the `tab-group` takes up 100% width of it's parent container.