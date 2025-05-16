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

* execute command recursevely (convert all jpg files to webp and remove *.jpg files after that)
```
find . -type f -name \*.jpg -exec bash -c 'FN="{}"; ffmpeg -i "{}" "${FN%.jpg}.webp"' \;
find . -type f -name \*.jpg -exec bash -c 'FN="{}"; rm "{}"' \;

# or to encode to av1
find . -type f -name "*.mp4" -exec bash -c 'FN="{}"; ffmpeg -i "{}" -c:v libsvtav1 "${FN%.jpg}.av1.mp4"' \;
```

## craete symbolic links
ls -s new/path/file path/linkName

## Output redirection
```
command > output.log 2>&1
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

* mount drive
```
#check file system (for example ext4)
blkid /dev/sda2
sudo mount -t ext4 /dev/sda2 /media/sda

```

## Archiving and backup

* create bootable usb from image or deploy OS from image
```
sudo dd if=path/iso-file.iso of=/dev/sdd bs=1M status=progress
```

* create compressed disk image
``` 
dd if=/dev/sda | gzip -9 > /mnt/external/filename.img.gz
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
git diff > file.patch
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

* run garbage collector and repack to reduce size and increase performance
```
git gc --prune=now --aggressive
git repack -a -d --depth=250 --window=250
```

* clear all untracked files (useful to clean files after changing .gitignore)
```
git rm -r --cached . && git add --all
```

* find all binary files with their size in history
```
git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(rest)' | grep '^blob' | cut -d' ' -f2- | grep -E '\.(exe|dll|bin|so|zip|tar|gz|jpg|png|pdf)$' | xargs du -sh | sort -h
```

* remove file from history by path
```
git-filter-repo --path fileToRemove --invert-paths
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
* choose appropriate graphic card 
```
# useful for disabling discrete gpu (videocard) in laptops
# use "query" to chech current setting
sudo prime-select 
```
* show current network load by server
```
tcptrack -i enp2s0
```

* ssd health (see on field "percentage used" -- 100% mean that it's over)
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

* create/change swap file size
```
# To make swap permanent put line `swapfile swap swap defaults 0 0` to the file /etc/fstab

# Disable existing swap, create a new swap file or partition or change swap size, format it and enable. If swap wasn't enabled to make it permanent you should put line `swapfile swap swap defaults 0 0` to the file/etc/fstab
sudo swapoff -a
sudo fallocate -l 4G /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

* set battery charge level
```
echo 60 | sudo tee /sys/class/power_supply/BAT0/charge_control_end_threshold
```


* set battery charge thresholds
```
sudo apt install tlp

# Check what package needed for battery:
sudo tlp-stat -b

# Only if tlp-stat said that acpi_call is recommended:
sudo apt install acpi-call-dkms
# Only if tlp-stat said that tp-smapi-dkms is recommended:
sudo apt install tp-smapi-dkms

# Create a config file for TLP 
sudo vim /etc/tlp.d/01-my-charge-thresh.conf
# Insert the values you want:
START_CHARGE_THRESH_BAT0=75
STOP_CHARGE_THRESH_BAT0=80
# Note that some thinkpads have multiple batteries (tlp-stat -b will tell you)
# Restart tlp
sudo systemctl restart tlp
# Check the config status
sudo tlp-stat -b


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

* (way 5) using RDP: client - remmina + server : xrdp
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

* stress test cpu
```
stress --cpu 8 --timeout 60
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
# upgrade to unstable version
sudo do-release-upgrade -d
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

* control cpu frequency
```
sudo apt install cpupower-gui
```

* see cpu infp (frequency steps)
```
cpupower frequency-info
```

* set specific cpu frequency
```
cpupower frequency-set -f 1.7GHz
```

* show all listen ports and pids of appropriate processes
```
sudo netstat -tulnp
```

* kill port 8000
```
kill -9 $(lsof -t -i:8080)
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

* extract audio from video, return first 1h32m
```
ffmpeg -ss 00:00:00 -to 01:32:30  -i video.mkv audio.mp3
```

* Convert .mkv to .mp4
```
ffmpeg -i file.mkv -codec copy file.mp4
```

* Re-encode video (h.265:libx265, av1: libsvtav1), for better compression
```
ffmpeg -i input.mp4 -c:v libx265 -preset slow -crf 28 -c:a copy output.mp4
ffmpeg -i input.mp4 -c:v libsvtav1 -c:a copy output.mp4
```

* resize image base on current size
```
ffmpeg -i image.jpg -vf scale="iw/3:ih/3" outImage.jpg
ffmpeg -i image.jpg -vf scale=1920:1680 outImage.jpg
```

* get media (video, image) information
```
ffprobe

# from file where each line - path to media
cat movies.txt | xargs -d '\n' -n 1 ffprobe
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

* install automatical webapp vulnerabilities scanner
```
sudo snap install zaproxy
```

* install msfconsole https://www.youtube.com/watch?v=YfI2wX7CBmM&list=PLI2KWmw0IyyLzxPY3HFEAq7fjINeMK_c1&index=10
```
sudo snap install metasploit-framework --edge
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
* forward ports with
```
ssh -R 80:localhost:8080 localhost.run
ssh -R 80:localhost:3000 serveo.net
ngrok http 8000
```

* split screen with 2 laptops (dual monitor through network)
```
barrier
```


* create free vpn (tailscale.com)
```
tailscale
```

* crack wifi hash from wifite (aircrack-ng) with wordlist
```
sudo wifite
# stop monitor mode
sudo airmon-ng stop wlp0s20f3mon
```

# crack hash with dictionary (after WAP handshake)
sudo  aircrack-ng -w ../Documents/bigFiles/10-million-password-list-top-1000000.txt handshake_Mirkovic_F4-A4-54-81-34-10_2025-03-19T05-54-00.cap

# crack hash with dictionary (after pmkid) (using GPU ~100x faster than CPU)
hashcat hashFile dictoinary

# crack hash with mask
# -a3 use mask
# -1 define custom mask
# ?d?u?l?a create a custom charset with lowercase (?l), uppercase (?u), and digits (?d), lowercase & uppercase & special characters & numbers (?a)
# ?1?1?1?1?1?1?1?1 eight characters longa

# all eight character numbers
hashcat hs/hash.cap -a3 -1 ?d ?1?1?1?1?1?1?1?1

# full brute force (8 characters)
hashcat hs/hash.cap -a3 ?a?a?a?a?a?a?a?a


* ubunti installation on windows powershell
``` 
wsl --install -d Ubuntu
```

* remote access remmina + xrdp
```
# start xrdp server (restart|stop|enable|disable)
sudo systemctl start xrdp
```

* remote file system
```
# mount remote filesystem
sshfs user@host:/remote_dir /local_dir

# remove mounted filesystem
fusermount -u /local-dir
```


