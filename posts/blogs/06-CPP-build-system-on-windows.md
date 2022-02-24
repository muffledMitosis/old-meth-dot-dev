---
slug: "/blog/cpp-build-system-windows"
date: "2022-02-16"
title: "All about building C++ projects on windows"
imageLocation: "../../posts/blogs/images/05/rainbow.png"
intro: "This post goes through some of the options for managing C++ projects on windows and how I have my setup"
type: "blog"
tags: ["C++", "win32", "MSVC", "GCC", "make", "CMake", "development", "windows", "studio"]
pending: false
---

# Getting Some Microsoft branding out of the way

The terminology when it comes to visual studio can be a bit confusing. Microsoft
Visual C++, MSBUILD, Visual Studio, what does all of this mean?

**MSVC** (Microsoft Visual C++) is a compiler and tool collection for the C and
C++ programming languages, developed by microsoft. It includes the *cl.exe*
compiler and the link.exe* linker. This is the defacto standard when it comes
to compiling C/C++ source files on windows. **Visual Studio** is a front end
for said compiler (And some other tools that come with it). Visual studio uses
**MSBUILD** to build its *.vcxproj* files. You can use **MSBUILD** in a CLI to
build Visual Studio projects without loading the IDE.

### Lets try compiling a cpp file

cl.exe is the compiler that we'll be using. Typing cl.exe in a cmd window gives
us an error.

<!-- INSERT IMAGE OF ERROR -->

We'll need to type in the full path to the compiler since it was not sourced by
the PATH variable. 

<!-- INSERT IMAGE OF CL PATH -->

Alrighty, now that that worked, let's try giving it a cpp file.

<!-- INSERT IMAGE OF LINKER ERROR -->



Now do you *need* to have all of Visual Studio installed to build C++ projects?
Can't you just have MSVC on your system and get that to compile source files?
You absolutely can! This blog showcases some of the options available.

## Exploring NMAKE

## Ninja To the Rescue

## The MSBUILD Way