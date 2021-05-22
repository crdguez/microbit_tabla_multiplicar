let factor1 = 0
let factor2 = 0
basic.forever(function () {
    factor1 = randint(2, 9)
    factor2 = randint(2, 9)
    basic.showNumber(factor1)
    basic.showString("x")
    basic.showNumber(factor2)
    basic.pause(2000)
    basic.showString("=")
    basic.showNumber(factor1 * factor2)
    basic.pause(1000)
})
