var events = require('events');
eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('sssss');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);


const beat = () => {
    setInterval(() => {
        console.log("foo");

        //Fire the 'scream' event:
        eventEmitter.emit('scream'); 
    }, 500);
}

exports.beat = beat