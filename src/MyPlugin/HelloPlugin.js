class HelloPlugin {
  constructor(options) {
    console.log('HelloPlugin: options', options);
  }

  apply(compiler) {
    compiler.hooks.done.tap('HelloPlugin', () => {
      console.log('HelloPlugin');
    })
  }
}

module.exports = HelloPlugin;