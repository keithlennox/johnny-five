/* Sense light

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-6-reading-a-light-sensor
*/

var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var light = new five.Light("a7");

  light.on("change", () => console.log(light.level));
});