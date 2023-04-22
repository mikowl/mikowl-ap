import { _ as __astro_tag_component__, F as Fragment$1, i as createVNode } from './astro.220171ad.mjs';
import { useState } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import 'html-escaper';

const RandomKitty = () => {
  const [kitty, setKitty] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleRandomKitty = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search").then((response) => response.json()).then((data) => setKitty(data[0].url)).then(() => setLoading(false));
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("button", {
      className: "btn",
      onClick: handleRandomKitty,
      children: "🐈‍⬛ The Random Cat Button 🐈‍⬛"
    }), loading ? /* @__PURE__ */ jsx("div", {
      className: "flex mt-4 ml-12",
      children: /* @__PURE__ */ jsx("div", {
        className: "w-6 h-6 border-b-2 rounded-full animate-spin"
      })
    }) : kitty && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("img", {
        className: "rounded-md border-color-[#73d9b0] max-h-96 min-h-[24rem] mt-2 transition-all",
        style: {
          border: "3px solid #73d9b0"
        },
        src: kitty,
        alt: "Random Kitty"
      }), /* @__PURE__ */ jsx("small", {
        children: "If you didn't like this blog post I mean hey at least you got a cute cat photo"
      })]
    })]
  });
};
__astro_tag_component__(RandomKitty, "@astrojs/react");

const frontmatter = {
  "author": "Michael Elias",
  "pubDatetime": "2023-02-12T00:00:00.000Z",
  "title": "Javascript One Liners",
  "postSlug": "javascript-one-liners",
  "postThumb": "/img/thumbs/oneliners.jpg",
  "featured": false,
  "tags": ["javascript", "snippets"],
  "description": "A collection of somewhat useful javascript one liners"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\uFE0F-here-they-is",
    "text": "\u26A1\uFE0F Here they is:"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span",
    em: "em"
  }, props.components);
  return createVNode(Fragment$1, {
    children: [createVNode(_components.p, {
      children: ["A few years ago I started ", createVNode(_components.a, {
        href: "https://gist.github.com/mikowl/5fa1a06c06264afaa544bb6b8af641b1",
        children: "this gist"
      }), " of javascript one liners. I\u2019ve been adding to it over the years and thought it would be fun to share it here."]
    }), "\n", createVNode(_components.h2, {
      id: "\uFE0F-here-they-is",
      children: "\u26A1\uFE0F Here they is:"
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
            children: "//  Remove any duplicates from an array of primitives."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "unique"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "Set"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Sleep in async functions. Use: await sleep(2000)."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "ms"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "resolve"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "ms"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// or"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "util"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "promisify"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setTimeout"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Type this in your code to break chrome debugger in that line."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "debugger"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Just plain english."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "every"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Number"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isFinite"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Returns all non-falsy values from an array."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "filter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Boolean"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Array destructuring to see matching elements."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "g"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "255"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "255"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Object destructuring to reduce multiple lines of code to a single line."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "width"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "} "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "resolution"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Gets an item from the list and wraps around to the start if n is larger than the list."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "items"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Console.log in array function without adding curly braces."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "addFortyTwo"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "42"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Same as above"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "add42"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "n"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "42"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Log variables with names. I love this trick with object \u2764\uFE0F"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " b"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " c"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " d"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " e"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Random hex color"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "generateRandomHexColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "#"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "floor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "random"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " 0xffffff"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "toString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "16"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "padEnd"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
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
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// We love Javascript that's why instead of Math.floor we use"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Note: Use with caution, it won't work for big (>32bit) or negative numbers"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "~~"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "anyNumber"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Shuffle Array"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "shuffleArray"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "sort"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "random"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "shuffleArray"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Copy to Clipboard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "copyToClipboard"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "text"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "navigator"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "clipboard"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "?."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "writeText"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "navigator"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "clipboard"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "writeText"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "text"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "copyToClipboard"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Hello World!"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Unique Elements"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "getUnique"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "Set"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "getUnique"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Detect Dark Mode"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "isDarkMode"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "(prefers-color-scheme: dark)"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "matches"
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
              color: "#E4F0FB"
            },
            children: "console"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "isDarkMode"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Scroll to top of page"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "scrollToTop"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "scrollTo"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "top"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "behavior"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Scroll to bottom of page"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "scrollToBottom"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "scrollTo"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "top"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "scrollHeight"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "behavior"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "smooth"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Scroll to top of an element"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "scrollToEl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "scrollIntoView"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "behavior"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
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
            children: "smooth"
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
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "block"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
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
            children: "start"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Scroll to elements bottom"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "scrollToElb"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "element"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "scrollIntoView"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "behavior"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
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
            children: "smooth"
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
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "block"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
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
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "});"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Check if an element is focused"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "elem"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " .text-input"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isFocus"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "elem"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "activeElemnt"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Check if an array is empty"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arrIsEmpty"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Array"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "isArray"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "arr"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Redirect user"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "redirect"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "location"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "href"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// ex: recdirect(\"https://google.com\")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Go back to previous page"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "navigateBack"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "history"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "back"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Get selected text"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "getSelectedText"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "getSelection"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "toString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// Simple star rating ex: rating(5) will print \u2605\u2605\u2605\u2605\u2605"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "rating"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "star"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
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
            children: "\u2605"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "repeat"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "max"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Math"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "min"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "star"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")))."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "padEnd"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u2606"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " );"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Note: this is just for fun, there are no benefits in your code only being on one line, always aim for readability over cleverness (although that star rating and random color snippet is p. cool)"
      })
    }), "\n", createVNode(RandomKitty, {
      "client:visible": true,
      "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/blog/RandomKitty",
      "client:component-export": "default",
      "client:component-hydration": true
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
const url = "src/content/blog/js-one-liners.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/js-one-liners.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment: Fragment$1, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/js-one-liners.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
