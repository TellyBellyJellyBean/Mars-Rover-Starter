// const Message = require('../message.js');
// const Command = require('../command.js');

class Rover {
   constructor(position){
      this.position = position;       
      this.mode = "NORMAL"
      this.generatorWatts = 110
   }
   // Write code here!
   receiveMessage(newMessage){
      let message = newMessage.name;
      let results = [];
      let response = {message, results};
         for (let i = 0; i < newMessage.commands.length; i++) {
            if (newMessage.commands[i].commandType === "MOVE" && this.mode === "LOW_POWER"){
               results.push({completed: false});
            }   else if (newMessage.commands[i].commandType === "MOVE") {
               results.push({completed: true});
               this.position = newMessage.commands[i].value
         }  else if (newMessage.commands[i].commandType === "MODE_CHANGE"){
               results.push({completed: true});
               this.mode = newMessage.commands[i].value;
         }  else if (newMessage.commands[i].commandType === "STATUS_CHECK"){
               results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
         }  else {
            throw Error ("Invalid command.");
         }


         }
      return response;
   }
}




module.exports = Rover;