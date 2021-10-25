let tool = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else if (tool == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # # # .
            # # # # #
            # # . # #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
