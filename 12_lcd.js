/* LCD screen

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-12-using-an-lcd-screen
*/

var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var lcd = new five.LCD({
    pins: ["a2", "a3", "a4", "a5", "a6", "a7"]
  });

  lcd.cursor(0, 0).print("SUCCESS IS A");
  lcd.cursor(1, 0).print("TERRIBLE TEACHER");
});