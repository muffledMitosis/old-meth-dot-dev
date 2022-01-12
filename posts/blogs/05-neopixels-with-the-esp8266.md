---
slug: "/blog/neopixels-with-the-esp8266"
date: "2022-01-05"
title: "Neopixels with the ESP8266"
imageLocation: "../../posts/blogs/images/intro.webp"
intro: "Using the ESP's DMA controller in conjunction with the I2S peripheral to control NeoPixels NOT!"
type: "blog"
tags: ["ESP8266", "ws2812", "DMA", "I2S", "micropython", "python"]
pending: false
---

# An unfortunate predicament

Well, this blog was gonna be about me screwing around with the I2S peripheral on
the ESP8266 and getting it to drive some cool neopixels. Finding info about this
whole system proved to be quite challenging. Espressif's documentation wasn't
the best either. All I found was a crudely written MP3 decoder example on their
GitHub.

I then ditched this whole endeavor in favour of some prewritten code (I know I
know, it ain't that exciting, but I need my blinky lights okay) specifically,
the neopixel driver that comes with micropython. I've never really used
micropython for anything else so figured this might be a good time to do so.

# On We Go

## Getting Micropython up and running

This was fairly simple really. The instructions on the micropython website were
pretty straight forward, so I won't go into much detail here.  I downloaded
the .bin file, The 2+ MB version for the nodemcu I was using which has an
ESP12-E module. Then flashed it using *esptool* with the following command

```bash
esptool.py --port COM3 --baud 460800 write_flash --flash_size=detect 0 .\esp8266-v1.17.bin
```