var event_manager = (function(){
  var self = {};
    self.callbacks = {};
    self.emit = function(event_name, data) {
        if (!self.callbacks[event_name])
            return;
        for (var i in self.callbacks[event_name]) {
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
        for (var i in self.callbacks[event_name]) {
            if (self.callbacks[event_name][i] == callback)
                self.callbacks[event_name].splice(i, 1)
        }
    };
    return self;
})();

//USAGE
function callback1(message){ alert(message + "1"); }
function callback2(message){ alert(message + "2"); }
event_manager.on("message", callback1);
event_manager.on("message", callback2);
event_manager.emit("message", "test");
// alerts "test1"
// alerts "test2"
event_manager.removeListener("message", callback1);
event_manager.emit("message", "second test");
// alerts "second test2"