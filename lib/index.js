import Component from './createComponent';
import createElement from './createElement';

const defaults = {
  components: []
};

export default class Reflecto {
  constructor(opts) {
    this.options = Object.assign({}, defaults, opts);
    this.components = this.options.components;
  }

  defineComponent(config) {
    const component = new Component(config);
    this.addComponent(component);
  }

  addComponent(component) {
    if (Array.isArray(component)) {
      component.forEach(c => this.addComponent(c));
      return;
    }

    this.components.push(component);
  }

  findComponent(name, version = 'latest') {
    return this.components.find(c => c.name === name && c.version === version);
  }

  html(tag, attribs, children) {
    const component = this.findComponent(tag);
    if (component !== undefined) {
      return component.html(attribs, children);
    } else {
      return html(tag, attribs, children);
    }
  }

  asset(ns, name) {

  }
}
