import { _ as __astro_tag_component__, F as Fragment$1, i as createVNode } from './astro.220171ad.mjs';
import { useState, useRef } from 'react';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'html-escaper';

const Dadjoke = () => {
  const [joke, setJoke] = useState("");
  const generateDadJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    }).then((res) => res.json()).then((data) => setJoke(data.joke));
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("button", {
      className: "w-full btn btn-purple",
      onClick: generateDadJoke,
      children: joke ? "👴 Generate Another Dad Joke 🤪" : "👴 Generate Dad Joke 👴"
    }), joke && /* @__PURE__ */ jsx("blockquote", {
      children: joke
    })]
  });
};
__astro_tag_component__(Dadjoke, "@astrojs/react");

const DumbButton = () => {
  const [count, setCount] = useState(0);
  const btnRef = useRef(null);
  const generateRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
  const handleClick = () => {
    if (btnRef.current === null)
      return;
    setCount((c) => c + 1);
    if (count >= 9) {
      btnRef.current.style.transform = `translate(45px, 10px) scale(1.5)`;
      setCount(10);
      return;
    }
    btnRef.current.style.backgroundColor = generateRandomHexColor();
    const screenWidth = window.innerWidth - 240;
    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * 50);
    const randomRotate = Math.floor(Math.random() * 60) - 30;
    btnRef.current.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
  };
  return /* @__PURE__ */ jsx("button", {
    className: "btn transition-all duration-500 ease-in-out",
    style: {
      transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.32, 1.6)"
    },
    ref: btnRef,
    onClick: handleClick,
    children: count < 10 ? `Click me! ${count}` : "You win! 🎉"
  });
};
__astro_tag_component__(DumbButton, "@astrojs/react");

const frontmatter = {
  "author": "Michael Elias",
  "pubDatetime": "2023-04-01T00:00:00.000Z",
  "title": "Astro and mdx and components in markdown",
  "postSlug": "astro-and-mdx",
  "postThumb": "/img/thumbs/astro.jpg",
  "featured": false,
  "tags": ["astro", "mdx", "react", "markdown"],
  "description": "I was all like whattt and they were all like nooooo way and I was like yessss and they were all like bruhhhhhh and I was like..."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    ul: "ul",
    li: "li",
    code: "code",
    pre: "pre",
    span: "span"
  }, props.components);
  return createVNode(Fragment$1, {
    children: [createVNode("img", {
      src: "/astro.svg",
      alt: "Astro",
      class: "float-right w-1/4 m-4"
    }), "\n", createVNode(_components.p, {
      children: ["I had an old blog written in ", createVNode(_components.a, {
        href: "https://jekyllrb.com/",
        children: "Jekyll"
      }), " that I started in 2013 but it hadn\u2019t been updated in an embarassingly long time so I decided to start so fresh and so clean clean. Here we are, a new website built with ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      }), ". Unless you\u2019ve been living under a rock (or if you\u2019re not a web dev) you\u2019ve probably heard of it."]
    }), "\n", createVNode(_components.p, {
      children: ["One of the coolest things it brings to the table is it\u2019s \u201CComponent Islands\u201D architecture, so like think of the various components your app might have: header, navigation, sidebar, footer, etc. Some of these components could be mostly static like your footer but you may also have something like an image carousel component that\u2019s interactive. In astro you can mix and match your UI framework, hypothetically you could have a header written in ", createVNode(_components.a, {
        href: "https://svelte.dev/",
        children: "Svelte"
      }), ", a sidebar written in ", createVNode(_components.a, {
        href: "https://vuejs.org/",
        children: "Vue"
      }), ", and an image carousel written in ", createVNode(_components.a, {
        href: "https://react.dev/",
        children: "React"
      }), ". Although I\u2019m not quite sure why anyone in their sane mind would do that. Anyways, the biggest benefit of astro islands is performance, most of your website is converted to fast static html and the javascript is only loaded for the individual components that actually need it."]
    }), "\n", createVNode(_components.p, {
      children: ["My favorite, and newish part of Astro is the ability to use ", createVNode(_components.a, {
        href: "https://mdxjs.com/",
        children: "mdx"
      }), " files which is like markdown but with jsx, so if I want I can build little components and slap them in my blog post, for example:"]
    }), "\n", createVNode(Dadjoke, {
      "client:visible": true,
      "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/blog/Dadjoke",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "or like make this super fun game where the goal is to click the button 10 times:"
    }), "\n", createVNode(DumbButton, {
      "client:visible": true,
      "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/blog/DumbButton",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s pretty awesome, right? Astro gives you multiple ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
        children: "client directives"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:load"
        }), " load and hydrate the component js immediately on page load"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:idle"
        }), "  load and hydrate the component js once the page is done with its initial load"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:visible"
        }), " load and hydrate the component js once the component has entered the user\u2019s viewport"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:media"
        }), " loads and hydrates the component js once a certain CSS media query is met"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "client:only"
        }), " like load except skips html server-rendering completely"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For example, with my Dadjoke component, I set it to ", createVNode(_components.code, {
        children: "client:visible"
      }), " so the javascript doesn\u2019t load until the component reaches the user\u2019s viewport."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code",
      style: {
        backgroundColor: "#1b1e28",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: "Dadjoke"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "client"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "visible"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "and you\u2019re probably wanting my amazing Dadjoke component, so here you go:"
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
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "useState"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "from"
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
            children: "react"
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
            children: "Dadjoke"
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
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "joke"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setJoke"
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
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "useState"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\"\""
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
              color: "#ADD7FF"
            },
            children: "generateDadJoke"
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
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://icanhazdadjoke.com/"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "headers"
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
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "Accept"
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
            children: "application/json"
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
              color: "#E4F0FB"
            },
            children: "      "
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
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "})"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "res"
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
            children: "res"
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
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "data"
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
            children: "setJoke"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "joke"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  };"
          })
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
              color: "#5DE4C7C0"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
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
            children: "<>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
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
            children: "btn"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{generateDadJoke}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        {joke "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
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
            children: "\u{1F474} Generate Another Dad Joke \u{1F92A}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
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
            children: "\u{1F474} Generate Dad Joke \u{1F474}"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      {joke "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "blockquote"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">{joke}</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "blockquote"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "    </>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  );"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export default "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "Dadjoke"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        })]
      })
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
const url = "src/content/blog/hello.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/hello.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment: Fragment$1, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/hello.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
