var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('eventName', eventHandler);
