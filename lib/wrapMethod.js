var rpc = require('mschema-rpc');

// wrap method in mschema rpc
module.exports = function wrapMethod (method) {

  return function methodWrapper () {

    // get args into Array
    var args = Array.prototype.slice.call(arguments);

    // invoke rpc with method and args
    rpc.invoke.apply(this, [method].concat(args));
  };

}