var rpc = require('mschema-rpc');
var _ = require('lodash');

// wrap method in mschema rpc
function wrapMethod (method) {
  return function methodWrapper () {

    // get args into Array
    var args = Array.prototype.slice.call(arguments);

    // invoke rpc with method and args
    rpc.invoke.apply(this, [method].concat(args));
  };
}

// wrap methods in mschema rpc
module.exports = function wrapMethods (Child) {

  // for each Entity method, wrap it in schema validation
  _.forEach(Child.prototype.methods, function (method, name) {
    Child.prototype[name] = wrapMethod(method);
  });
};