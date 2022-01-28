# Meth's Personal Website

Here lies the code for my [personal website](https://meth.lk).

## Directory Structure

```
├── posts             <-- Markdown files for all posts
│   ├── blogs        
│   └── projects
└── src               <-- site source files
    ├── assets
    ├── components
    ├── pages
    └── styles
```

## A Sorta Explanation

All posts are written in Markdown. [GatbsyJS](https://www.gatsbyjs.com/) is used
to convert them into static HTML with a custom style sheet I wrote (A big mess,
needs major refactoring). All assets (pngs/SVGs, excluding font files) are
optimized through
[gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image). It
handles the creation of images with multiple sizes for faster page loads.

## I wanna have a local instance

You sure can.
```
git clone https://github.com/muffledMitosis/meth-dot-dev.git
cd meth-dot-dev
npm install
npm install -g gatsby-cli   # If you don't already have it
gatsby develop
```