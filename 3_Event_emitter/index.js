const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

};
const myEmitter = new EventEmitter();

//add listener for log event
myEmitter.on('log',(msg)=> {
    return logEvents(msg);
})

setTimeout(()=>{
    myEmitter.emit('log', 'Log Event emitted!')
},2000)