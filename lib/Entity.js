var Type = require('entitydb-type');

var Entity = Type.extend({
  type: "Entity",
  properties: {},
  methods: {},
}, {
  extended: require('./extended'),
});

module.exports = Entity;