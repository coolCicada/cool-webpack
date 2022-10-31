class HtmlPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('HtmlPlugin', () => {

    });
  }
}

module.exports = HtmlPlugin;