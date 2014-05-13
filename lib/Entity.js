function Entity () {
}

// function to extend new type
Entity.extend = require('simple-extend');

// function to be called after extension
Entity.extended = require('./postExtend');

module.exports = Entity;