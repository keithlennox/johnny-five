/* Read analog input data from a potentiometer

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-3-reading-a-potentiometer
*/

var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var sensor = new five.Sensor("a7");

  sensor.on("change", () => console.log(sensor.value));
});