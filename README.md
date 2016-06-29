# reflecto

## Example

### Setup Environment

```js
import Reflecto from 'reflecto';

// transforms
import postcssImporter from 'reflecto-importer-postcss';
import rogainImporter from 'reflecto-importer-rogain';
import babelImporter from 'reflecto-importer-babel';
import handlebarsImporter from 'reflecto-importer-handlebars';

import variables from './variables';

// create an api
const api = new Reflecto();

// define component file entry transforms
api.use(postcssImporter([ autoprefixer() ]));
api.use(rogainImporter());
api.use(babelImporter());
api.use(handlebarsImporter());

// define shared variables
api.variables = variables;

// define default file sources relative
// to each componet directory
api.defaultSources({
  assetsDir: 'assets',
  postcss: '*.css',
  rogain: '*.rogain',
  babel: '**/*.js'
});

// define components using default sources
api.component('Card', __dirname + '/components/card');
api.component('List', __dirname + '/components/list');

// define a component with custom sources
api.component('Header', __dirname + '/components/header', {
  assetsDir: 'assets',
  css: '*.css',
  handlebars: '.hbs'
});
```

### Output Composed Components

```js
// build html using components
import { Component as c, Tag as t } from 'reflecto';

c('Card', { addClass: 'my-card' }, [
  c('Header', { tagName: 'h3' }, [ 'Hello World' ]),
  c('List', null, [
    c('ListItem', null, [
      t('p', null, [ 'Lorem ipsum dolor sit amet.' ]),
    ]),
    c('ListItem', null, [
      t('p', null, [ 'Dolor sit amet lorem ipsum.' ]),
    ])
  ]),
  c('Button', { href: 'learn-more' }, [ 'Learn More' ])
]);
```

### Output CSS

```js
api.css('Card', { variations: 'small' });
```

## Ecosystem

### Component Importers

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
