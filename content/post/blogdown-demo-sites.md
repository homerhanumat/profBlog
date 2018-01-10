+++
date = "2017-06-05T20:00:00"
draft = false
tags = ["blogdown", "hugo", "meta-blogging"]
aggregators = [""]
title = "Demo Sites for Blogdown-ified Hugo Themes"
math = false
excerpt = """
I tweaked a couple of simple Hugo themes for use by R-bloggers along with the blogdown package.  If you prefer minimal themes you might wish to start with one of these.
"""
ghcommentid = 4
+++

[**blogdown**](https://github.com/rstudio/blogdown), Yihui Xie's new Hugo-based R-package for blogging, has begun to take off.

You can create a new site using any Hugo theme, but sometimes you must customize the theme a bit in order to enable certain expected features---such as MathJax---that are expected by bloggers who deal in statistics.  If you are new to static-site generators then you might prefer to have someone else handle the tweaks for you so you can get to blogging right away.  The study of the Hugo [documentation](https://gohugo.io/overview/introduction/) can be deferred for a bit.

Yihui's tweak of the Lithium theme works great out of the box:

```r
blogdown::new_site(theme = "yihui/hugo-lithium-theme")
```

You could also try my tweak of the sparse-but-wild [Sublime](https://github.com/dt801ts/sublime-hugo-theme) theme:

```r
blogdown::new_site(theme = "homerhanumat/sublimer-hugo")
```

The demo site for my Sublime tweak is [here](https://homerhanumat.rbind.io/)
.

I have also tweaked the beautiful and minimal theme [Slim](https://github.com/zhe/hugo-theme-slim):

```r
blogdown::new_site(theme = "homerhanumat/hugo-theme-slim")
```

The demo site is [here](https://slimdemo.netlify.com/).

Happy blogging!
