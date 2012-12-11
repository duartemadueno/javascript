var event_emitter = (function(){
  var self = {};
  self.callbacks = {};
  self.emit = function(event_name, data) {
    if (!self.callbacks[event_name])
  	  return;
  	for (var i=0; i < self.callbacks[event_name].length;i++) {
  	  self.callbacks[event_name][i](data)
  	}
  };
  self.on = function(event_name, callback) {
  	if ('function' != typeof (callback))
  	  return;
  	if (!self.callbacks[event_name]) 
  	  self.callbacks[event_name] = [];
  	self.callbacks[event_name].push(callback)
  };
  self.removeListener = function(event_name, callback) {
    if (self.callbacks && self.callbacks[event_name]) {
    	for (var i=0; i < self.callbacks[event_name].length;i++) {
    	  if (self.callbacks[event_name][i] == callback)
    		self.callbacks[event_name].splice(i, 1)
    	}
    }
  };
  return self;
})();

//USAGE
function callback1(message){ console.log(message + "1"); }
function callback2(message){ console.log(message + "2"); }
event_manager.on("message", callback1);
event_manager.on("message", callback2);
event_manager.emit("message", "test");
// returns "test1"
// returns "test2"
event_manager.removeListener("message", callback1);
event_manager.emit("message", "second test");
// returns "second test2"