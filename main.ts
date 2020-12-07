input.onPinPressed(TouchPin.P0, function () {
    groceries[3] = "2021 Jeep Wrangler"
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(groceries.length)
})
input.onPinPressed(TouchPin.P2, function () {
    groceryItem = groceries.removeAt(2)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= groceries.length - 1; index++) {
        serial.writeLine("" + index + " - " + groceries[index])
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= groceries.length - 1; index++) {
        serial.writeLine("" + index + " - " + groceries[index])
    }
})
input.onPinPressed(TouchPin.P1, function () {
    serial.writeLine("" + (groceries.indexOf(groceryItem)))
})
let groceryItem = ""
let groceries: string[] = []
groceries = ["eggs", "apples", "waffles", "ice cream", "nuts", "soap", "dog bones"]
groceryItem = "nuts"
