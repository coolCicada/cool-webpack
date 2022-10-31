module.exports = function(source) {
  const content = source.replace('world', `${this.query.replaceStr}`);
  this.callback(null, content)
}