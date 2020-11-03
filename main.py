def on_button_pressed_a():
    basic.show_string(Obloq_http.getObloq_IP())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if Obloq.Obloq_send_ping():
        basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

mykey = "e6d89204db793d8a3a3e1b4b1ace0bbe"
Obloq_http.Obloq_WIFI_setup(SerialPin.P1,
    SerialPin.P2,
    "AT-4GLTE-E5172AS-22-14644",
    "74L1AB65A1E")