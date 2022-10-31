const { copy } = require('../utils/index');

class CopyPlugin {
  constructor(options) {
    this.from = options.from;
    this.to = options.to;
  }

  apply(compiler) {
    const { from, to } = this;
    compiler.hooks.done.tap('CopyPlugin', () => {
      copy(from, to);
    })
  }
}

module.exports = CopyPlugin;