# 5 Ways to Blinky

Blinky is Mbed OS's "Hello World" program. Use this tutorial to introduce yourself to a few of the basic functions included in Mbed OS!

![](http://i.imgur.com/iFLWjDR.gif)  
*Blinky running on an NXP LPC1768 board.*

## `Wait`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Blinky_Wait/)

```
#include "mbed.h"

DigitalOut led1(LED1);

int main() {
    while (true) {
        led1 = !led1;
        wait(0.5);
    }
}
```

The most common way to perform a time delay in Mbed OS is by using the `Wait` function. In the Blinky example above, `main` toggles `led1`, waits for 0.5 seconds, then repeats forever.

If you want to perform a time delay with a callback function, a `Timeout` may be a better option.

## `Timeout`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Blinky_Timeout/)

```
#include "mbed.h"

Timeout flipper_timeout;
DigitalOut led1(LED1);
DigitalOut led2(LED2);

void flip() {
    led2 = !led2;
}

int main() {
    led2 = 1;
    flipper_timeout.attach(&flip, 2.0);

    while (true) {
        led1 = !led1;
        wait(0.2);
    }
}
```

The `Timeout` interface creates an interrupt to call a function after a specified delay. In the Blinky example above, `main` attaches the `flip` function to the `flipper_timeout` interface. The `flipper_timeout` then interrupts `main` to call `flip` after a delay of 2.0 seconds.

With a callback function similar to `Timeout`, a `Ticker` function can be used to create a recurring interrupt at a uniform rate.

## `Ticker`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Blinky_Ticker/)

```
#include "mbed.h"

Ticker flipper_ticker;
DigitalOut led1(LED1);
DigitalOut led2(LED2);

void flip() {
    led2 = !led2;
}

int main() {
    led2 = 1;
    flipper_ticker.attach(&flip, 2.0);

    while (true) {
        led1 = !led1;
        wait(0.5);
    }
}
```

To set up a recurring interrupt at a specified rate, use the `Ticker` interface. In the Blinky example above, `main` attaches the `flip` function to the `flipper_ticker` interface. The `flipper_ticker` then interrupts `main` to call `flip` at an interval of 2.0 seconds.

To run two functions in parallel, the `Thread` interface can be used.

## `Thread`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Blinky_Thread/)

```
#include "mbed.h"

Thread thread;
DigitalOut led1(LED1);
DigitalOut led2(LED2);

void led2_thread() {
    while (true) {
        led2 = !led2;
        wait(1);
    }
}

int main() {
    thread.start(led2_thread);

    while (true) {
        led1 = !led1;
        wait(0.2);
    }
}
```

`Thread` allows for the execution of multiple functions in parallel. In the Blinky example above, two separate threads are created to blink two LEDs. The first thread is automatically created and executes the `main` function; the second thread (`led2_thread`) is created explicitly inside `main`.

Executing multiple functions with `Thread` requires an underlying loop to be running, to more easily create and loop interrupt functions an `EventQueue` is a good option.

## `EventQueue`

[Import into Online Compiler](https://developer.mbed.org/compiler/#import:/users/jplunkett/code/Blinky_Event_Loop/)

```
#include "mbed.h"

DigitalOut led1(LED1);
EventQueue queue(32 * EVENTS_EVENT_SIZE);

void blink(void) {
    led1 = !led1;
}

int main() {
    queue.call_every(500, blink);
    queue.dispatch();
}
```

An event loop (or `EventQueue`) extracts events from a queue and executes them. In the Blinky example above, the event is a pointer to the `blink` function. Once the  queue is "dispatched", the `blink` function is called every 500 millseconds (or 0.5 seconds).

## Further Reading

* [Other Tutorials]
* [Suggestions on what to do next / links]
