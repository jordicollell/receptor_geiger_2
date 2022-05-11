radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(100)
    }
})
led.plot(0, 0)
radio.setGroup(1)
basic.forever(function () {
	
})
