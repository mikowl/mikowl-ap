---
author: Michael Elias
pubDatetime: 2023-04-01
title: Hello
postSlug: hello
featured: false
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
tags:
  - release
description: I was all like whattt and they were all like nooooo way and I was like yessss and they were all like bruhhhhhh and I was like...
---

<img src="/astro.svg" alt="Astro" class="float-right m-4 w-44" />

I had an old blog written in [Jekyll](https://jekyllrb.com/) that I started in 2013 but it hadn't been updated in an embarassingly long time so I decided to start clean. So here we are, a new website built with [Astro](https://astro.build/). Unless you've been living under a rock (or if you're not a web dev) you've probably heard of it. Astro offers a number of advantages over other static site generators like Jekyll.

One of the coolest things it brings to the table is it's "Component Islands" architecture, so like think of the various components your app might have: header, navigation, sidebar, footer, etc. Some of these components could be mostly static like your footer but you may also have something like an image carousel component that's interactive. In astro you can mix and match your UI framework, hypothetically you could have a header written in [Svelte](https://svelte.dev/), a sidebar written in [Vue](https://vuejs.org/), and an image carousel written in [React](https://react.dev/). Although I'm not quite sure why anyone in their sane mind would do that. Anyways, the biggest benefit of astro islands is performance, most of your website is converted to fast static html and the javascript is only loaded for the individual components that actually need it.

Sooo yeah, I recommend giving Astro a try if you're a web developer looking for a fast, flexible, <i>hella</i> performant web framework.
