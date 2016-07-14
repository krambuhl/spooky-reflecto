import Component from './Component';

export default function createComponent(config) {
  const component = new Component(config);

  if (config.dir !== undefined) {
    component.setDirectory(config.dir);
  } else {
    throw new Error(`\`${config.name}\` component is missing \`dir\` option`);
  }

  Object.key(config.importers).forEach(type => {
    component.addImporter(type, importerTypes[type]);
  });

  // optional dependencies
  if (config.dependencies.length) {
    config.dependencies.forEach(dep => {
      component.addDependency(dep);
    });
  }

  // optionally add tags for searching
  if (config.tags.length) {
    config.tags.forEach(tag => {
      component.addTag(tag);
    });
  }



  return component;
}
