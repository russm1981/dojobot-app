basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
dojobot.bot_init()
basic.forever(function () {
    // if (dojobot.bot_input(0) < 2000) {
    // led.plot(0, 0)
    // } else {
    // led.unplot(0, 0)
    // }
    // if (dojobot.bot_input(1) < 2000) {
    // led.plot(0, 1)
    // } else {
    // led.unplot(0, 1)
    // }
    // if (dojobot.bot_input(2) < 2000) {
    // led.plot(0, 2)
    // } else {
    // led.unplot(0, 2)
    // }
    // if (dojobot.bot_input(3) < 2000) {
    // led.plot(0, 3)
    // } else {
    // led.unplot(0, 3)
    // }
    // if (dojobot.bot_input(4) < 2000) {
    // led.plot(1, 0)
    // } else {
    // led.unplot(1, 0)
    // }
    // if (dojobot.bot_input(5) < 2000) {
    // led.plot(1, 1)
    // } else {
    // led.unplot(1, 1)
    // }
    // if (dojobot.bot_input(6) < 2000) {
    // led.plot(1, 2)
    // } else {
    // led.unplot(1, 2)
    // }
    // if (dojobot.bot_input(7) < 2000) {
    // led.plot(1, 3)
    // } else {
    // led.unplot(1, 3)
    // }
    led.plotBarGraph(
    dojobot.bot_input(2),
    100,
    true
    )
    pins.digitalWritePin(DigitalPin.P9, 1)
    if (input.buttonIsPressed(Button.A)) {
        led.plot(4, 4)
    } else {
        led.unplot(4, 4)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.plot(4, 3)
    } else {
        led.unplot(4, 3)
    }
})
