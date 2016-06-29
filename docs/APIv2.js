import Reflecto from 'reflecto';

// transforms
import postcssTransform from 'reflecto-transform-postcss';
import rogainTransform from 'reflecto-transform-rogain';
import babelTransform from 'reflecto-transform-babel';
import handlebarsTransform from 'reflecto-transform-handlebars';

import variables from './variables';

// create an api
const api = new Reflecto();

// define component file entry transforms
api.use(postcssTransform([ autoprefixer() ]));
api.use(rogainTransform());
api.use(babelTransform());
api.use(handlebarsTransform());

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

// Define a couple components using default sources
api.component('Card', __dirname + '/components/card');
api.component('List', __dirname + '/components/list');

// define a component with custom sources
api.component('Header', __dirname + '/components/header', {
  assetsDir: 'assets',
  css: '*.css',
  handlebars: '.hbs'
});

// Get component CSS
api.css('Card', { variations: 'small' });

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
