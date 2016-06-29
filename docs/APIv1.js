
import Reflecto from 'reflecto';

// transforms
import postcssTransform from 'reflecto-transform-postcss';
import rogainTransform from 'reflecto-transform-rogain';
import babelTransform from 'reflecto-transform-babel';
import handlebarsTransform from 'reflecto-transform-handlebars';

import variables from './variables';

// create an api
const api = new Reflecto(__dirname + '/components');

// define component file entry transforms
api.use(postcssTransform([ autoprefixer() ]));
api.use(rogainTransform());
api.use(babelTransform());
api.use(handlebarsTransform());

// define environment variables
api.variables = variables;

// Define a couple components
api.component('Card')
  .assetsDir('card/assets')
  .postcss('card/*.css')
  .rogain('card/*.rogain')
  .babel('card/**/*.js');

api.component('Header')
  .assetsDir('header/assets')
  .css('header/*.css')
  .handlebars('header/*.hbs');

api.component('Button')
  .assetsDir('button/assets')
  .css('button/*.css')
  .html('button/*.html');

// Get component CSS
api.getCss('Card', { variation: 'small' });
api.getHtml('Card', {
  children: [
    api.getHtml('Header', { children: 'Hello World' }),
    '<p>Lorem ipsum dolor sit amet.</p>',
    api.getHtml('Button', { children: 'Submit' })
  ]
});
