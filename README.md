# Johnny-Five Inventor's Kit

This repo was created to run Johnny-Five Inventor's Kit projects. This kit uses the Tessel 2 open-source development board. Below are the steps I used to get this running. I followed the instructions here:  

https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit  

## Ist time usage (Mac)

- npm install node.js (already done).  
- Create folder on desktop: j5ik.  
- cd into folder.  
- npm init.  
- npm install johnny-five tessel-io.
- npm install t2-cli -g (did not work). Got an EACCES error.  
- sudo chown -R $USER /usr/local/lib/node_modules.  
- npm install t2-cli -g (worked!). This is a global install so it only has to be done once.  
- Connect Tessel 2 to computer using the usb cable. The micro usb end goes into the tessel. It will take the Tessel 30 seconds to boot up.  
- Tessel 2 has booted when the blue LED is steady instead of blinking.  
- t2 list. The t2-cli tool will look for connected Tessels. Tessels can be connected by USB or over WiFi, but for now, it should spot your single, USB-connected Tessel.  
- t2 wifi -n [SSID] -p [password]. Replace [SSID] with the name of your wireless network and [password]. This only has to be done once.  
- t2 provision. This creates a secure, trusted connection between your computer and the Tessel, whether it's connected by wire or over the air (WiFi). You'll need to do this before you can deploy code to the Tessel. This only needs to be done once.  
- t2 list. You'll see your Tessel twice! That's because it's connected via USB and WiFi.  
- t2 update. Updates the firmware on the Tessel 2. This crashed and hung. I had to press control C. When I tried t2 update again, it said: Tessel-XXXXXXXXXXXX is already on the latest firmware version (0.2.0). You can force an update with "t2 update --force".  
- Push the j5ik folder to github repo called johnny-five.

## Regular usage

- Restore johnny-five repo to desktop.  
- cd into the folder.  
- npm install.  
- Connect Tessel 2 to your computer or a power outlet. When connected to a power outlet, your computer communicates with tessel over WIFI.
- Run the various test files in this repo: t2 run name-of-js-file. Follow any special instructions included in the js files.