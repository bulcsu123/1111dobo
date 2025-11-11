let dobás = 0
input.onGesture(Gesture.Shake, function () {
    dobás = randint(1, 6)
    if (dobás == 1) {
        basic.showNumber(1)
    } else {
        if (dobás == 2) {
            basic.showNumber(2)
        } else {
            if (dobás == 3) {
                basic.showNumber(3)
            } else {
                if (dobás == 4) {
                    basic.showNumber(4)
                } else {
                    if (dobás == 5) {
                        basic.showNumber(5)
                    } else {
                        if (dobás == 6) {
                            basic.showNumber(6)
                        }
                    }
                }
            }
        }
    }
})
