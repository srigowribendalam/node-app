var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler=function(){
    console.log('New File');
}

eventEmitter.on('test', myEventHandler);

eventEmitter.emit('test')