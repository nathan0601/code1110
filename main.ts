basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, x)
        for (let y = 0; y <= x - 1; y++) {
            led.plot(4 - y, x)
            led.plot(4 - x, y)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
