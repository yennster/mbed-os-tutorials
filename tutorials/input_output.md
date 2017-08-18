# Input/Output

Use this tutorial to introduce yourself to the Analog, Digital, and Serial I/O functions on Mbed OS!

## Digital

### `DigitalIn` & `DigitalOut`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Digital_In_Out/)

```
#include "mbed.h"

DigitalIn  button(SW2); // change this to the button on your board
DigitalOut led1(LED1);

int main() {

    // Optional: set mode as PullUp/PullDown/PullNone/OpenDrain
    button.mode(PullNone);

    // check button object is initialized and connected to a pin
    while(button.is_connected()) {
        // press the button and see the led change
        led1 = button;
    }
}
```

Digital I/O allows you to read and write to specified Digital pins on your board. In the example above, a button is used for `DigitalIn` and an LED is used for `DigitalOut`. A function of the DigitalIn API allows you to set the pin mode for your button, in this case we have set the button's mode to `PullNone`. While you are pressing the button on your board, the LED will light up.

If you would rather control your board's components via voltages, `AnalogIn` and `AnalogOut` should be used.

## Analog

### `AnalogOut`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Analog_Out/)

```
#include "mbed.h"

AnalogOut  aout(p18); // change this to the analog output on your board

int main() {
    while(true) {
        for (float i = 0.0f; i < 1.0f; i += 0.1f) {
            aout = i;
            wait(1.0f);
        }
    }
}
```

Analog I/O allows you to read and write voltages to specified Analog pins on your board. In the example above, the voltages 0 - 3.3 volts are written to an analog output pin. If an LED was connected to this `AnalogOut` and ground, you would see the LED slowly get brighter every second the turn off, and repeat.

## Serial

### Device & USB UART

[Import into Compiler](https://developer.mbed.org/compiler/#import:https://developer.mbed.org/teams/mbed_example/code/Serial_ex_2)

```
#include "mbed.h"

Serial pc(USBTX, USBRX); // tx, rx
Serial device(MBED_CONF_APP_UART1_TX, MBED_CONF_APP_UART1_RX);  // tx, rx

int main() {
    while(true) {
        if(pc.readable()) {
            device.putc(pc.getc());
        }
        if(device.readable()) {
            pc.putc(device.getc());
        }
    }
}
```

`Serial` I/O has two unidirection channels, one for sending (TX) and one for receiving (RX). The example above allows you to send a message to your device from your computer and send a message to your computer from your device via a `Serial` terminal viewer (such as [PuTTy](http://www.putty.org/)).

## Further Reading

* [Other Tutorials]
* [Suggestions on what to do next / links]
