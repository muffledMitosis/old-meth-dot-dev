---
slug: "/blog/meth-builds-a-drone"
date: "2021-12-25"
title: "Building a quadcopter from scratch"
imageLocation: "../../posts/blogs/images/intro.webp"
intro: "DRONE YES"
type: "blog"
tags: ["drone", "UAV", "quadcopter", "flight computer", "arduino"]
pending: false
---

# Overview

I've wanted to build a drone for such a long time now, specifically a
quadcopter. It involves control theory and localization at just the right
amounts, a perfect project that touches multiple interesting areas of
engineering. This blog post documents my development journey as well as the
overall architecture of the drone, plus detailed explanations of how each part
of the system works.

Why am I building this? Just for fun!!! I get to play around with some
interesting systems and see how they come together. Its awesome!

## 1.Breakdown of the drone

The drone mainly consists of two systems that work together to accomplish very
specific tasks. A **Flight Controller** and a **Flight Computer**.

### 1.1 Flight Controller

A microcontroller that has low level control of the whole drone. This runs the
stabilization algorithms as well as navigation algorithms, and localizes the
drone. The flight controller accepts high level commands from the flight
computer and translates them into control signals that the ESCs understand.

The reason this is built as a separate system is that this needs to run quite
fast. The one I've built runs at around 200 times a second (The main control
loop). Its basically a really big closed loop control system that has a few
variables you can use to manuever the drone.

### 1.2 Flight Computer

This can be thought of as the brains of the drone, while the flight controller
is the lower level subconscious? (idk lol). I've used a RaspberryPI for this.
Now the flight computer does some pretty cool stuff. It has cameras, and radios
such as GPS/WIFI/Bluetooth etc, it runs image recognition algorithms and acts as
a very hight level control end point for a separate control computer (My PC).