---
slug: "/blog/automate-notion-backups"
date: "2021-09-14"
title: "How To Automate Notion Backups"
imageLocation: "../../posts/blogs/images/w-02.png"
intro: "Here I explain the workings of a script I use to backup my notion"
type: "blog"
tags: ["notion", "notes", "scripting", "automation", "python", "CI/CD"]
pending: false
---

# Automate Your Notion Backups

## The Crux of the issue

Notion is an amazing note taking app. It's nowhere near perfect but it gets the
job done. It has a good way of managing data with databases with a great
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

This script was **heavily** inspired by
[this](https://artur-en.medium.com/?p=f6af4edc298d) blog post, written by Artur
Burtsev, so do go check it out.

The actual script is pretty simple. We'll be exploit-I mean *utilizing* the
export functionality of Notion. The script will download the notion export,
extract it and commit it to a git repo and then push it to a *git repo hoster*
of your choice (GitLab, GitHub, etc...). Pretty neat don't you think? [CLICK ME TO GET IT](https://gist.github.com/muffledMitosis/a5846138fb7e3d56afe15d618a4f48a3)

I won't be explaining how it works since the script itself is relatively easy
to understand reading the code. Running it gives you a zip file containing your notion
workspace in Markdown.

## The Automation

Now having the ability to download an export of your Notion Workspace at will
is nice and all, but we still have the issue of managing all this data. The
solution? **GIT!!!**

The following lines of bash will extract the downloaded zip to a git repo and
commit it with changes. This is the easiest way to have a history of our Notion
Workspace,

```bash
# Create a folder and extract our downloaded file into it.
mkdir -p backup
rm -rf backup/* && unzip -q "$EXPORT_FILENAME" -d backup/

# Get some info from git repo, for the stat message
stats="\$(git diff --shortstat | xargs)"
if [ -z "\${stats}" ]; then stats=none; fi

printf "Updated: %s\n\nUpdates: %s" "\$(date)" "\$stats" > README.md

# Commit and push new changes
git add backup README.md && git commit -m "Updates: \$stats"
git push origin HEAD:main
```

### Further Automation

We essentially have 2 scripts now, one to download the export from notion and
another to handle the versioning with git. This is all well and good except
we'd have to have a machine up and running 24/7 (or in any other manner) to
handle script execution. 

I have both scripts run as a [CI/CD](https://docs.gitlab.com/ee/ci/) pipeline
on GitLab, having a 'time trigger' on it, so that it runs everyday at a certain
time.
