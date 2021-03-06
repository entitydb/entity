var expect = require('chai').expect;
var _ = require('lodash');
require('longjohn');

var Entity;
var entity;
var creatureSchema;
var Creature;
var creature;

describe("Entity", function () {
    
  it("should load Entity", function () {
    Entity = require('../');
    expect(Entity).to.exist;
  });

  it("should create entity", function () {
    entity = new Entity()
    expect(entity).to.exist;
  });

  it("should extend Entity to Creature", function () {

    creatureSchema = {
      type: "Creature",
      object: {
        properties: {
          name: {
            type: "string",
            required: true,
          },
          food: {
            type: "string",
            enum: ["kale", "quinoa", "spinach"],
          },
        },
      },
      methods: {
        speak: {
          fn: function (callback) {
            return "i love "+this.food+"!";
          },
        },
        greet: {
          input: {
            properties: {
              otherName: {
                type: "string",
                required: true,
              },
            },
          },
          fn: function (otherName, callback) {
            return "hi "+otherName+"! " +
              "my name is "+this.name+".";
          },
        },
      },
    };

    Creature = Entity.extend(creatureSchema);

    expect(Creature).to.exist;
    expect(Creature.prototype.object).to.deep.equal(creatureSchema.object);
    expect(Creature.prototype.methods).to.deep.equal(creatureSchema.methods);
    _.each(creatureSchema.methods, function (method, name) {
      expect(Creature.prototype[name]).to.exist;
    });
  });

  it("should create creature", function () {
    creature = new Creature();

    expect(creature.object).to.deep.equal(creatureSchema.object);
    expect(creature.methods).to.deep.equal(creatureSchema.methods);
    _.each(creatureSchema.methods, function (method, name) {
      expect(creature[name]).to.exist;
    });
  });
});