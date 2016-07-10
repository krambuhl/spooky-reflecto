# reflecto

## Example

### Setup Environment

```js
import Reflecto from 'reflecto';
import {
  assetsImporter,
  htmlImporter,
  cssImporter,
  jsImporter
} from 'reflecto';

// config with defaults
const config = options => Object.assign({
  importers: {
    assets: [ new AssetsImporter('assets/**/*') ],
    html: [ new HtmlImporter('*.html') ],
    css: [ new CssImporter('*.css') ],
    js: [ new JsImporter('*.js') ]
  }
}, options);

// create an api
const api = new Reflecto();

// Define a couple components using default sources
api.defineComponent(config({
  name: 'Card',
  dir: __dirname + '/component/card'
}));

api.defineComponent(config({
  name: 'List',
  dir: __dirname + '/component/list/1.2',
  version: '1.2',
  tags: [
    'core',
    'typography'
  ]
}));
```

### Output Composed Components

```js
// build html using components
api.html('Card', { addClass: 'my-card' }, [
  api.html('Header', { tagName: 'h3' }, [ 'Hello World' ]),
  api.html('List', null, [
    api.html('ListItem', null, [
      api.html('p', null, [ 'Lorem ipsum dolor sit amet.' ])
    ]),
    api.html('ListItem', null, [
      api.html('p', null, [ 'Dolor sit amet lorem ipsum.' ]),
      api.html('img', {
        src: api.asset('Card', 'filler-image.jpg')
      })
    ])
  ]),
  api.html('Button', { href: 'learn-more' }, [ 'Learn More' ])
]);
```

### Output CSS

```js
api.css('Card', { variations: 'small' });
```

### Require component Javascript

```js
// used with brfs browserify transfomr
import fs from 'fs';
const { createCard, cardStates } = fs.readFileSync('http://localhost:7789/connectivedx/card/js?version=1.2');
```

## Ecosystem

### Component Importers

By default reflecto imports assets,

* reflecto-importer-postcss
* reflecto-importer-rogain
* reflecto-importer-babel
* reflecto-importer-handlebars

### Postcss importer

```css
@import "component?name=header";
@import "component?name=list";
@import "component?name=card";
@import "component?name=link&variations=small,dark";
@import "component?name=card&version=6";
```

### Rogain2Reflecto

```xml
<Card addClass="my-card">
  <Header tagName="h3">Hello World</Header>
  <List>
    <ListItem>
      <p>Lorem ipsum dolor sit amet.</p>
    </ListItem>
    <ListItem>
      <p>Dolor sit amet lorem ipsum.</p>
    </ListItem>
  </List>
  <Button href="learn-more">Learn More</Button>
</Card>
```

<!-- ## Install

With [npm](https://www.npmjs.com) do:

```
npm install reflecto
``` -->

## License

MIT
