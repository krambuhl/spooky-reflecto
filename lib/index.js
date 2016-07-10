import createComponent from './createComponent';
import createElement from './createElement';

export default class Reflecto {
  constructor() {
    this.components = [];
  }

  defineComponent(config) {
    const component = createComponent(config);
  }

  addComponent(component) {
    if (Array.isArray(component)) {
      return component.map(c => this.addComponent(c));
    }

    this.components.push(component);
  }

  findComponent(name, version = 'latest') {
    return this.components.find(c => c.name === name && c.version === version);
  }

  html(tag, attribs, children) {
    if (tag.toLowerCase() !== tag) {
      const component = this.findComponent(tag);

    } else {

    }
  }


}
