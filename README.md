# devopsengineers.github.io
This repository holds the website data and theme-files for devopsengineers.github.io and devopsengineers.com, for the Hugo static site generator.  

## Local development
Make sure you have a local copy of [Hugo](https://gohugo.io) installed, then:

* Clone this repository
* From the repo-root:
```shell
$ hugo server -w --disableFastRender
```
* Point a web-browser to http://localhost:1313 

With this setup, your local changes will be detected by the Hugo daemon, triggering a recompile and refresh in your browser.  In this way, local development can progress quickly.  

PR your changes in a feature-branch.  On merge to main, a Github Actions pipeline will handle the asset compilation and deployment to the Github Pages site.  

## Common Tasks
### I just want to write a quick article!
You'll want to write a 'post'.  This will require creating a suitably-named directory in `content/posts/<my_article_name>`, populating it with a "Hero" image, and an `index.md` file.  For the sake of example, let's call your article "The Benefits of Foo":

* Create the new directory `content/posts/benefits_of_foo`
* Get an image that will act as both thumbnail and background.  Copy it to `contents/posts/benefits_of_foo/featured.png` (or JPEG, or WEBP, or GIF, etc).  1000x1000 should work nicely
* Create a file, `contents/posts/benefits_of_foo/index.md` with the following format:
```markdown
---
title: "The Benefits of Foo"
date: 2021-11-21
draft: false
description: "A reasonable description goes here"
tags: ["methodology", "relevant tags", "I dunno, you choose"]
authors:
  - yourname
showAuthorsBadges : true 
---
This is just bare Markdown now.  Anything from this line on down is rendered to HTML by Hugo and displayed with the appropriate theme
```
* From the repo-root, run `hugo server -w --disableFastRender`, and point a web browser to `http://localhost:1313`
* Verify all looks well in the browser, no errors/warnings from the Hugo daemon, etc.  If not, fix/tweak/troubleshoot until it's right
* Push to a feature-branch, then PR against `main`.  

### I want a nifty 'Author' profile that shows up with my headshot and bio and such
You'll be creating a JSON file, adding a headshot image, and creating your author-profile entry.

Lets presume your name is Camille Jonesbeth.  You'll be doing the following:
* Add your headshot (a 1:1 ratio image) to `assets/img/cjonesbeth_avatar.png`, and reference it in your JSON file
* Create a JSON file in `data/authors/cjonesbeth.json`, cribbing the fields, etc, from previously-existing entries in that directory.
* Create a directory, `content/authors/cjonesbeth/`, and add an `_index.md` (the underscore is important in this context Because Hugo™) with the following:
```markdown
---
title: "Camille Jonesbeth"
---

Camille's awesome bio goes here, in full Markdown format
```

Finally, test locally via `hugo server` as above, push to your feature branch, and PR against main.  You can now refence your author entry via the JSON filename without the `.json` extension in a post's "front-matter":

```markdown
---
title: "The Benefits of Baz"
date: 2021-11-21
draft: false
description: "A reasonable description of goes here"
tags: ["methodology", "relevant tags", "I dunno, you choose"]
authors:
  - cjonesbeth
showAuthorsBadges : true 
---
This is just bare Markdown now.  Anything from this line on down is rendered to HTML by Hugo and displayed with the appropriate theme
```

### I want to create a new sub-page for the site, not a 'post', and reference it in either the header or footer of the site
Let's say you want to add a 'Donate' sub-page to the site.  For this we'll need to:

* Create a directory, `content/donate/`, and add an `index.md` (no underscore this time, Because Reasons™) with the following:
```markdown
---
title: "Donating To The Devops Engineers Community"
date: 2023-11-21
description: "Money"
summary: "If money is the root of all evil, absolve yourselves into our Paypal account"
tags: ["cash", "donate", "funding", "gimme"]
---
We're back to bare Markdown now.  If you wanted to send us money, our paypal account is X.  If you'd prefer bitcoin, the wallet-address is Y.  Yada yada yada
```

This makes a standalone page available at `\<siteroot\>/donate`, but we still need to add it to the footer.

* Edit `config/_default/menus.en.toml`, and add something like this to the bottom:
```toml
[[footer]]
  name = "Donate"
  pageRef = "donate"
  weight = 40
```

Test locally via `hugo server` as above, push to your feature branch, and PR against main.  You should now be able to see your sub-page linked from the footer.  
