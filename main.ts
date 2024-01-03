input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    dojobot.bot_servo(LEFT, 0)
    dojobot.bot_servo(RIGHT, 0)
    dojobot.bot_servo(ROTATE, 0)
    dojobot.bot_servo(JAW1, 0)
    dojobot.bot_servo(JAW2, 0)
})
input.onButtonPressed(Button.AB, function () {
    dojobot.bot_relay(1)
})
input.onButtonPressed(Button.B, function () {
    dojobot.bot_servo(LEFT, 180)
    dojobot.bot_servo(RIGHT, 180)
    dojobot.bot_servo(ROTATE, 180)
    dojobot.bot_servo(JAW1, 180)
    dojobot.bot_servo(JAW2, 180)
})
let inJOYL_X = 0
let inJOYL_Y = 0
let inJOYR_X = 0
let inJOYR_Y = 0
let inSLIDE = 0
let inVER = 0
let inKNOB = 0

let JAW2 = 0
let JAW1 = 0
let ROTATE = 0
let RIGHT = 0
let LEFT = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
serial.writeString("dojo:bot App v1")
dojobot.bot_init()
dojobot.bot_led_colour(1, 14548991)
dojobot.bot_led_colour(2, 16777215)
dojobot.bot_led_colour(3, 16777215)
LEFT = 6
RIGHT = 0
ROTATE = 1
JAW1 = 5
JAW2 = 4

const ADC_CH_LEFTJOY_Y = 0
const ADC_CH_LEFTJOY_X = 1
const ADC_CH_SLIDE = 2
const ADC_CH_EXPANS = 3
const ADC_CH_RIGHTJOY_Y = 4
const ADC_CH_RIGHTJOY_X = 5
const ADC_CH_KNOB = 6
const ADC_CH_VERSION = 7

basic.forever(function () {
    dojobot.bot_relay(0)
    inJOYL_X = dojobot.bot_input(ADC_CH_LEFTJOY_X)
    inJOYL_Y = dojobot.bot_input(ADC_CH_LEFTJOY_Y)
    inJOYR_X = dojobot.bot_input(ADC_CH_RIGHTJOY_X)
    inJOYR_Y = dojobot.bot_input(ADC_CH_RIGHTJOY_Y)
    inSLIDE = dojobot.bot_input(ADC_CH_SLIDE)
    inKNOB = dojobot.bot_input(ADC_CH_KNOB)
    inVER = dojobot.bot_input(ADC_CH_VERSION)
    serial.writeLinewriteline(`OP LX${inJOYL_X} LY${inJOYL_Y} RX${inJOYR_X} RY${inJOYR_Y} S${inSLIDE} K${inKNOB} V${inVER}`)
})
