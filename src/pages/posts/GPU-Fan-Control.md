---
title: "Control your GPU fan speed in Ubuntu 19.10"
date: '2019-12-31'
spoiler: "Enable fan control for your graphics card in linux."
---

If you are like me wondering how to control your graphics card's fan speed, the below might help you.

I own a EVGA 1080 Ti SC Black. Using EVGA Precision tool has always been a breeze for me. Switching to linux I found that there were no supporting software by EVGA. Their forums posts all revolved around how "the audience is low on linux" and "people could just rely on the BIOS automatic fan control". Cycling through countless posts and seeing these kinda irked me.

Do the following to enable fan control.

<ul>
<li> First enter the Nvidia System Management Interface command in your terminal - `nvidia-smi`. It should provide you with the monitored details of your card like fan speed, GPU temp etc. like the below,</li>
<br>
<img src = "https://i.imgur.com/z8jwAB9.png"></img>
<li> Enter the below two commands. </li>

```bash
sudo nvidia-xconfig 
sudo nvidia-xconfig --cool-bits=4
```

<li> Now restart your system and open "Nvidia X Server Settings".</li>
<br>

<img src = "https://i.imgur.com/MmD0VKD.png"></img>
<br/>
Now you can see an option to check `Enable GPU Fan Settings` where you can set your desired fan speed. 

To confirm the fan speed is applied you can type, `nvidia-smi` again.
