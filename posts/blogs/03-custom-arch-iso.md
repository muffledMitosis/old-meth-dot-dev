---
slug: "/blog/custom-arch-iso"
date: "2021-11-04"
title: "Building a custom arch iso - CrystalOS"
imageLocation: "../../posts/blogs/images/intro.webp"
intro: "Here I talk about how I went about building my very own arch based distro"
type: "blog"
tags: ["arch", "linux", "operating system", "ricing"]
---

<!-- - what arch linux is -->
<!-- - pain of configuration -->
<!-- - custom iso >> config file hell -->
<!-- - behold a fully packaged solution -->

# Building a custom arch iso

You could call Arch Linux a minimal Linux distro. The base ISO gives you enough
packages to have a minimal system up and running and pretty much nothing else.
Now I don't know about you but I love putting myself through severe amounts
of self inflicted pain, hence spending nearly 3 months, occasionally 5 hours a day
ricing my Arch installation was only natural.

Getting everything just right certainly took loads of time. This is probably
because customizations not only included editing configuration files, but
finding programs that work well together too.  Calendars, calculators,
schedulers, file managers, editors, applets etc. Coherency is important. Why not
use a desktop environment *(GNOME/KDE/MATE)* and let it handle everything for
you? Well, like I said, I loooove pain :\`)

Aight, more questions... **Why build a custom arch iso** instead of managing
everything with configuration files? Packaging everything into a single
installable iso is **_waay_** more convenient than fiddling with installation
scripts and versioning config files, you just mount the iso and install it. It's
that simple. You have the added bonus of making it a fully offline installer,
which is also nice. I have the ISO autobuild from source using a CI/CD pipeline
on GitHub.

The rest of this blog post will talk about everything thats required to build a
custom arch ISO from scratch. I basically go through the stuff I did to build my
ISO, similar steps can be take to build your own.

## Things you need to know

<!-- directory structure -->
<!-- tools used -->
<!-- custom repository setup -->
