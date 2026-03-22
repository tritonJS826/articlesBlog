# Waybar Styles 2026

My [waybar](https://github.com/Alexays/Waybar) CSS styles (Tokyo Night theme)

```
* {
    border: none;
    border-radius: 0;
    font-family: "DejaVu Sans Mono", monospace;
    font-size: 18px;
}

window#waybar {
    background-color: #1a1b26; /* Tokyo Night: Deep Background */
    color: #c0caf5;            /* Tokyo Night: Main Foreground */
}

/* Individual Module Colors */

#cpu {
    color: #9ece6a;
}
#cpu.warning {
    color: orange;
}
#cpu.critical {
    color: red;
}

#memory {
    color: #9ece6a;
}
#memory.warning {
    color: orange;
}
#memory.critical {
    color: red;
}

#temperature {
    color: #2ac3de; /* Cyan */
}

#temperature.critical {
    color: #f7768e; /* Red */
}

#battery {
    color: #9ece6a; /* Green */
}

#battery.warning {
    color: #e0af68; /* Yellow */
}

#battery.critical:not(.charging) {
    color: #f7768e; /* Red */
}

#battery.charging {
    color: #73daca; /* Teal/Aqua */
}

#network {
    color: #7aa2f7; /* Blue */
}

#network.disconnected {
    color: #565f89; /* Muted Grey-Blue */
}


#disk {
    color: #9ece6a;
}

#disk.warning {
    color: orange;
}

#disk.critical {
    color: red;
}

#clock {
    color: #c0caf5;
    padding: 0;
}

#custom-sep {
    color: #414868; /* Terminal Black/Gutter color */
    padding: 0;
}

/* Workspaces */

#workspaces button {
    color: #a9b1d6;
    background: #1a1b26;
    padding: 0;
    border-bottom: 3px solid transparent;
}

#workspaces button.focused {
    background-color: #7aa2f7;
    color: #1a1b26;
    border-bottom: 3px solid #bb9af7;
}

#workspaces button:hover {
    background: #24283b;
    color: #c0caf5;
}

#workspaces button.urgent {
    background-color: #f7768e;
    color: #1a1b26;
}
```

2026-03-23
