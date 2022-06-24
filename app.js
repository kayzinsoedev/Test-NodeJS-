var Addition = require('./Addition.js');
console.log(Addition.AddNumber(6,7));

var Tutorial = require('./Tutorial.js');
console.log(Tutorial.tutorial());

var localTutor=require('./NodeTutorial.js');
localTutor.NodeTutorial();
localTutor.NodeTutorial.pTutor();

// var tut = new localTutor.NodeTutorial();  // Create and save object
// tut.pTutor();  // Call function on object