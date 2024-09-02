// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The final output on the console should look like this:
/*
Hello Naveen
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Naveen
*/


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



