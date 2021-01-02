/* SPDT switch
 
https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-5-reading-an-spdt-switch
 */

var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {

  var led = new five.Led("b5");
  var spdt = new five.Switch("a5");

  spdt.on("close", () => {
    console.log("Switch closed")
    spdt.on("close", () => led.on());
  });

  spdt.on("open", () => {
    console.log("Switch opened")
    spdt.on("open", () => led.off());
  });

});