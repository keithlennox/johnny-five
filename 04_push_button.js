/* Push button

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-4-reading-a-push-button
*/

var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led = new five.Led("a5");
  var button = new five.Button("a2");

  button.on("press", () => {
    console.log("Button Pressed!")
    led.on()
  });

  button.on("hold", () => {
    console.log("Button Pressed for more than half second!")
    led.blink(500)
  });

  button.on("release", () => {
    console.log("Button Released!")
    led.off()
  });
  
});