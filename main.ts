let walk_light = 0
function green () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    walk_light = 0
}
input.onButtonPressed(Button.A, function () {
    if (walk_light == 1) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
function blue () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
    walk_light = 0
}
function red () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    walk_light = 1
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
    if (walk_light == 0) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
