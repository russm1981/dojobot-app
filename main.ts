let MODE = 0

let inJOYL_X = 0
let inJOYL_Y = 0
let inJOYR_X = 0
let inJOYR_Y = 0
let inSLIDE = 0
let inVER = 0
let inKNOB = 0
let S_RIGHT = 0
let S_LEFT = 6
let S_ROTATE = 1
let S_JAW1 = 5
let S_JAW2 = 4
let A_LEFTJOY_Y = 0
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
	if(MODE == 0) {
        //In servo calibration mode
        //On A -> send to 0
        
        //On B -> send to 180
        //On C -> send to 90
    }
    else
    {
        //In normal operation
        //Transmit joystick functions onwards
        // inJOYL_X = dojobot.bot_input(ADC_CH_LEFTJOY_X)
        inJOYL_Y = dojobot.bot_input(A_LEFTJOY_Y)
        inJOYR_X = dojobot.bot_input(A_RIGHTJOY_X)
        inJOYR_Y = dojobot.bot_input(A_RIGHTJOY_Y)
        inSLIDE = dojobot.bot_input(A_SLIDE)
        inKNOB = dojobot.bot_input(A_KNOB)
        inVER = dojobot.bot_input(A_VERSION)
        serial.writeLine("" + (`OP LX${inJOYL_X} LY${inJOYL_Y} RX${inJOYR_X} RY${inJOYR_Y} S${inSLIDE} K${inKNOB} V${inVER}`))
        //On A -> Return home (90 all)
        //On B -> Cycle LED colour
        //On C -> Move servos forward and back
    }
})
