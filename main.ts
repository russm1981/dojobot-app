let MODE = 0
let COLOUR = 0
let inKNOB = 0
let inVER = 0
let inSLIDE = 0
let inJOYR_Y = 0
let inJOYR_X = 0
let inJOYL_Y = 0
let inJOYL_X = 0
const S_LEFT = 6
const S_RIGHT = 0
const S_ROTATE = 1
const S_JAW1 = 5
const S_JAW2 = 4
const A_LEFTJOY_Y = 0
const A_LEFTJOY_X = 1
const A_SLIDE = 2
const A_EXPANS = 3
const A_RIGHTJOY_Y = 4
const A_RIGHTJOY_X = 5
const A_KNOB = 6
const A_VERSION = 7
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
serial.writeString("Welcome to dojo:bot App v1")
dojobot.bot_init()
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Square)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    MODE = 0
} else {
    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    MODE = 1
}
basic.forever(function () {
    if (MODE == 0) {

        // In servo calibration mode
        // On A -> send to 0
        if (pins.digitalReadPin(DigitalPin.P5) == 0) {
            serial.writeLine("A")
            basic.showString("A")
            dojobot.bot_servo(S_LEFT, 0)
            dojobot.bot_servo(S_RIGHT, 0)
            dojobot.bot_servo(S_ROTATE, 0)
            dojobot.bot_servo(S_JAW1, 0)
            dojobot.bot_servo(S_JAW2, 0)
        } else {
            // On B -> send to 180
            if (pins.digitalReadPin(DigitalPin.P11) == 0) {
                serial.writeLine("B")
                basic.showString("B")
                dojobot.bot_servo(S_LEFT, 180)
                dojobot.bot_servo(S_RIGHT, 180)
                dojobot.bot_servo(S_ROTATE, 180)
                dojobot.bot_servo(S_JAW1, 180)
                dojobot.bot_servo(S_JAW2, 180)
            } else {
                // On C -> send to 90
                if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                    serial.writeLine("C")
                    basic.showString("C")
                    dojobot.bot_servo(S_LEFT, 90)
                    dojobot.bot_servo(S_RIGHT, 90)
                    dojobot.bot_servo(S_ROTATE, 90)
                    dojobot.bot_servo(S_JAW1, 90)
                    dojobot.bot_servo(S_JAW2, 90)
                }
            }
        }
    } else {
        
        // In normal operation
        // Transmit joystick functions onwards
        inJOYL_X = dojobot.bot_input(A_LEFTJOY_X)
        inJOYL_Y = dojobot.bot_input(A_LEFTJOY_Y)
        inJOYR_X = dojobot.bot_input(A_RIGHTJOY_X)
        inJOYR_Y = dojobot.bot_input(A_RIGHTJOY_Y)
        inSLIDE = dojobot.bot_input(A_SLIDE)
        inKNOB = dojobot.bot_input(A_KNOB)
        inVER = dojobot.bot_input(A_VERSION)
        serial.writeLine("" + (`OP LX${inJOYL_X} LY${inJOYL_Y} RX${inJOYR_X} RY${inJOYR_Y} S${inSLIDE} K${inKNOB} V${inVER}`))
    }
})
