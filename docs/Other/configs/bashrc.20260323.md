# Bashrc 2026

My latest ~/.bashrc file

```
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

# custom below
alias u='/home/triton/scripts/update.sh'
alias show-apps='grep -r "Telegram" ~/.local/share/applications/'
alias gs='git status'

alias telegram='chromium --app-id=ibblmnobmgdmpoeblocemifbpglakpoi'
alias viber='flatpak run com.viber.Viber'

eval "$(mise activate bash)"
eval "$(fzf --bash)"

# dor obs screen capture (i added it to /etc/environment)
export QT_QPA_PLATFORM=wayland

# to see gopath with mise
export MISE_GO_SET_GOPATH=true
# export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$(go env GOPATH)/bin
# bash history
export HISTSIZE=50000
export HISTFILESIZE=50000
```

2026-03-23
