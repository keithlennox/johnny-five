/* Blink an LED light

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-1-blink-an-led

NOTE: The first time running this script, an error message appeared saying this project is missing an ".npmrc" file!
To prepare your project for deployment, use the command: t2 init. Once complete, retry.
None of this was mentioned in the johnny-five instructions.*/

var Tessel = require("tessel-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Tessel()
});
board.on("ready", () => {
  var led = new five.Led("a5");
  led.blink(500);
});