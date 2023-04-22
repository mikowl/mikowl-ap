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
  "pubDatetime": "2023-04-07T00:00:00.000Z",
  "title": "These are a few of my favorite CSS things",
  "postSlug": "my-favorite-newish-css-things",
  "postThumb": "/img/thumbs/newcssthings.jpg",
  "featured": false,
  "tags": ["css", "tips", "design"],
  "description": "I've been collecting new CSS things I stumble across that are helpful, made my life easier, or are just neat."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "css-clamp",
    "text": "CSS clamp()"
  }, {
    "depth": 2,
    "slug": "the-perfect-inner-border-radius",
    "text": "The perfect inner border radius"
  }, {
    "depth": 2,
    "slug": "aspect-ratio-object-fit-and-mix-blend-mode",
    "text": "Aspect ratio, object-fit, and mix-blend-mode"
  }, {
    "depth": 2,
    "slug": "truncate-a-paragraph-at-x-amount-of-lines",
    "text": "Truncate a paragraph at x amount of lines"
  }, {
    "depth": 2,
    "slug": "dvhsvhlvh-units",
    "text": "dvh/svh/lvh units"
  }, {
    "depth": 2,
    "slug": "custom-list-styles",
    "text": "Custom list styles"
  }, {
    "depth": 2,
    "slug": "backdrop-blur",
    "text": "Backdrop blur"
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
    code: "code",
    pre: "pre",
    span: "span",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I\u2019ve been collecting new CSS things I stumble across that are helpful, made my life easier, or are just neat. Here are some of my favorites."
    }), "\n", createVNode(_components.h2, {
      id: "css-clamp",
      children: "CSS clamp()"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "clamp()"
      }), " function accepts three arguments: a minimum value, a preferred value, and a maximum value. This allows you to fluidly scale a property based on the viewport size, while still maintaining control over the minimum and maximum values."]
    }), "\n", createVNode(_components.p, {
      children: ["One of my favorite uses of clamp is for font sizes. The first time I used ", createVNode(_components.code, {
        children: "vw"
      }), " I was stoked there was finally a way to make text flexible and responsive without the need to make multiple media queries and breakpoints. However it gets super unwieldy on larger and smaller screens. Clamp allows you to tame that shit."]
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
              color: "#5DE4C7"
            },
            children: "h1"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "font-size"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": clamp("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1.5rem"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5vw"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3rem"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-perfect-inner-border-radius",
      children: "The perfect inner border radius"
    }), "\n", createVNode(_components.p, {
      children: ["The traditional approach of using a single border radius value can result in imperfect corners that look like ", createVNode("span", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "My favorite Green Day album tho",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "dookie"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "I saved this diagram from twitter a while back (If you know who originally made it please let me know so I can credit them). It\u2019s a nice visual of the formula for calculating the perfect inner border radius."
    }), "\n", createVNode("img", {
      src: "/img/borderradius.png"
    }), "\n", createVNode(_components.p, {
      children: "and here\u2019s how we can implement it in CSS:"
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
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "card-outer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  --radius: "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "20px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  --border: "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "10px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* Outer = inner + space between */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "border-radius"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": calc(var(--radius) "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " var(--border));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "padding"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": var(--border);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "card-inner"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "border-radius"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": var(--radius);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode("div", {
      class: "flex items-center",
      children: [createVNode("div", {
        class: "card-outer",
        children: createVNode("img", {
          src: "https://placekitten.com/250/300",
          class: "card-inner"
        })
      }), createVNode("strong", {
        class: "px-10",
        children: "vs:"
      }), createVNode("div", {
        class: "rounded-[20px] radius-20 inline-block p-[10px] bg-[#73d9b0]",
        children: createVNode("img", {
          src: "https://placekitten.com/250/300",
          class: "rounded-[20px]"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Doesn\u2019t the one on the left look so much better?"
    }), "\n", createVNode(_components.h2, {
      id: "aspect-ratio-object-fit-and-mix-blend-mode",
      children: "Aspect ratio, object-fit, and mix-blend-mode"
    }), "\n", createVNode(_components.p, {
      children: ["I had a project that consisted of creating a grid of images and the images were made up of various sizes and aspect ratios. Setting the aspect ratio with ", createVNode(_components.code, {
        children: "aspect-ratio"
      }), " and ", createVNode(_components.code, {
        children: "object-fit"
      }), " made it super easy to ensure images were all the same size and didn\u2019t have any white backgrounds. Additional tip: if, for example, you have photos of a product against a white background but you\u2019re using a different colored background, you can use ", createVNode(_components.code, {
        children: "mix-blend-mode: color-burn"
      }), " to get rid of the white background (", createVNode("i", {
        children: "*note: this will only work on lighter colored backgrounds"
      }), ")."]
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
            children: "/* aspect ratio and object fit for inconsistently sized images */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "photos"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  aspect-ratio: "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "object-fit"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "contain"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* to get rid of white backgrounds: */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "mix-blend-mode"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "color-burn"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* for browsers that dont support aspect-ratio: */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "photos"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "before"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "content"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "display"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "block"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* for an aspect ratio of 3/2 divide 2/3 * 100 */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* and set that as the padding-top % */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "padding-top"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "66.666%"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "truncate-a-paragraph-at-x-amount-of-lines",
      children: "Truncate a paragraph at x amount of lines"
    }), "\n", createVNode(_components.p, {
      children: "This is super useful for taming long paragraphs of text that you don\u2019t have control over like maybe getting an overview from a blog post or something. I recently used this on an instagram feed and needed to truncate captions to 3 lines."
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
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "display"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "-webkit-box"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "-webkit-line-clamp"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "-webkit-box-orient"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "vertical"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "overflow"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "hidden"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In action:"
    }), "\n", createVNode("blockquote", {
      style: "display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;",
      children: "Sometimes we make the process more complicated than we need to. We will never make a journey of a thousand miles by fretting about how long it will take or how hard it will be. We make the journey by taking each day step by step and then repeating it again and again until we reach our destination."
    }), "\n", createVNode(_components.h2, {
      id: "dvhsvhlvh-units",
      children: "dvh/svh/lvh units"
    }), "\n", createVNode(_components.p, {
      children: "The new viewport units, namely dynamic viewport height (dvh), small viewport height (svh), and large viewport height (lvh), provide a better way to handle various viewport sizes and adapt to changes in the browsers interface elements. These units are especially useful for mobile devices where the toolbar or address bar can change the available space for content."
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s an example of how to use the new viewport units in CSS:"
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
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "full-height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100vh"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "/* for browsers that dont support dvh or svh */"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "dvh;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "svh;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "These are fairly new and I haven\u2019t used them much yet but keep them on your radar because they could potentially be super useful."
    }), "\n", createVNode(_components.h2, {
      id: "custom-list-styles",
      children: "Custom list styles"
    }), "\n", createVNode(_components.p, {
      children: ["I discovered this recently and thought it was kinda neat. Chris Coyier recently wrote ", createVNode(_components.a, {
        href: "https://chriscoyier.net/2023/04/07/emoji-lists-the-good-way/",
        children: "a post"
      }), " on this technique for creating emoji lists that aren\u2019t completely annoying for people who use screen readers."]
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
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "afancylist"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "list-style"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": rnbwdots;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "@counter-style "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "rnbwdots"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "system"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "cyclic"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "symbols"
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
            children: "\u{1F534}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F7E0}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F7E1}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F7E2}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F535}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F7E3}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "suffix"
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
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Example:"
    }), "\n", createVNode("ul", {
      class: "afancylist",
      children: [createVNode("li", {
        children: "List item 1"
      }), createVNode("li", {
        children: "List item 2"
      }), createVNode("li", {
        children: "List item 3"
      }), createVNode("li", {
        children: "List item 4"
      }), createVNode("li", {
        children: "List item 5"
      }), createVNode("li", {
        children: "List item 6"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This example is a bit over the top but I mean look how easy it is to make your list bullets anything you want."
    }), "\n", createVNode(_components.h2, {
      id: "backdrop-blur",
      children: "Backdrop blur"
    }), "\n", createVNode(_components.p, {
      children: ["I recall trying to recreate this effect back in the day and it was a real pain in the ", createVNode("span", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "*Ass",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "a**"
        })
      }), ", now you can simply add ", createVNode("span", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "or tw class 'backdrop-blur-md'",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "backdrop-filter: blur(12px)"
        })
      }), " to your element to create a slick sort of frosted window effect. I\u2019ve seen it used a lot recently for like sticky navigation type of deals, heck even the ", createVNode(_components.a, {
        href: "https://tailwindcss.com/docs/installation",
        children: "Tailwind docs"
      }), " have it."]
    }), "\n", createVNode(_components.p, {
      children: "In action (hover over Mr. Freeman)"
    }), "\n", createVNode("div", {
      class: "rounded-xl flex items-center group bg-cover h-96 w-96",
      style: "background-image: url('/img/mfhcc.jpg');",
      children: createVNode("div", {
        class: "opacity-0 transform translate-y-[200%] group-hover:opacity-100 group-hover:translate-y-20 transition duration-300 ease-in backdrop-blur-md text-center group-hover m-6 p-4 font-normal text-xl text-white rounded-l",
        children: "Morgan Freeman holding cotton candy."
      })
    }), "\n", createVNode(_components.h2, {
      id: "share",
      children: "Share \u{1F44D}"
    }), "\n", createVNode(_components.p, {
      children: ["Do you have any neat CSS things you\u2019ve stumbled upon recently?", createVNode("br", {}), " Let me know on ", createVNode(_components.a, {
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
const url = "src/content/blog/favorite-newish-css-things.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/favorite-newish-css-things.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/favorite-newish-css-things.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
