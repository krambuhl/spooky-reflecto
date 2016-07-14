const defaults = {
  name: undefined,
  version: 'latest',
  dependencies: [],
  tags: [],
  template: ['<div>','</div>'],
  templateType: 'ArrayJoin'
};

export default class Component {
  constructor(config) {
    Object.assign(this, defaults, config);
  }

  addDependency(dependency) {
    if (Array.isArray(dependency)) {
      dependency.forEach(d => this.addDependency(d));
      return;
    }

    if (dependency instanceof Component) {
      this.dependencies.push(dependency);
    } else {
      throw new Error('dependencies should be Component objects');
    }
  }

  addTag(tag) {
    if (Array.isArray(tag)) {
      tag.forEach(t => this.addTag(t));
      return;
    }

    this.tags.push(tag);
  }

  render(attribs, children) {
    return renderSimpleTemplate(this.template, attribs, children);
  }
}


export function renderSimpleTemplate(template, attribs, children) {
  if (children !== undefined) {
    return this.template[0] + children + this.template[1];
  }

  return this.template[0] + this.template[1];
}
