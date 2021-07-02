/* Blink an LED light

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-1-blink-an-led
*/

var Tessel = require("tessel-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Tessel()
});
board.on("ready", () => {
  var led = new five.Led("a5");
  led.blink(500);
});