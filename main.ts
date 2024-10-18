input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(0)
basic.forever(function () {
	
})
