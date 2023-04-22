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
  "pubDatetime": "2023-04-10T00:00:00.000Z",
  "title": "10 VSCode extensions that will change your life",
  "postSlug": "10-vscode-extensions-that-will-change-your-life",
  "featured": false,
  "postThumb": "/img/thumbs/extensions.jpg",
  "tags": ["vscode", "tools"],
  "description": "A list of 10 VSCode plug-ins I can't live without and that you may never heard of"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "console-ninja",
    "text": "Console Ninja"
  }, {
    "depth": 2,
    "slug": "css-var-complete",
    "text": "CSS Var Complete"
  }, {
    "depth": 2,
    "slug": "scratchpads",
    "text": "Scratchpads"
  }, {
    "depth": 2,
    "slug": "error-lens",
    "text": "Error Lens"
  }, {
    "depth": 2,
    "slug": "vim",
    "text": "Vim"
  }, {
    "depth": 2,
    "slug": "tailwind-css-intellisense",
    "text": "Tailwind CSS IntelliSense"
  }, {
    "depth": 2,
    "slug": "headwind",
    "text": "Headwind"
  }, {
    "depth": 2,
    "slug": "github-copilot",
    "text": "Github Copilot"
  }, {
    "depth": 2,
    "slug": "better-comments",
    "text": "Better Comments"
  }, {
    "depth": 2,
    "slug": "svg",
    "text": "SVG"
  }, {
    "depth": 2,
    "slug": "moonlight-theme",
    "text": "Moonlight Theme"
  }, {
    "depth": 2,
    "slug": "share",
    "text": "Share \u{1F44D}"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    strong: "strong",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I think this is my first click baity title, really a more accurate title would be like \u201C10 VSCode extensions I can\u2019t live without\u201D hmm even that\u2019s a bit much, maybe like \u201C10 VSCode extensions that I really dig and you may never have heard of\u201D. Yeah, that works. On to le list!"
    }), "\n", createVNode(_components.h2, {
      id: "console-ninja",
      children: "Console Ninja"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja",
        children: "Console Ninja"
      }), " displays console.log output and runtime errors directly in your editor from your running browser or node application. It\u2019s nice to see your console output right in your editor without having to switch to the browser."]
    }), "\n", createVNode("div", {
      class: "rounded-md embed-container",
      children: createVNode("iframe", {
        width: "392",
        height: "696",
        src: "https://www.youtube.com/embed/Z0Odn0pCf9w",
        title: "Console Ninja is a Must Have VS Code Extension",
        class: "rounded-md",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", createVNode(_components.p, {
      children: ["You should follow ", createVNode(_components.a, {
        href: "https://www.youtube.com/@jherr/",
        children: "Jack Herrington"
      }), " on YouTube btw."]
    }), "\n", createVNode(_components.h2, {
      id: "css-var-complete",
      children: "CSS Var Complete"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar",
        children: "CSS Var Complete"
      }), " provides autocompletion intellisense for globally shared ", createVNode("i", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "*Cascading your Shitty Styles",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "CSS"
        })
      }), " variables and more. It\u2019s super handy, you just type \u2014 and you will get a dropdown with all of your CSS variables."]
    }), "\n", createVNode("img", {
      src: "/img/cssvarcomplete.jpg",
      alt: "CSS Var Complete screenshot",
      class: "border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "scratchpads",
      children: "Scratchpads"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=buenon.scratchpads",
        children: "Scratchpads"
      }), " is a great way to store and keep notes of code snippets, it\u2019s a super simple idea but I find myself using it all the time. Anytime I stumble across a cool ", createVNode(_components.a, {
        href: "/tags/css",
        children: "CSS"
      }), " or ", createVNode(_components.a, {
        href: "/tags/javascript",
        children: "JS"
      }), " snippet I pop open the scratchpad so I can reference it later."]
    }), "\n", createVNode("img", {
      src: "/img/scratchpad_new.gif",
      alt: "Scratchpads screenshot",
      class: "border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "error-lens",
      children: "Error Lens"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
        children: "Error Lens"
      }), " will highlight errors in your code and gives you immediate visual feedback of how mediocre of a programmer you are, all without leaving your editor! It\u2019s a great way to catch errors before you run your code. It\u2019s extremely flexible so you can make it as obtrusive or unobtrusive as you want."]
    }), "\n", createVNode("img", {
      src: "/img/errorlens.png",
      alt: "Error Lens screenshot",
      class: "border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "vim",
      children: "Vim"
    }), "\n", createVNode(_components.p, {
      children: ["I have to mention the ", createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=vscodevim.vim",
        children: "Vim"
      }), " extension for VSCode, if I could only choose one extension it\u2019d have to be this. Folks get all nerdy about ", createVNode(_components.a, {
        href: "https://neovim.io/",
        children: "Neovim"
      }), " and stuff but I find this extension to be pretty damn good. I have way too many years of vim muscle memory to give it up."]
    }), "\n", createVNode("figure", {
      children: [createVNode("img", {
        src: "/img/quitvim.jpg",
        alt: "I know how to quit vim because i'm a goddamn vim pro but i mean i can't quit vim in like i can't not use at least vim keybindings in my code editor",
        class: "border rounded-md border-skin-line"
      }), createVNode("figcaption", {
        class: "text-xs mt-2",
        children: ["I know you\u2019re thinking this meme is meant to be another haha no one knows how to exit vim meme, but I know how to exit vim because i\u2019m a goddamned seasoned vim vet but this meme is supposed to mean i can\u2019t quit vim in like i can\u2019t ", createVNode(_components.strong, {
          children: "not"
        }), " use at least vim keybindings in my code editor, much like how jack wishes he could quit ennis because sometimes he feels like maybe life would be easier if he didn\u2019t love him so much, that\u2019s how i feel about vim, but one cannot choose who they love, it just happens, luv u vim \u2764\uFE0F"]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "tailwind-css-intellisense",
      children: "Tailwind CSS IntelliSense"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
        children: "Tailwind CSS IntelliSense"
      }), " provides class name completion for Tailwind CSS classes in your markup. This was an absolute lifesaver when I first started learning Tailwind. If you\u2019re new to Tailwind you can  pretty much guesstimate the class name and then hit ctrl + space to see all of the options. I wasn\u2019t going to put obvious intellisense stuff in this list but then this thing happened where I did."]
    }), "\n", createVNode("img", {
      src: "/img/tailwindintelli.png",
      alt: "Tailwind CSS Intellisense",
      class: "border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "headwind",
      children: "Headwind"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=heybourn.headwind",
        children: "Headwind"
      }), " is a Tailwind CSS class sorter. It will sort your classes in the order that Tailwind recommends. It\u2019s quite nice having your Tailwind classes automatically sorted on save, especially when your code starts looking like this:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code",
      style: {
        backgroundColor: "#1b1e28",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "className"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "w-full border rounded-md border-skin-lineh-16 text-white bg-black py-1 "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "  px-2 m-1 text-sm md:w-32 inline-block font-medium text-skin-accent "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "  focus-visible:no-underline focus-visible:underline-offset-0 max-w-xs "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "  text-justify accent-amber-600 hover:accent-gray-400 sm:max-w-none "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "  md:max-w-none lg:max-w-none md:h-32 md:rounded-md md:text-base lg:w-48 "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "  lg:h-48 lg:rounded-lg lg:text-lg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    lol i'm exaggerating but you know how it gets"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This shit can get pretty chaotic but at least your classes will be in a consistent order."
    }), "\n", createVNode(_components.h2, {
      id: "github-copilot",
      children: "Github Copilot"
    }), "\n", createVNode(_components.p, {
      children: ["What can I say, ", createVNode(_components.a, {
        href: "https://copilot.github.com/",
        children: "Github Copilot"
      }), " is getting real good. I\u2019ve been using it for about 6 months now and it\u2019s hard to imagine coding without it. Don\u2019t let it write code for you or replace your brain, instead let it do the busy work so you can focus on the important stuff. Don\u2019t forget you are the pilot, learn how to utilize and stear it and it can be an incredibly powerful tool."]
    }), "\n", createVNode("img", {
      src: "/img/githubcopilot.jpg",
      alt: "I wish I knew how to quit you",
      class: "w-full border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "better-comments",
      children: "Better Comments"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
        children: "Better Comments"
      }), " allows you to sort of categorize your comments and colorize them."]
    }), "\n", createVNode("img", {
      src: "/img/bettercomments.png",
      alt: "Better Comments",
      class: "w-full border rounded-md border-skin-line"
    }), "\n", createVNode(_components.p, {
      children: "You can also make your own custom comments and can control the color, background color, font weight, font style, etc. Here\u2019s an example of how you can create a custom comment:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code",
      style: {
        backgroundColor: "#1b1e28",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// in your VSCode settings.json:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "better-comments.tags"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "tag"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "#"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "#FFBE76"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "strikethrough"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "underline"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "backgroundColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "transparent"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "bold"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "svg",
      children: "SVG"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=jock.svg",
        children: "SVG"
      }), " extension is a must if you work with svg\u2019s a lot, you can preview, optimize, edit, and more. Just look at how easy it is to make your lil svg heart from a bold assertive red to an I don\u2019t even know anymore transparent red:"]
    }), "\n", createVNode("img", {
      src: "/img/svg.gif",
      alt: "SVG",
      class: "w-full border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "moonlight-theme",
      children: "Moonlight Theme"
    }), "\n", createVNode(_components.p, {
      children: ["I\u2019m not counting this as an extension but wanted to share my personal favorite theme. ", createVNode(_components.a, {
        href: "_https://marketplace.visualstudio.com/items?itemName=atomiks.moonlight",
        children: "Moonlight"
      }), " (legacy version) is the best theme, I\u2019ve tried a ", createVNode("i", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "*A shit-ton is equivalent to 24 metric assloads.",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "shit-ton"
        })
      }), " of themes but always come back to this one. Also as you can probably tell the color schemes for this site were heavily inspired by this theme."]
    }), "\n", createVNode("img", {
      src: "/img/moonlight.jpg",
      alt: "Moonlight theme",
      class: "border rounded-md border-skin-line"
    }), "\n", createVNode(_components.h2, {
      id: "share",
      children: "Share \u{1F44D}"
    }), "\n", createVNode(_components.p, {
      children: ["I tried to stick to the less obvious extensions, things like prettier, eslint, intellisense, etc are a given. What are you favorites? Let me know on ", createVNode(_components.a, {
        href: "https://twitter.com/mikowl",
        children: "twitter"
      }), "!"]
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
const url = "src/content/blog/vscode-plugins-2023.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/vscode-plugins-2023.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/vscode-plugins-2023.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
