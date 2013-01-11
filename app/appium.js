// Appium webserver controller methods
// https://github.com/hugs/appium/blob/master/appium/appium.py

var Appium = function(app, uuid, verbose) {
  this.app = app;
  this.uuid = uuid;
  this.verbose = verbose;
  this.instrumentsProcess = null;
};

Appium.prototype.start = function(err, cb) {
  console.log('The appium client start function has been called!');
};

Appium.prototype.stop = function(err, cb) {
  console.log('The appium client stop function has been called!');
};

Appium.prototype.proxy = function(err, command, cb) {
  // was thinking we should use a queue for commands instead of writing to a file
  session.queue.push(command);
  console.log('Pushed command to appium work queue.' + command);
};

module.exports = function(app, uuid, version) {
  return new Appium(app, uuid, version);
}; 