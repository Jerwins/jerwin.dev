---
title: "Enable emoji support in Chrome - Ubuntu minimal"
date: '2019-11-10'
spoiler: "emoji dependency files for chrome in Ubuntu minimal OS."
---

If you are seeing all boxes instead of emojis in this website, you just need to install a dependency in ubuntu if you have chosen minimal install initially. 

I'm pretty sure all the dependencies are installed for the default browser - Firefox so it should work fine on it. 

But for Chrome, do the below if you are seeing empty boxes.

```bash
$ sudo apt remove fonts-noto-color-emoji
$ sudo apt install fonts-noto-color-emoji
```
`Version used:` Ubuntu 19.10

