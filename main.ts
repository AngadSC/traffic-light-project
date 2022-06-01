function green () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) == 0) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # # # # #
            . . . . .
            `)
    } else {
        if (pins.analogReadPin(AnalogPin.P1) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (pins.analogReadPin(AnalogPin.P2) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
        }
    }
})
function blue () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function red () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
basic.forever(function () {
    green()
    basic.pause(4000)
    blue()
    basic.pause(1500)
    red()
    basic.pause(5000)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) == 0) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
    if (pins.analogReadPin(AnalogPin.P2) == 0) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
