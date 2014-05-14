/*var expect = require('chai').expect;
var _ = require('lodash');

var Entity;
var Tool;
var Creature;
var creature;

describe("Entity", function () {
    
  it("should load Entity", function () {
    Entity = require('../');
    expect(Entity).to.exist;
  });


  it("should extend Entity to Tool", function () {
    var Tool = Entity.extend({
      type: "Tool"
      properties: {
        durability: "number",
      },
    });
    expect(Tool).to.exist;
  });

  it("should extend Entity to Creature", function () {

    Creature = Entity.extend({
      type: "Creature",
      properties: {
        name: {
          type: "string",
          required: true,
        },
        tool: {
          type: "Tool",
        },
      },
    };);
    expect(Creature).to.exist;
    expect(Creature.prototype.entities).to.equal(["Tool"]);
  });

  it("should create creature", function () {
    creature = new Creature();

    expect(creature.entities).to.equal(["Tool"]);
  });
});*/