const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    //Test 4
    test("should return an error if a name is NOT passed into the constructor as the first parameter.", function(){
        expect( function() { new Message();}).toThrow(new Error("Name type required."));
    });//This is the same test as test 1 in command.spec. Seems error should be related to new Name and error message should be "First parameter must be a name."

    //Test 5
    test("constructor sets name.", function(){
        let message = new Message("Mars Rover")
        expect(message.name).toEqual("Mars Rover");
    });

    //Test 6
    test("contains a commands array passed into the constructor as the 2nd argument.", function(){
        let message = new Message("Mars Rover", ["MOVE", "STATUS_CHECK", "MODE_CHANGE"])
        expect(message.commands[1]).toEqual("STATUS_CHECK");
    });
});
