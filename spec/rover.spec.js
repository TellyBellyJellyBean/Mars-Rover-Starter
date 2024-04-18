const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  test("constructor sets position and default values for mode and generatorWatts", function() {
    let newRover = new Rover(12000);
    expect(newRover.position).toEqual(12000);
    expect(newRover.mode).toEqual("NORMAL");
    expect(newRover.generatorWatts).toEqual(110);
  });

  //Test 8
  test("response returned by receiveMessage contains the name of the message.", function() {
    let newRover = new Rover(12000);
    let totallyNewMessage = new Message("Testing");
    let response = newRover.receiveMessage(totallyNewMessage);
    expect(response.message).toEqual("Testing");
  });
  
  //Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let commands = [new Command("MOVE", 500), new Command("MODE_CHANGE", "LOW_POWER")];
    let totallyNewMessage = new Message("Test 9: return two results from two commands", commands);
    let newRover = new Rover(12000);
    let totallyNewResults = newRover.receiveMessage(totallyNewMessage);
    expect(totallyNewResults.results.length).toEqual(commands.length);
  });

  //Test 10
  test("responds correctly to status check command", function(){
    let commands = [new Command("STATUS_CHECK")];
    let roverStatus = new Message("Test 10: STATUS CHECK", commands);
    let newRover = new Rover(12000);
    let roverStatusCheck = newRover.receiveMessage(roverStatus);
    // console.log(this);
    console.log(roverStatusCheck.results[0].roverStatus);
    expect (roverStatusCheck.results[0].completed).toEqual(true);
    expect(roverStatusCheck.results[0].roverStatus).toEqual({ mode: 'NORMAL', generatorWatts: 110, position: 12000 });
  });

  //Test 11
  test("responds corretly to mode change command", function(){
    let newRover = new Rover(12000)
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let modeMessage = new Message("Test 11: Mode change", commands);
    let lowPowerMode = newRover.receiveMessage(modeMessage);
    expect(lowPowerMode.results[0].completed).toEqual(true);//to demonstrate completed:true
    expect(newRover.mode).toEqual("LOW_POWER");
    console.log(newRover.mode);
  });

  // //Test 12
  test("responds with a false completed value when attempting to move in 'LOW_POWER' mode", function(){
    let newRover = new Rover(12000);
    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", 10000)];
    let moveInLowPowerMessage = new Message("Test 12: Not moving in low power", commands);
    let testMoveInLowPower = newRover.receiveMessage(moveInLowPowerMessage);
    expect(testMoveInLowPower.results[1].completed).toEqual(false);
    expect(newRover.position).toEqual(12000);
  });

  //Test 13
  test("responds with the position for the move command", function(){
    let newRover = new Rover(12000);
    let commands = [new Command("MOVE", 42069)];
    let moveUpdateMessage = new Message("Test 13: position update", commands);
    let updatedPosition = newRover.receiveMessage(moveUpdateMessage);
    expect(updatedPosition.results[0].completed).toEqual(true);
    expect(newRover.position).toEqual(42069);
  });

});
