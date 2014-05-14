module.exports = {
  allOf: [{
    $ref: "Type",
  }, {
    properties: {
      methods: {
        type: "object",
      },
      // TODO properly validate methods
      // {
      // input: "Schema",
      // fn: "Function",
      // output: "Schema",
      // }
    },
  }],
};