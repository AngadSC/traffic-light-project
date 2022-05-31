input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P2) == 1) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(4000)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) == 1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P0) == 1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
