radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    music.setVolume(60)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.play(music.stringPlayable("A F - C - - - - ", 120), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    runservo = 0
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("back")
})
let runservo = 0
runservo = 0
basic.forever(function () {
    while (runservo) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(200)
    }
})
