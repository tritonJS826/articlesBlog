# Waybar Config 2026

My [waybar](https://github.com/Alexays/Waybar) status bar configuration

```
{
    "layer": "top",
    "position": "top",
    "height": 30,
    "modules-left": [
        "sway/workspaces",
        "sway/mode"
    ],
    "modules-center": [""],
    "modules-right": [
        "network#wireless",
        "custom/sep",
        "network#ethernet",
        "custom/sep",
        "battery",
        "custom/sep",
        "disk",
        "custom/sep",
        "cpu",
        "temperature",
        "custom/sep",
        "memory",
        "custom/sep",
        "backlight",
        "custom/sep",
        "pulseaudio",
        "custom/sep",
        "tray",
        "custom/sep",
        "clock"
    ],

    "sway/workspaces": {
       /* "disable-scroll": true,*/
        "all-outputs": true,
        "format": "{name}"
    },

    "sway/window": {
        "max-length": 50
    },

    "clock": {
        "interval": 1,
        "format": "{:%Y-%m-%d %H:%M:%S}"
    },

    "cpu": {
        "interval": 1,
        "format": "CPU {usage}% ",
        "states": {
            "warning": 60,
            "critical": 80
        }
    },


    "memory": {
        "interval": 5,
        "format": "RAM {avail:0.1f}G/{total:0.1f}G",
        "states": {
            "warning": 50,
            "critical": 80
        }
    },

    "temperature": {
        "interval": 5,
        "hwmon-path": "/sys/class/hwmon/hwmon3/temp1_input",
        "critical-threshold": 80,
        "format": "{temperatureC}°C",
        "format-critical": "HOT! {temperatureC}°C",
        "on-click": "foot btop"
    },

   "network#wireless": {
        "interval": 5,
        "interface": "wlan0",
        "format-wifi": "({essid} {signaldBm}) ⇣{bandwidthDownBytes} ⇡{bandwidthUpBytes} {ipaddr}",
        "format-disconnected": "W: down",
        "on-click": "foot sh -c 'echo nmcli device wifi connect SSID password PASSWORD && nmcli device wifi list; read'"
    },

    "network#ethernet": {
        "interval": 5,
        "format-ethernet": "E: {ipaddr} ⇣{bandwidthDownBytes} ⇡{bandwidthUpBytes}",
        "format-disconnected": "E: down"
    },

    "battery": {
        "interval": 5,
        "states": {
            "warning": 30,
            "critical": 15
        },
        "format": "BAT {capacity}%({time})",
        "on-click": "foot -e /home/triton/scripts/setPerformanceMode.sh"
    },

    "disk": {
        "interval": 10,
        "path": "/",
        "format": "NVME {free}",
        "states": {
            "warning": 60,
            "critical": 80
        }
    },

    "custom/sep": {
        "format": "|",
        "tooltip": false
    },

    "tray": {
        "icon-size": 24,
        "spacing": 10
    },


    "backlight": {
        "format": "{icon} {percent}%",
        "format-icons": ["", "", "", "", "", "", "", "", ""],
        "on-scroll-up": "light -A 1",
        "on-scroll-down": "light -U 1"
    },

    "pulseaudio": {
        "format": "{icon} {volume}%",
        "format-bluetooth": " {icon} {volume}%",
        "format-muted": "",
        "format-icons": {
            "headphone": "",
            "hands-free": "",
            "headset": "",
            "phone": "",
            "portable": "",
            "car": "",
            "default": ["", "", ""]
        }
    },
}
```

2026-03-23
