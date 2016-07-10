import {
  createComponent,
  assetsImporter,
  htmlImporter,
  cssImporter,
  jsImporter
} from 'reflecto';

const config = options => Object.assign({
  importers: {
    assets: [ assetsImporter('assets') ],
    html: [ htmlImporter('*.html') ],
    css: [ cssImporter('*.css') ],
    js: [ jsImporter('*.js') ]
  }
}, options);

const Card = createComponent(config({
  name: 'Card',
  dir: __dirname + '/component/card'
}));

const List = createComponent(config({
  name: 'List',
  dir: __dirname + '/component/list',
}));

const CardGrid = createComponent(config({
  name: 'ListCard',
  dir: __dirname + '/component/layouts/',
  dependencies: [
    Card,
    List
  ],
}));

import Reflecto from 'Reflecto';

// create an api
const api = new Reflecto();

api.addComponent([ Card, List, CardGrid ]);
