---
slug: "/blog/automate-notion-backups"
date: "2021-09-14"
title: "How To Automate Notion Backups"
imageLocation: "../../posts/blogs/images/intro.webp"
intro: "Here I explain the workings of a script I use to backup my notion"
type: "blog"
tags: ["notion", "notes", "scripting", "automation", "python", "CI/CD"]
---

# Automate Your Notion Backups

## The Crux of the issue

Notion is an amazing note taking app. It's nowhere near perfect but it gets the
job done. It has a good way of managing data with databases which is a great
balance between something like Microsoft Excel and traditional note taking apps
such as OneNote or Evernote.

The issue is, your Notion workspaces aren't really accessible to you, as in,
they pretty much live on Notion servers who knows where (ADD NOTION SERVER
LOCATION LOL) and that is a big no no for me. I like all my data close to me
and stored in multiple locations for redundancy.

Now of course, Notion gives you the ability to export your whole Workspace into
PDFs or Markdown with one press of a button, but imagine clicking that button
everyday, sorting all those exports manually, uploa-**STOP IT YOU NEANDERTHAL**
we're programmers and we can do better.

## Behold the script

The actual script is pretty simple. We'll be exploit-I mean *utilizing* the
export functionality of Notion. The script will download the notion export,
extract it and commit it to a git repo and then push it to a *git repo hoster* of
your choice (GitLab, GitHub, etc...). Pretty neat don't you think?

The script was **heavily** inspired by
[this](https://artur-en.medium.com/?p=f6af4edc298d) blog post, written by Artur
Burtsev, so do go check it out.