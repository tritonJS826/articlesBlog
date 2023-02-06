# My useful bash commands 

### Content

See the content of this file in console with grep:
	```cat "bashUtils.txt" | grep '##'```

## Directories/files utils

* count used space (folder of file size)
```
du -sh ./pathToFolder
```

* show sizes of all current directories
```
du -sh */
```

* show sizes of all hidden folders in current directory
```
du -sh .[^.]*
```

* show all sorted sizes of all files and folders
```
du -sch .[!.]* * | sort -h
```

* find file duplicates in directory "target"
```
fdupes -r target
```

* find text in files recursively
```
grep -rn ./where -e "pattern"
```

* find file by filename and exec command "du -sh" for each
```
find . -name "pattern" -exec du -sh {} \;
```

* find directory by name
```
find . -type d -name "pattern"
```

## Output formatting

* print only 1 and 3 args from each line
```
someCommand | awk '{print $1, $3}'
```

* print lines contains "expression" with 2 lines before and 1 line after
```
someCommand | grep -B 2 -A 1 "expression"
```

* sort output
```
someCommand | sort
```

* print amount of lines, words and bytes in file
```
somecommand | wc 
```
or
```
wc ./File
```

## App privileges administrating
   
* create new user "vasya"
```
# create new regular user with home directory
sudo useradd -m vasya
# set password
sudo passwd vasya 
# add root privelegies
sudo usermod -aG sudo vasya
```

* remove user "vasya" with home directory
```
sudo userdel -r vasya
```
 
* use app "superapp" without sudo privelegies
```
# add app group if it is not exist
sudo groupadd superapp
# add connected user to superappgroup
sudo gpasswd -a $USER superapp
# sometimes its required to restart app daemon
sudo service superapp restart
```

* add all read-write-execute rights for user-group-other
```
sudo chmod ugo+rwx directory/
```
* change owner 
```
sudo chown -R newOwner folder/
```

* create shared drectory "folder/" for user1 and user2
```
	sudo groupadd SharedUsersGroup
        sudo chown :SharedUsersGroup folder
        sudo chmod -R 2775 folder
        sudo adduser user1 SharedUsersGroup
	sudo adduser user2 SharedFolderGroup
```


## Script creating

* to run node script first line must be
```
#! /usr/bin/env node
```

* to hide logging in script
```
./thisIsSomeLineInScript &>/dev/null
```

## Docker basics 
* build image with Dockerfile
```
docker build -t ${yourImageName} ./pathToDockerFile    
```

* start docker container interactive mode with exposed 3000 port
```
docker run -p 3000:3000 -it yourImageName
```

* to remove all dangling (not associated with containers) and all volumes
```
docker system prune -a && docker system prune --volumes
```

* to stop and remove all containers
```
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
```

* bash inside container
```
docker exec -it ${containerName} /bin/bash
```
* to rebuild docker compose images
```
docker-compose up --build --force-recreate 
```
## Drives 

* show all drives (find your usb drive)
```
lsblk 
```

* show file systems info (space info)
```
df -h
```

* disk utils with (helpful with removed files restoration)
```
testdisk
```
 
* format disk
```
sudo mkfs.ext4 -m 0 -L <drivename> /dev/sda
```

## Archiving and backup

* create bootable usb from image or deploy OS from image
```
sudo dd if=path/iso-file.iso of=/dev/sdd bs=1M status=progress
```

* create compressed disk image
``` 
dd if=/dec/sda | gzip -9 > /mnt/external/filename.img.gz
```

* extract compressed disk image
```
zcat /mnt/external/filename.img.gz | dd of=/dev/sda
```

* multithread archiving with pigz and gpg
```
sudo tar ---use-compress-program="pigz -k" cf - dir | gpg -c > dir.tar.gz.gpg 
```

* decryption
```
gpg -d dir.tar.gz.gpg | tar -xvzf -
```

* multithread archiving with pigz
```
tar --use-compress-program="pigz -k" -cf dir1.tar.gz dir1
```

* create tar archive
```
tar -czvf name-of-archive.tar.gz /path/to/directory-or-file
```

* extract from tar archive
```
tar -xzvf archive.tar.gz -C /tmp
```

* i use it for backup my account folder from home directory 
```
time sudo zip -r triton.zip triton -9 -x "*/node_modules/*" -x "*/.wine/*"  -y
```

* synchronize two directories
```
sudo rsync -aAXPvh --exclude="node_modules" --delete sourceFolder/ destinationFolder/
```

## Files utils

* split large file into file by 100 Mb with prefix "testFile" 
```
split -b 100M pathToFile testFile
```

* join splitted files with prefix "testFile"
```
cat testFile* > pathToFinalFile
```

* run command with pipe for all output lines (for example - show size of all files with specific name):
```
find . -name "specificName" | xargs du -sh
```

## Second monitor

* list of available outputs
```
xrandr
```

* add second monitor
```
xrandr --output HDMI-0 --auto --left-of eDP-1-0
```

* after adding second monitor u need to add ability to move workspaces between screens in i3config
```
bindsym $mod+x move workspace to output right
```

## Git

* create patch file with untracked
```
git add . && git diff --cached > file.patch && git reset
```

* apply patch file with whitespaces
```
git apply --reject --whitespace=fix ../file.patch
```

* sync remote branches (remove all local changes)
```
git remote prune origin
```

* remove all unstaged files
```
git clean -df && git checkout .
```

* run garbage collector to reduce size and increase performance
```
git gc --prune=now --aggressive
```

## System & monitoring

* run command every 5 sec and show result
```
watch n -5 yourCommand -commandParam
```

* system log journal
```
sudo journal -f
```

* show all sensors data in your PC 
```
sensors
```

* show sys info in short table (update every 5 seconds)
```
vmstat -S m 5
```

* show system info 
```

# short static overview
neofetch 

# big graphical software
hardinfo

# wild cli tool
glances 

#  monitor processes and PC resources
top/atop/htop

#  cli gpu tool for nvidia drivers
nvidia-smi

#  snapshot of current process
ps -aux
```

* show current network load by server
```
tcptrack -i enp2s0
```

* ssd health (see on field "percentage -- 100% mean that it's over")
or see on 177 - Wear_Leveling_Count - columns value and worst
after this command wait a minute, sometime your system crashed after that,
therefore it's required to reboot your comp
```
sudo smartctl -a /dev/nvme0n1
sudo smartctl -t long -a /dev/sda
```
* show RAM info
```
sudo dmidecode --type 17 | grep peed
```

## User management
   
* switch to another user with lightdm
```
    dm-tool switch-to-user userName
```

* (way 1) open program with access of another user with X11 forwarding (GUI available)
```
    ssh -XY username@localhost yourProgram
```

* (way 2) switch user in terminal (CLI available)
```
    su - username
```

* (way 3) run program with with another user "username"
```
    xhost +
    su - username
    export DISPLAY=:0.0
    yourProgram
```

* (way 4) open any tty (for example tt2: ctrl + alt + f2), login and run
```
    startx
```

## Benchmarking and testing

* web load (stress) test 1000 requests concurrently by 50
```
ab -n 1000 -c 50 https://some.url
```

* benchmark cpu
```
sysbench cpu --threads=100 run
```

* test RAM (check 1024 Mb of memory 5 times)
```
memtester 1024 5
```

* benchmark disk drive
```
sudo hdparm -Tt /dev/nvme0n1
```

## Upgrade ubuntu to the next version
```
sudo do-release-upgrade --allow-third-party
```

## Security

* generate random key
```
openssl rand -base64 32
```

* encrypt file
```
gpg --symmetric fileName
```

* decrypt file
```
gpg filename
```


## Other useful utils

* show all listen ports and pids of appropriate processes
```
sudo netstat -tulnp
```

* play music in console (all tracks from current directory with shuffle) 
```
mplayer -shuffle *
```

* play music with mplayer from playlist
```
mplayer -playlist playlist.txt -shuffle
```

* download track mp3 only from youtube 
```
youtube-dl --ignore-errors --format bestaudio --extract-audio --audio-format mp3 --audio-quality 160K --output "%(title)s.%(ext)s" http://link-to-the-video
```

* download video from youtube
```
youtube-dl -f best http://link-to-the-video  
```

* get public ip info 
```
whois 123.32.112.3
```

* aggressive port scan with OS detection
```
nmap -A -O 1.1.1.1 -p 0-64000
```

* brute ssh with dictionaries
```
nmap 172.16.1.102 -p 22 --script ssh-brute --script-args userdb=users.txt,passdb=passwords.txt
```

* check internet speed test
```
speedtest-cli --secure
```

* linux commands cheat sheet for example for "rsync"
```
curl cheat.sh/rsync    
```

* weather
```
curl wttr.in
```
