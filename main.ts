input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (true) {
    	
    }
})
