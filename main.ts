let MODE = 0
let RIGHT = 0
let inJOYL_X = 0
let inJOYL_Y = 0
let inJOYR_X = 0
let inJOYR_Y = 0
let inSLIDE = 0
let inVER = 0
let inKNOB = 0
let LEFT = 6
let ROTATE = 1
let JAW1 = 5
let JAW2 = 4
let ADC_CH_LEFTJOY_X = 1
let ADC_CH_SLIDE = 2
let ADC_CH_EXPANS = 3
let ADC_CH_RIGHTJOY_Y = 4
let ADC_CH_RIGHTJOY_X = 5
let ADC_CH_KNOB = 6
let ADC_CH_VERSION = 7
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
// inJOYL_X = dojobot.bot_input(ADC_CH_LEFTJOY_X)
// inJOYL_Y = dojobot.bot_input(ADC_CH_LEFTJOY_Y)
// inJOYR_X = dojobot.bot_input(ADC_CH_RIGHTJOY_X)
// inJOYR_Y = dojobot.bot_input(ADC_CH_RIGHTJOY_Y)
// inSLIDE = dojobot.bot_input(ADC_CH_SLIDE)
// inKNOB = dojobot.bot_input(ADC_CH_KNOB)
// inVER = dojobot.bot_input(ADC_CH_VERSION)
// serial.writeLine("" + (`OP LX${inJOYL_X} LY${inJOYL_Y} RX${inJOYR_X} RY${inJOYR_Y} S${inSLIDE} K${inKNOB} V${inVER}`))
basic.forever(function () {
	
})
