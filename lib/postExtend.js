var _ = require('lodash');
var mschema = require('mschema');
_.mergeDefaults = require('merge-defaults');

var wrapMethod = require('./wrapMethod');

module.exports = function extended (Child) {

  // set default Entity props
  Child.prototype = _.mergeDefaults(Child.prototype,
    (!_.isEmpty(this.prototype)) ? this.prototype : {
    properties: {},
    methods: {},
    config: {},
  });


  // validate Entity props against Entity schema
  var validation = mschema.validate(Child.prototype, {
    type: {
      type: "string",
      required: true,
    },
    // TODO validate schemas types
    properties: "object",
    methods: "object",
    // TODO properly validate methods
    // {
    // input: "schema",
    // fn: "function",
    // output: "schema",
    // }
    config: "object",
  });

  // if Entity is invalid, throw errors
  if (!validation.valid) {
    throw new Error("Invalid Entity: "
      + JSON.stringify(validation.errors, null, 2)
    );
  }

  // for each Entity method, wrap it in schema validation
  _.forEach(Child.prototype.methods, function (method, name) {
    Child.prototype[name] = wrapMethod(method);
  });
};