import Component from './Component';

const defaults = {
  name: undefined,
  version: 'latest',
  importers: { },
  dir: undefined,
  dependencies: [],
  tags: [],
};

export default function createComponent(config) {
  const opts = Object.assign(defaults, config);
  const component = new Component(opts.name);

  if (opts.dir !== undefined) {
    component.defineDirectory(opts.dir);
  } else {
    throw new Error(`\`${opts.name}\` component is missing \`dir\` option`);
  }

  component.defineVersion(opts.version);
  component.defineImporters(opts.importers);

  // optional dependencies
  if (opts.dependencies.length) {
    opts.dependencies.forEach(dep => component.addDependency(dep));
  }

  // optionally add tags for searching
  if (opts.tags.length) {
    opts.tags.forEach(tag => component.addTag(tag));
  }



  return component;
}
