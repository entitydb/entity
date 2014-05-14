var Type = require('entitydb-type');

var setDefaults = require('./setDefaults');
var schema = require('./schema');
var wrapMethods = require('./wrapMethods');

module.exports = function extended (Child) {
  //Type.extended(Child);

  setDefaults(Child);

  //this.validate(Child.prototype, schema);

  wrapMethods(Child);
};