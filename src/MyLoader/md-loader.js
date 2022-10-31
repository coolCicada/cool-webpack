const MarkdownIt = require('markdown-it');

module.exports = function (source) {
  const md = new MarkdownIt({
    html: true,
  });
  let html = md.render(source);
  html = `module.exports=${JSON.stringify(html)}`;
  this.callback(null, html);
}