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
    assets: [ assetsImporter('assets') ],
    html: [ htmlImporter('*.html') ],
    css: [ cssImporter('*.css') ],
    js: [ jsImporter('*.js') ]
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
  dir: __dirname + '/component/list',
  version: '1.2',
  tags: [
    'core',
    'typography'
  ]
}));

// Get component CSS
api.css('Card', { variations: 'small' });

// build html using components
api.html('Card', { addClass: 'my-card' }, [
  api.html('Header', { tagName: 'h3' }, [ 'Hello World' ]),
  api.html('List', null, [
    api.html('ListItem', null, [
      api.html('p', null, [ 'Lorem ipsum dolor sit amet.' ]),
    ]),
    api.html('ListItem', null, [
      api.html('p', null, [ 'Dolor sit amet lorem ipsum.' ]),
    ])
  ]),
  api.html('Button', { href: 'learn-more' }, [ 'Learn More' ])
]);

// get require component js
// used with brfs browserify transfomr
import fs from 'fs';
const { createCard, cardStates } = fs.readFileSync('http://localhost:7789/connectivedx/card/js?version=1.2');

// import using posecss-reflecto

// @import "connectivedx/header/css";
// @import "connectivedx/list/css";
// @import "connectivedx/card/css";
// @import "connectivedx/link/css?variations=small,dark";
// @import "connectivedx/card/css?version=6";
