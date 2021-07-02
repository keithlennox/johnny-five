# Johnny-Five Inventor's Kit

This repo was created to run Johnny-Five Inventor's Kit projects.  

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit  

## Instructions (Mac)

- Install node.js.
- npm install t2-cli -g.
- Connect Tessel 2 to computer using the usb cable. The micro usb end goes into the tessel. It will take the Tessel 30 seconds to boot up.
- Tessel 2 has booted when the blue LED is steady instead of blinking.
- t2 list. The t2-cli tool will look for connected Tessels. Tessels can be connected by USB or over WiFi, but for now, it should spot your single, USB-connected Tessel.
- t2 wifi -n [SSID] -p [password]. This only has to be done once.
- t2 provision. This creates a secure, trusted connection between your computer and the Tessel, whether it's connected by wire WiFi. You'll need to do this before you can deploy code to the Tessel. This only needs to be done once.
- t2 list. You'll see your Tessel twice! That's because it's connected via USB and WiFi. You can now plug your Tessel into an electrical outlet or battery instead of tethering it to your computer.
- t2 update. Updates the firmware on the Tessel 2.
- Restore this repo to your desktop.
- cd into the folder.
- npm install.
- Run the various js test files in this repo: t2 run name-of-js-file.
- Follow any special instructions included in the js files.