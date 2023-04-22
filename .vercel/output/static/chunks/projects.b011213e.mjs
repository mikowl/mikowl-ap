import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from './astro.220171ad.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { T as Tooltip } from './pages/all.ea9e81c7.mjs';
import 'html-escaper';
/* empty css                          */import '@astrojs/rss';
import 'fuse.js';
import 'react';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                           */import 'github-slugger';
/* empty css                          *//* empty css                        */import 'satori';
import 'node:fs/promises';
import '@resvg/resvg-js';

const Pokeball = (props) => {
  const size = props.size ?? 32;
  return /* @__PURE__ */ jsx("svg", {
    className: `icon-pokeball${props.className ? ` ${props.className}` : ""}`,
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    style: props.styles,
    viewBox: "0 0 1200.000000 1200.000000",
    preserveAspectRatio: "xMidYMid meet",
    children: /* @__PURE__ */ jsxs("g", {
      transform: "translate(0.000000,1200.000000) scale(0.100000,-0.100000)",
      fill: props.fill,
      stroke: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M4000 11500 l0 -500 -1000 0 -1000 0 0 -500 0 -500 -500 0 -500 0 0 -1000 0 -1000 -500 0 -500 0 0 -2000 0 -2000 500 0 500 0 0 -1000 0 -1000 500 0 500 0 0 -500 0 -500 1000 0 1000 0 0 -500 0 -500 2000 0 2000 0 0 500 0 500 1000 0 1000 0 0 500 0 500 500 0 500 0 0 1000 0 1000 500 0 500 0 0 2000 0 2000 -500 0 -500 0 0 1000 0 1000 -500 0 -500 0 0 500 0 500 -1000 0 -1000 0 0 500 0 500 -2000 0 -2000 0 0 -500z m1000 -2000 l0 -500 500 0 500 0 0 -500 0 -500 -500 0 -500 0 0 -500 0 -500 -500 0 -500 0 0 500 0 500 -500 0 -500 0 0 500 0 500 500 0 500 0 0 500 0 500 500 0 500 0 0 -500z m2000 -4500 l0 -1000 1500 0 1500 0 0 500 0 500 500 0 500 0 0 -500 0 -500 -500 0 -500 0 0 -1000 0 -1000 -1000 0 -1000 0 0 -500 0 -500 -2000 0 -2000 0 0 500 0 500 -1000 0 -1000 0 0 1000 0 1000 -500 0 -500 0 0 500 0 500 500 0 500 0 0 -500 0 -500 1500 0 1500 0 0 1000 0 1000 1000 0 1000 0 0 -1000z"
      }), " ", /* @__PURE__ */ jsx("path", {
        d: "M5000 3500 l0 -500 1000 0 1000 0 0 500 0 500 -1000 0 -1000 0 0 -500z"
      })]
    })
  });
};
__astro_tag_component__(Pokeball, "@astrojs/react");

const frontmatter = {
  "author": "Michael Elias",
  "pubDatetime": "2023-04-02T00:00:00.000Z",
  "title": "Silly side projects are important",
  "postSlug": "silly-side-projects-are-important",
  "featured": false,
  "ogImage": "/img/pokematchog.png",
  "postThumb": "/img/pokecon.png",
  "tags": ["typescript", "react", "preact", "tanstack-query", "pokeapi", "vite", "vercel"],
  "description": "I was messing around with the PokeApi to get an idea of how tanstack-query works to potentially use it for work"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "playing-sounds-is-finicky-af-particularly-on-mobile",
    "text": "Playing sounds is finicky af, particularly on mobile"
  }, {
    "depth": 2,
    "slug": "tanstack-query-is-rad",
    "text": "TanStack Query is rad"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    ul: "ul",
    li: "li",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode("img", {
      src: "/img/pokecon.png",
      alt: "Pokematch",
      class: "float-right max-w-[150px] sm:max-w-[220px] ml-5"
    }), "\n", createVNode(_components.p, {
      children: "I wanted to create a simple game with my daughter to get the programming wheels turning in her head. It started as a card memory matching game and grew into an actually kinda fun game. There are 9 total rounds for each Pokemon generation, at the end of each round you are shown the Pokemon you just caught. You then have a chance to earn a \u201Cpower up\u201D by guessing which of those would win in a battle (this is based on a simple calculation of the sum of their stats)."
    }), "\n", createVNode(_components.p, {
      children: "The powerups could be:"
    }), "\n", createVNode("ul", {
      style: "list-style:none;line-height:1;",
      children: [createVNode("li", {
        children: [createVNode(Pokeball, {
          fill: "#f8d878"
        }), " reveal power (temporarily reveals all the cards)"]
      }), createVNode("li", {
        children: [createVNode(Pokeball, {
          fill: "#6844fc"
        }), " turn power (takes away 2 turns)"]
      }), createVNode("li", {
        children: [createVNode(Pokeball, {
          fill: "#e40058"
        }), " time power (takes 7 seconds off the clock)"]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Side projects are great, even small trivial ones like this one. I still ended up learning some new things, like:"
    }), "\n", createVNode(_components.h2, {
      id: "playing-sounds-is-finicky-af-particularly-on-mobile",
      children: ["Playing sounds is finicky ", createVNode(Tooltip, {
        "client:visible": true,
        content: "*as fuck",
        "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
        "client:component-export": "default",
        "client:component-hydration": true,
        children: "af"
      }), ", particularly on mobile"]
    }), "\n", createVNode(_components.p, {
      children: ["Generally playing sounds behaved as I expected on desktop but as soon as I started testing on mobile I\u2019d run into unexpected behavior. Sometimes the sounds would decide not to play, other times it wouldn\u2019t play at all. I spent hours debugging sound issues thinking there was something janky with my code. I had recently finished Josh W Comeau ", createVNode(_components.a, {
        href: "https://www.joyofreact.com/",
        children: "The Joy of React"
      }), " course and stumbled across his ", createVNode(_components.a, {
        href: "https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/",
        children: "blog post"
      }), " about a \u201CuseSound\u201D react hook he created. I wasn\u2019t necessarily expecting it to fix my sound issues but figured I\u2019d give it a try since it gives you some nice features like:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Prematurely stop the sound, or pause/resume the sound."
      }), "\n", createVNode(_components.li, {
        children: "Load an audio sprite and split it up into many individual sounds."
      }), "\n", createVNode(_components.li, {
        children: "Tweak playback speed to speed up / slow down sounds."
      }), "\n", createVNode(_components.li, {
        children: "Tons of event listeners."
      }), "\n", createVNode(_components.li, {
        children: ["Lots of other advanced stuff, made possible by ", createVNode(_components.a, {
          href: "https://howlerjs.com/",
          children: "Howler"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But lo and behold, it fixed all my sound issues! The secrety key though wasn\u2019t the nice hook Josh created but the audio library called Howler which makes working with audio in js super reliable across all platforms."
    }), "\n", createVNode(_components.p, {
      children: "Give use-sound a try in your next project that includes audio."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code",
      style: {
        backgroundColor: "#1b1e28",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "npm add use-sound"
          })
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "tanstack-query-is-rad",
      children: "TanStack Query is rad"
    }), "\n", createVNode(_components.p, {
      children: ["I wanted to mess around with the latest tanstack query (previously known as react-query) because if you\u2019ve ever had to fetch data in a react app you know it can get pretty ugly. You get all sorts of nice things out of the box like caching, refetching, and pagination. I\u2019m not going to go into too much detail about it here but if you\u2019re interested in learning more about it check out the ", createVNode(_components.a, {
        href: "https://tanstack.com/query/latest",
        children: "docs"
      }), ". I also highly recommend checkout out TkDodo\u2019s ", createVNode(_components.a, {
        href: "https://tkdodo.eu/blog/all",
        children: "blog"
      }), ", he\u2019s got all sorts of excellent articles about it."]
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s an example of how I used tanstack query to fetch random Pokemon from a specific generation:"
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
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
            children: "TOTAL_GENS"
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
              color: "#5DE4C7"
            },
            children: "9"
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
            children: "POKE_API_URL"
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
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://pokeapi.co/api/v2/pokemon"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// specify the offset and limit for each generation"
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
            children: "pokemonGenerationData"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "PokemonGenerationData"
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
            children: " {"
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
              color: "#5DE4C7"
            },
            children: "1"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "limit"
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
            children: "151"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "2"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "151"
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
            children: "limit"
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
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "3"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "251"
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
            children: "limit"
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
            children: "135"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "4"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "386"
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
            children: "limit"
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
            children: "107"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "5"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "493"
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
            children: "limit"
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
            children: "156"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "6"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "649"
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
            children: "limit"
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
            children: "72"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "7"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "721"
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
            children: "limit"
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
            children: "88"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "8"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "809"
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
            children: "limit"
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
            children: "96"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
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
              color: "#5DE4C7"
            },
            children: "9"
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "offset"
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
            children: "905"
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
            children: "limit"
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
            children: "103"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "getRandomPokemon"
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
              color: "#5DE4C7"
            },
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "gen"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "PokemonGeneration"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "BOARD_SIZES"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
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
            children: "=>"
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
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "offset"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "limit"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " } "
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
            children: "pokemonGenerationData"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "gen"
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
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
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
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "POKE_API_URL"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "/?offset="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "offset"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "&limit="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "limit"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "try"
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
            children: "    "
          }), createVNode(_components.span, {
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
            children: "response"
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
              color: "#5DE4C7C0"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
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
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "results"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " } "
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
              color: "#5DE4C7C0"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "();"
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
              color: "#767C9DB0"
            },
            children: "// here we're getting a random selection of pokemon from the generation"
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
            children: "randomPokemon"
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
            children: "results"
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
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "slice"
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
            children: "BOARD_SIZES"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
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
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// then we fetch the data for each pokemon"
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
            children: "promises"
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
            children: "randomPokemon"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "Result"
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
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "      "
          }), createVNode(_components.span, {
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
            children: "response"
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
              color: "#5DE4C7C0"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
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
              color: "#A6ACCD"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
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
            children: "pokemonData"
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
              color: "#5DE4C7C0"
            },
            children: "await"
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
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "all"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "promises"
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
              color: "#A6ACCD"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// this creates the card duplicates and shuffles"
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
            children: "shuffledCards"
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
              color: "#E4F0FBD0"
            },
            children: "shuffle"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pokemonData"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pokemonData"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]);"
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
              color: "#5DE4C7C0"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "shuffledCards"
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
            children: "  } "
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "catch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") {"
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
            children: "warn"
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
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "error"
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
            children: "  } "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// finally our usePokemon hook"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
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
            children: "usePokemon"
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
            children: "gen"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "PokemonGeneration"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "BOARD_SIZES"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "UseQueryResult"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "Pokemon"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "[], "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "Error"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
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
              color: "#5DE4C7C0"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "useQuery"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "queryKey"
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
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "pokemonList"
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
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "gen"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "queryFn"
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
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "getRandomPokemon"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "gen"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "BOARD_SIZES"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "staleTime"
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
            children: "1000"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "60"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "60"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "24"
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
              color: "#E4F0FB"
            },
            children: "  "
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
              color: "#A6ACCD"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// and what's awesome about tanstack query is we get things like "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0"
            },
            children: "// isLoading, isFetching, error, and refetch out of the box"
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
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isLoading"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isFetching"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "refetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "PokemonData"
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
              color: "#E4F0FBD0"
            },
            children: "usePokemon"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "gen"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "boardSize"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s the meat and potatoes of it, I created a custom usePokemon hook, after each round I call ", createVNode(_components.code, {
        children: "refetch()"
      }), " when the gen changes and it fetches a new set of pokemon."]
    }), "\n", createVNode(_components.p, {
      children: ["You can play the game ", createVNode(_components.a, {
        href: "https://pokematch.vercel.app/",
        children: "here"
      }), " and view the source code ", createVNode(_components.a, {
        href: "https://github.com/mikowl/pokematch",
        children: "here"
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
const url = "src/content/blog/projects.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/projects.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/projects.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
