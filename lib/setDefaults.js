var _ = require('lodash');
_.mergeDefaults = require('merge-defaults');

module.exports = function defaults (Child) {

  // set default Entity props
  Child.prototype = _.mergeDefaults(
    Child.prototype,
    this.prototype
  );
};