
 let MODE = 0
let S_RIGHT = 0
let ROTATE_POSITION = 0
let RIGHT_POSITION = 0
let LEFT_POSITION = 0
let amount_to_move = 0
let degrees_calc = 0
let degrees_calc2 = 0
let inJOYL_X = 0
let inJOYL_Y = 0
let inJOYR_X = 0
let inJOYR_Y = 0
let inSLIDE = 0
let inVER = 0
let inKNOB = 0
let COLOUR = 0
let inputval = 0

let S_LEFT = 6
let S_ROTATE = 1
let S_JAW1 = 5
let S_JAW2 = 4
let A_LEFTJOY_X = 1
let A_SLIDE = 2
let A_EXPANS = 3
let A_RIGHTJOY_Y = 4
let A_RIGHTJOY_X = 5
let A_KNOB = 6
let A_VERSION = 7

serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
serial.writeString("Welcome to dojo:bot App v3")
dojobot.bot_init()
dojobot.bot_servo(S_LEFT, 90)
dojobot.bot_servo(S_RIGHT, 90)
dojobot.bot_servo(S_ROTATE, 90)
dojobot.bot_servo(S_JAW1, 90)
dojobot.bot_servo(S_JAW2, 90)
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Square)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    MODE = 0
    dojobot.bot_led_colour(1, 16764159)
    dojobot.bot_led_colour(2, 16777215)
    dojobot.bot_led_colour(3, 16764159)
} else {

    basic.showString("v3.0")

    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    MODE = 1
    dojobot.bot_led_colour(1, 13434879)
    dojobot.bot_led_colour(2, 16777215)
    dojobot.bot_led_colour(3, 13434879)
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
        let A_LEFTJOY_Y = 0
        // In normal operation
        // Transmit joystick functions onwards
        inJOYL_X = dojobot.bot_input(A_LEFTJOY_X) - 2200
        inJOYL_Y = dojobot.bot_input(A_LEFTJOY_Y) - 2200
        inJOYR_X = dojobot.bot_input(A_RIGHTJOY_X) - 2200
        inJOYR_Y = dojobot.bot_input(A_RIGHTJOY_Y) - 2200
        inSLIDE = dojobot.bot_input(A_SLIDE)
        inKNOB = dojobot.bot_input(A_KNOB)
        inVER = dojobot.bot_input(A_VERSION)
        serial.writeLine("" + (`OP LX${inJOYL_X} LY${inJOYL_Y} RX${inJOYR_X} RY${inJOYR_Y} S${inSLIDE} K${inKNOB} V${inVER}`))

        degrees_calc = 0
        inputval = inJOYL_Y
        if (inputval > 0) {
            if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 - inputval / 20)
                Math.constrain(degrees_calc, 0, 90)
            }
        } else {
            inputval *= -1
            if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 + inputval / 23.4)
                Math.constrain(degrees_calc, 90, 180)
            }
        }
        dojobot.bot_servo(S_LEFT, degrees_calc)
        serial.writeLine("" + (`LEFT Y input ${inJOYL_Y} degrees ${degrees_calc}`))

        degrees_calc = 0
        inputval = inJOYR_Y
        if (inputval > 0) {
            if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 - inputval / 20)
                Math.constrain(degrees_calc, 0, 90)
            }
        } else {
            inputval *= -1
if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 + inputval / 23.4)
                Math.constrain(degrees_calc, 90, 180)
            }
        }
        dojobot.bot_servo(S_RIGHT, degrees_calc)
        serial.writeLine("" + (`RIGHT Y input ${inJOYR_Y} degrees ${degrees_calc}`))
        degrees_calc = 0
        inputval = inJOYL_X
        if (inputval > 0) {
            if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 - inputval / 20)
                Math.constrain(degrees_calc, 0, 90)
            }
        } else {
            inputval *= -1
if (inputval < 100) {
                degrees_calc = 90
            } else {
                inputval += 0 - 100
                degrees_calc = Math.round(90 + inputval / 23.4)
                Math.constrain(degrees_calc, 90, 180)
            }
        }
        dojobot.bot_servo(S_ROTATE, degrees_calc)
        serial.writeLine("" + (`ROTATE input ${inJOYL_X} degrees ${degrees_calc}`))
        degrees_calc = 0
        inputval = inSLIDE
        if (inputval < 100) {
            degrees_calc = 60
            degrees_calc2 = 120
        } else {
            inputval += 0 - 100
            degrees_calc = Math.round(80 + inputval / 50)
            degrees_calc2 = Math.round(100 - inputval / 50)
            Math.constrain(degrees_calc, 0, 180)
Math.constrain(degrees_calc2, 0, 180)
        }
        dojobot.bot_servo(S_JAW1, degrees_calc2)
        dojobot.bot_servo(S_JAW2, degrees_calc)
        serial.writeLine("" + (`JAWS input ${inSLIDE} degrees1 ${degrees_calc} degrees2 ${degrees_calc2}`))
    }
})
