import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from './astro.220171ad.mjs';
import { T as Tooltip } from './pages/all.ea9e81c7.mjs';
import 'html-escaper';
/* empty css                          */import '@astrojs/rss';
import 'fuse.js';
import 'react';
import 'react/jsx-runtime';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                           */import 'github-slugger';
/* empty css                          *//* empty css                        */import 'satori';
import 'node:fs/promises';
import '@resvg/resvg-js';

const frontmatter = {
  "author": "Michael Elias",
  "pubDatetime": "2023-04-11T00:00:00.000Z",
  "title": "Terminal Shootout",
  "postSlug": "terminal-shootout",
  "featured": false,
  "postThumb": "/img/thumbs/terminals.png",
  "tags": ["vscode", "tools"],
  "description": "I'm a sucker for trying out new terminal emulators. Here I'll go over some of the pros and cons of the most popular terminals out there"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "hyper",
    "text": "Hyper"
  }, {
    "depth": 4,
    "slug": "pros",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "iterm2",
    "text": "iTerm2"
  }, {
    "depth": 4,
    "slug": "pros-1",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-1",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "alacritty",
    "text": "Alacritty"
  }, {
    "depth": 4,
    "slug": "pros-2",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-2",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "kitty",
    "text": "Kitty"
  }, {
    "depth": 4,
    "slug": "pros-3",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-3",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "tabby",
    "text": "Tabby"
  }, {
    "depth": 4,
    "slug": "pros-4",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-4",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "warp",
    "text": "Warp"
  }, {
    "depth": 4,
    "slug": "pros-5",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-5",
    "text": "Cons:"
  }, {
    "depth": 2,
    "slug": "terminal-macos",
    "text": "Terminal (macOS)"
  }, {
    "depth": 4,
    "slug": "pros-6",
    "text": "Pros:"
  }, {
    "depth": 4,
    "slug": "cons-6",
    "text": "Cons:"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    h4: "h4",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I\u2019m a sucker for trying out new terminal emulators. They all pretty much do the same thing and to be honest the out of the box macOs is totes fine but I\u2019m a nerd and collect terminals like pokemon cards. Here I\u2019ll go over some of the pros and cons of the most popular terminals out there."
    }), "\n", createVNode(_components.h2, {
      id: "hyper",
      children: "Hyper"
    }), "\n", createVNode("img", {
      src: "/img/hyper.png",
      alt: "Hyper terminal",
      class: "w-full"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://hyper.is/",
        children: "Hyper"
      }), " is a fresh and flashy terminal built on web technologies like Electron, React, and Redux. It\u2019s highly extensible, allowing you to customize and extend its functionality with plugins."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Very easy to customize"
          }), "\n", createVNode(_components.li, {
            children: "Looks pretty pretty out of the box"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Performance can be sluggish (although it\u2019s gotten better in v3)"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "iterm2",
      children: "iTerm2"
    }), "\n", createVNode("img", {
      src: "/img/iterm.png",
      alt: "iTerm2 terminal",
      class: "w-full"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://iterm2.com/",
        children: "iTerm2"
      }), " is a tried and true macOS terminal emulator, known for its extensive features and customization options. I used iTerm2 for many many years and never had any issues with it."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-1",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Built-in support for tabs, split panes, and more"
          }), "\n", createVNode(_components.li, {
            children: "Mature and well-maintained"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-1",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "macOS only"
          }), "\n", createVNode(_components.li, {
            children: "Probably your dad\u2019s terminal"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "alacritty",
      children: "Alacritty"
    }), "\n", createVNode("img", {
      src: "/img/alacritty.png",
      alt: "Alacritty terminal",
      class: "w-full rounded-md max-w-[96%] mx-auto shadow-lg"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://alacritty.org/",
        children: "Alacritty"
      }), " is a ", createVNode("span", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "lol it really is tho \u{1F680}",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "blazingly-fast"
        })
      }), ", GPU-accelerated terminal emulator that values simplicity and performance above all else. It has somewhat of a cult following, kinda like the arch linux of terminal emulators. Like if you ask \u201CWhich terminal do you use?\u201D on twitter, the alacritty folks pop out of the woodworks."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-2",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Probably the fastest terminal in this list"
          }), "\n", createVNode(_components.li, {
            children: "Cross-platform"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-2",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Limited customization and features compared to other terminals"
          }), "\n", createVNode(_components.li, {
            children: "Emoji and ligature support is not great"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "kitty",
      children: "Kitty"
    }), "\n", createVNode("img", {
      src: "/img/kitty.png",
      alt: "Kitty terminal",
      class: "w-full rounded-md max-w-[96%] mx-auto shadow-lg"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://sw.kovidgoyal.net/kitty/",
        children: "Kitty"
      }), " is another GPU-accelerated terminal emulator that aims to strike a balance between performance and features. This has been my personal favorite terminal for a while now, it\u2019s almost as fast as alacritty and really just looked super nice out of the box without having to fuss with it too much."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-3",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Fast and efficient"
          }), "\n", createVNode(_components.li, {
            children: "Rich in features, such as ligature support and image rendering"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-3",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Tad more complex configuration compared to Alacritty"
          }), "\n", createVNode(_components.li, {
            children: ["Logo is lame ", createVNode(_components.a, {
              href: "https://sw.kovidgoyal.net/kitty/faq/#i-do-not-like-the-kitty-icon",
              children: "but you can change it"
            })]
          }), "\n", createVNode(_components.li, {
            children: "Copying text can be wonky sometimes"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "tabby",
      children: "Tabby"
    }), "\n", createVNode("img", {
      src: "/img/tabby.png",
      alt: "Tabby terminal",
      class: "w-full"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://tabby.sh/",
        children: "Tabby"
      }), " is a modern and extensible terminal emulator that emphasizes user experience and productivity. It offers some cool features like \u201CSmart tabs\u201D that can detect progress and notify when a process is done. It also has a built in quake mode which is rad."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-4",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Beautiful and user-friendly interface"
          }), "\n", createVNode(_components.li, {
            children: "Extensible with plugins"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-4",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Performance might not be as fast as GPU-accelerated terminals"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "warp",
      children: "Warp"
    }), "\n", createVNode("img", {
      src: "/img/warp.png",
      alt: "Warp terminal",
      class: "w-full"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.warp.dev/",
        children: "Warp"
      }), " is a cloud-powered terminal emulator that enables real-time collaboration and seamless integration with cloud services. They state \u201CWriting code in your terminal shouldn\u2019t feel like 1978\u201D but part of my favorite thing about terminals are the 1978 vibes. I can\u2019t be alone in this right? Anyways, it\u2019s cool and there are a shitton of features but it\u2019s not for me."]
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-5",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Fully native, built with Rust"
          }), "\n", createVNode(_components.li, {
            children: "Real-time collaboration features"
          }), "\n", createVNode(_components.li, {
            children: "Tons of features"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-5",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Reliance on the cloud can raise security and privacy concerns"
          }), "\n", createVNode(_components.li, {
            children: "Almost too many features"
          }), "\n", createVNode(_components.li, {
            children: "Not open source"
          }), "\n", createVNode(_components.li, {
            children: "macOs only"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "terminal-macos",
      children: "Terminal (macOS)"
    }), "\n", createVNode("img", {
      src: "/img/terminal.png",
      alt: "macOS terminal",
      class: "w-full"
    }), "\n", createVNode(_components.p, {
      children: "The macOS default Terminal is a reliable and straightforward terminal emulator that gets the job done. I hadn\u2019t opened this up in forever, aw I kinda miss it. I still have a tmux session running, which I really only used for split screens so stopped using it since kitty has built in split screen functionality."
    }), "\n", createVNode("div", {
      class: "pros-cons flex gap-10",
      children: [createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "pros-6",
          children: "Pros:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Pre-installed on macOS"
          }), "\n", createVNode(_components.li, {
            children: "Simple and reliable"
          }), "\n"]
        })]
      }), createVNode("div", {
        children: [createVNode(_components.h4, {
          id: "cons-6",
          children: "Cons:"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Limited features and customization options compared to other terminals"
          }), "\n"]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Dangggg did you know there were so many terminal emulators out there? I think I\u2019ll be sticking with Kitty, the ", createVNode(_components.a, {
        href: "https://sw.kovidgoyal.net/kitty/layouts/#the-tall-layout",
        children: "layouts"
      }), " are great, it\u2019s fast, and it\u2019s pretty. Which one is your favorite? Let me know on ", createVNode(_components.a, {
        href: "https://twitter.com/mikowl",
        children: "twitter"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/terminal-shootout.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/terminal-shootout.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/terminal-shootout.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
