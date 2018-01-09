---
title: Hosting on your Github User Page via Submodule
author: "Homer White"
date: '2017-05-28'
slug: hosting-on-your-github-user-page-via-submodule
categories: []
ghcommentid: 3
tags:
  - "github"
  - "hugo"
  - "submodules"
  - "meta-blogging"
---

My primary technical blog is hosted by Github through my User repository (`homerhanumat.github.io`).  Recently I switched my generator from Jekyll to Hugo.

From the User repository Github Pages requires that the site be served from the root of the repository (not from `docs`).  Jekyll allowed us to build the site into the root, but Hugo builds into a specific directory, named `public` by default.  Building into the root would look a bit messy, anyway.

I decided to handle the problem by creating a separate repository for my source code, then making the `public` directory into a submodule of the source repo, with a remote pointed to my User repo.  The idea is taken from [Stackoverflow](https://stackoverflow.com/questions/12514197/convert-a-git-folder-to-a-submodule-retrospectively).

First make sure you have initialized your project as a git repository.  Go ahead and set the remote to a repo on Github---or wherever you like, really.

Build your site with Hugo.  You now have a `public` directory.  Then do the following in the terminal (replacing "username" with your own Github username):

```sh
cd public
git init
git remote add origin https://github.com/username/username.github.io.git
git add .
touch .nojekyll  # so Github will not attempt to serve the site with Jekyll
git commit -am 'first commit in submodule'
git push
cd ..
rm -rf public
git commit -am 'deleting folder'
git submodule add https://github.com/username/username.github.io.git public
git commit -am 'adding submodule'
```

Now when you commit and push from the root of your project, the changes go to the remote for your source.  When you want to push changes up to the website itself, `cd` into `public`, commit changes and push to the `username.gihub.io` remote.

When Hugo serves your site it modifies files in `public` but leaves alone files that no longer correspond to anything in your source.  Sometimes you need to remove these files, so it's recommended to make a clean start:

```sh
rm -rf public
```

But you should NOT do this!  You'll lose `.git` and your submodule along with it.

When you need to remove junk files, it's easiest to remove all files except `.nojekyll` and the `git` directory.  This can be accomplished from the terminal as follows:

```sh
shopt -s extglob
cd public
rm -rf !(.nojekyll|.git)
cd ..   # back to the root of the project
```

Now you can serve the site and `public` will be replenished.

My remote source repo is at:

>[https://github.com/homerhanumat/hugoBlog.git](https://github.com/homerhanumat/hugoBlog.git)

You can see that the `public` directory appears as a submodule.  Click on it and you'll come to the User repo:

>[https://github.com/homerhanumat/homerhanumat.github.io.git](https://github.com/homerhanumat/homerhanumat.github.io.git)

The blog itself is hosted from this latter repo.