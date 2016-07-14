export function html(tagName, attribs, children) {
  if (Array.isArray(children)) {
    children = children.join('');
  }

  return `<${tagName} ${renderAttributes(attribs)}>${children}</{$tag}>`;
}

export function renderAttributes(attribs) {
  if (attribs) {
    return Object.keys(attribs)
      .filter(key => !(key === 'cssMod' || key === 'addClass'))
      .map(key => `${key}=${attribs[key]}`)
      .join(' ');
  }

  return '';
}

const renderVariations = () => {

};

const Icon = name => html('i', { class: `icon icon--${name}` });

const Button = (attribs, children) => {
  return html('a', Object.assign({
    class: `button ${renderCssModifier('button', attribs.cssMod)} ${attribs.className}`
  }, attribs)), children);
};

const HelloWorldBtn =
  html('a', null, [
    Icon('checkmark'),
    ' Hello World'
  ]);
