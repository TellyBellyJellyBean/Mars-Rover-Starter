class Message {
   // Write code here! This class builds an object with two properties.
   constructor(name, commands = []){

      this.name = name; 
         if (!name){
            throw Error ("Name type required.")
         
      }
      this.commands = commands;
   }
}

module.exports = Message;