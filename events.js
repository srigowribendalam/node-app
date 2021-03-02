var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1');
}

var listener2 = function listener2(){
    console.log('listener2');
}

eventEmitter.addListener('connection',listener1);

eventEmitter.addListener('connection',listener2);

var eventListeners =require('events').EventEmitter.listenerCount(eventEmitter,'test')

console.log(eventListeners+" connection done")
eventEmitter.emit('connection')

eventEmitter.removeListener('connection',listener1);
console.log("listener1 will call now")

eventEmitter.emit('connect')

console.log("program End")