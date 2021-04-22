input.onButtonPressed(Button.A, function () {
    mod_functionare = 1
    basic.showString("Prietenos")
})
input.onButtonPressed(Button.AB, function () {
    mod_functionare = 3
    basic.showString("Fricos")
})
input.onButtonPressed(Button.B, function () {
    mod_functionare = 2
    basic.showString("Agresiv")
})
let distanta = 0
let mod_functionare = 0
mod_functionare = 0
basic.forever(function () {
    TPBot.headlightColor(0xffffff)
    distanta = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (distanta < 10) {
        basic.pause(2000)
        if (mod_functionare == 1) {
            TPBot.headlightColor(0x00ff00)
            distanta = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
            while (distanta > 5) {
                TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 30)
                basic.pause(500)
                distanta = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
            }
            TPBot.stopCar()
            basic.pause(1000)
        } else if (mod_functionare == 2) {
            TPBot.headlightColor(0xff0000)
            for (let index = 0; index < 2; index++) {
                TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 2)
                TPBot.setTravelTime(TPBot.DriveDirection.Backward, 100, 0.5)
            }
        } else if (mod_functionare == 3) {
            TPBot.headlightColor(0xb09eff)
            TPBot.setTravelTime(TPBot.DriveDirection.Backward, 100, 1)
            TPBot.setTravelTime(TPBot.DriveDirection.Left, 100, 0.5)
            TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 1)
        }
    }
})
