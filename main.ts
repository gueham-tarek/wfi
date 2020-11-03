input.onButtonPressed(Button.A, function () {
    basic.showString(Obloq_http.getObloq_IP())
})
input.onButtonPressed(Button.B, function () {
    Obloq.Obloq_http_setup(
    SerialPin.P1,
    SerialPin.P2,
    "AT-4GLTE-E5172AS-22-14644",
    "74L1AB65A1E",
    "192.168.1.7",
    80
    )
    basic.showString("Hello!")
})
Obloq_http.Obloq_WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"AT-4GLTE-E5172AS-22-14644",
"74L1AB65A1E"
)
