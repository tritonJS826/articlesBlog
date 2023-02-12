# i3-status bar

В комплекте с i3 идет [i3status bar](https://i3wm.org/docs/i3status.html)- полоска с различными индикаторами, которая так же может быть легко кастомизирована. Я использую следующий конфиг:

```
# i3status configuration file.
# see "man i3status" for documentation.

# It is important that this file is edited as UTF-8.
# The following line should contain a sharp s:
# ß
# If the above line is not correctly displayed, fix your editor first!

general {
  colors = true
  interval = 5
  output_format = i3bar        
}

#order += "ipv6"
order += "wireless _first_"
order += "ethernet _first_"
order += "battery all"
order += "disk /"
order += "disk /media/sda/"
order += "cpu_usage"
order += "cpu_temperature 0"
order += "memory"
order += "tztime local"

wireless _first_ {
  format_up = "(%essid:%quality) %ip"
  format_down = "W: down"
}

ethernet _first_ {
#  format_up = "E: %ip (%speed)"
  format_down = "E: down"
}

battery all {
  format = "BAT %status %percentage %remaining"
}

disk "/" {
  format = "NVME %avail"
#  10 = 50Gb, I don't know why
  low_threshold = 10 
}

disk "/media/sda/" {
  format = "SDA %avail"
#  10 = 50Gb, I don't know why
  low_threshold = 10
}

cpu_usage {
  format = "CPU %usage"	
}

cpu_temperature 0 {
  format = "%degrees°C"
  max_threshold = 85
}

memory {
  format = "RAM %available"
  threshold_degraded = "3G"
  format_degraded = "MEMORY < %available"
}

tztime local {
  format = "%Y-%m-%d %H:%M:%S"
}

```

2023-02-11
