const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  //Test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  //Test 2
  test("constructor sets command type", function(){
    let commandTypeOne = new Command("MOVE");
    expect(commandTypeOne.commandType).toEqual("MOVE");
  });

  //Test 3
  test("makes constructor set a value passed in as the 2nd argument", function(){
    let newValue = new Command("MOVE", 90210);
    expect(newValue.value).toEqual(90210);
  });

});

