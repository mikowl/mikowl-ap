import { _ as __astro_tag_component__, b as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, j as spreadAttributes, g as addAttribute, u as unescapeHTML, h as renderComponent, F as Fragment, i as createVNode } from './astro.220171ad.mjs';
import { u as useUniqueId, T as Tooltip } from './pages/all.ea9e81c7.mjs';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { optimize } from 'svgo';
import 'html-escaper';
/* empty css                          */import '@astrojs/rss';
import 'fuse.js';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                           */import 'github-slugger';
/* empty css                          *//* empty css                        */import 'satori';
import 'node:fs/promises';
import '@resvg/resvg-js';

const Accordion = ({
  heading,
  content
}) => {
  const [isActive, setIsActive] = useState(false);
  const panelId = useUniqueId("accordion");
  return /* @__PURE__ */ jsxs("div", {
    className: "accordion",
    children: [/* @__PURE__ */ jsx("h3", {
      children: /* @__PURE__ */ jsxs("button", {
        id: panelId,
        "aria-controls": panelId,
        "aria-expanded": isActive,
        onClick: () => setIsActive(!isActive),
        className: "accordion-toggle",
        children: [heading, /* @__PURE__ */ jsx("i", {
          className: `chevron-down ${isActive ? "open" : ""}`
        })]
      })
    }), /* @__PURE__ */ jsx("p", {
      id: panelId,
      role: "region",
      "aria-labelledby": panelId,
      className: `accordion-content ${isActive ? "active" : ""}`,
      children: content
    })]
  });
};
__astro_tag_component__(Accordion, "@astrojs/react");

const RandomQuokka = () => {
  const [quokka, setQuokka] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const randomQuokka = () => {
    fetch("https://quokka.pics/api/").then((res) => res.json()).then((data) => {
      setImageLoaded(false);
      setQuokka(data.image);
    });
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("handleImageLoad");
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("button", {
      className: "btn",
      onClick: randomQuokka,
      children: "🐨 The Random Quokka Button 🐨"
    }), quokka && /* @__PURE__ */ jsx("img", {
      className: "rounded-md border-color-[#73d9b0] max-h-96 min-h-[24rem] mt-2 transition-all",
      style: {
        border: "3px solid #73d9b0"
      },
      src: quokka,
      alt: "Random Quokka",
      onLoad: handleImageLoad
    })]
  });
};
__astro_tag_component__(RandomQuokka, "@astrojs/react");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$3 = createAstro("https://www.mikowl.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/melias/Sites/mikowl-ap/node_modules/.pnpm/astro-icon@0.8.0/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$2 = createAstro("https://www.mikowl.com");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "/Users/melias/Sites/mikowl-ap/node_modules/.pnpm/astro-icon@0.8.0/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$1 = createAstro("https://www.mikowl.com");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/melias/Sites/mikowl-ap/node_modules/.pnpm/astro-icon@0.8.0/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro = createAstro("https://www.mikowl.com");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "/Users/melias/Sites/mikowl-ap/node_modules/.pnpm/astro-icon@0.8.0/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const frontmatter = {
  "author": "Michael Elias",
  "pubDatetime": "2023-04-06T00:00:00.000Z",
  "title": "You may not need that npm package",
  "postSlug": "you-may-not-need-that-npm-package",
  "postThumb": "/img/thumbs/maynotneednpm.jpg",
  "featured": false,
  "draft": false,
  "tags": ["astro", "mdx", "react", "markdown", "components", "accessibility"],
  "description": "Let's take a look how we can build some common UI components rather than reaching for another npm package or something"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tooltip-component",
    "text": "Tooltip Component"
  }, {
    "depth": 3,
    "slug": "usage",
    "text": "Usage:"
  }, {
    "depth": 2,
    "slug": "accordion-component",
    "text": "Accordion Component"
  }, {
    "depth": 3,
    "slug": "usage-1",
    "text": "Usage:"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping up"
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
    h3: "h3"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["After installing the ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/webpack-bundle-analyzer",
        children: "Webpack Bundle Analyzer"
      }), " on a few of my projects I was blown away how heavy some of these, seemingly simple, packages can be. So before immediately reaching for an npm package try to see if you can build the feature yourself. You may find the end result to be well worth your time, ending with a component that is not a only a fraction of the size but also tailored to fit your specific needs. Let\u2019s build a few components together!"]
    }), "\n", createVNode(_components.h2, {
      id: "tooltip-component",
      children: "Tooltip Component"
    }), "\n", createVNode(_components.p, {
      children: ["I needed a simple tooltip component so I reached for ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/react-tooltip",
        children: "react-tooltip"
      }), ". I ran into some issues with it though in Astro/mdx files and also I really only need a fraction of it\u2019s features. It\u2019s pretty gnarly that a simple tooltip package is like 45kb minified. So anyways I decided to build my own. I started by looking at the ", createVNode(_components.a, {
        href: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
        children: "WAI-ARIA Authoring Practices"
      }), " for tooltips."]
    }), "\n", createVNode("aside", {
      children: [createVNode($$Icon, {
        name: "ion:information-circle-outline"
      }), createVNode(_components.p, {
        children: ["General note, if you\u2019re going to be building your own component/UI I highly recommend checking out ", createVNode(_components.a, {
          href: "https://www.w3.org/WAI/ARIA/apg/patterns/",
          children: "ARIA Authoring Practices Guide (APG)"
        }), ". It\u2019s a great resource for ensuring your UI is accessible and to follow best practices."]
      })]
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
              color: "#ADD7FF"
            },
            children: "React"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "useUniqueId"
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
            children: "../utils/useUniqueId"
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
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "TooltipPros"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
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
              color: "#ADD7FF"
            },
            children: "  content"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "string"
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
              color: "#ADD7FF"
            },
            children: "  children"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "React"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "ReactElement"
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
            children: "Tooltip"
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
            children: "React"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "FC"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "TooltipPros"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "content"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }) "
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
            children: "show"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setShow"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "false"
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
            children: "tooltipId"
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
            children: "useUniqueId"
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
            children: "tooltip"
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
            children: "handleMouseEnter"
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
            children: "setShow"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "true"
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
            children: "handleMouseLeave"
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
            children: "setShow"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "false"
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
            children: "handleFocus"
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
            children: "setShow"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "true"
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
            children: "handleBlur"
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
            children: "setShow"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "false"
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
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
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
            children: "tooltip-container"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
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
              color: "#91B4D5"
            },
            children: "onMouseEnter"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{handleMouseEnter}"
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
              color: "#91B4D5"
            },
            children: "onMouseLeave"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{handleMouseLeave}"
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
              color: "#91B4D5"
            },
            children: "onFocus"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{handleFocus}"
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
              color: "#91B4D5"
            },
            children: "onBlur"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{handleBlur}"
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
              color: "#91B4D5"
            },
            children: "tabIndex"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "aria-describedby"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{tooltipId}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "    >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      {children}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      {show "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
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
            children: "tooltip-content"
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
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{tooltipId} "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "role"
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
            children: "tooltip"
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
              color: "#E4F0FB"
            },
            children: "          {content}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
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
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
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
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
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
            children: "Tooltip"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Pretty straight forward, we got a few spans for the tooltip and the tooltips\u2019 content. We got a single ", createVNode(_components.code, {
        children: "useState"
      }), " to keep track of the tooltip\u2019s state. We then add event listeners to the container to show/hide the tooltip. For accessibility I added the ", createVNode(_components.code, {
        children: "tabIndex"
      }), " to the container so that it can be focused on as well as an ", createVNode(_components.code, {
        children: "aria-describedby"
      }), " attribute to the container so that screen readers know that the tooltip content is related to the container. We also add a ", createVNode(_components.code, {
        children: "role"
      }), " attribute to the tooltip content so that screen readers know that it is a tooltip. Finally we add an ", createVNode(_components.code, {
        children: "id"
      }), " attribute to the tooltip content so that it can be referenced by the ", createVNode(_components.code, {
        children: "aria-describedby"
      }), " attribute on the container."]
    }), "\n", createVNode(_components.p, {
      children: "and here\u2019s the css:"
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
            children: "/* how you want your tooltip link to look */"
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
            children: "tooltip-container"
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
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "relative"
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
            children: "inline-block"
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
            children: "cursor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "default"
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
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": var(--purple-light);"
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
            children: "tooltip-content"
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
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "absolute"
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
            children: "bottom"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100%"
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
            children: "left"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "50%"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": translateX("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "-50%"
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
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "5px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "7px"
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
            children: "background-color"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": rgb("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: " / "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "50%"
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
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": #"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "fff"
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
            children: "font-size"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0.875rem"
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
            children: "border-radius"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "4px"
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
            children: "white-space"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "nowrap"
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
            children: "pointer-events"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "none"
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
            children: "opacity"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: "transition"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "all"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0.3s"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "ease-in-out"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "tooltip-container"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "hover"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "tooltip-content"
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
            children: "opacity"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
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
    }), "\n", createVNode(_components.h3, {
      id: "usage",
      children: "Usage:"
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
            children: "Tooltip"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "content"
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
            children: "\u{1F389} This is a tooltip!"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">Hover over me!</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Tooltip"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s all there is to it, here\u2019s an ", createVNode(Tooltip, {
        "client:load": true,
        content: "\u{1F389} This is a tooltip!",
        "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
        "client:component-export": "default",
        "client:component-hydration": true,
        children: "example"
      }), " of how it looks. Not too bad, eh?"]
    }), "\n", createVNode(_components.h2, {
      id: "accordion-component",
      children: "Accordion Component"
    }), "\n", createVNode(_components.p, {
      children: "Another common piece of UI is an accordion or expand/collapse component. These are pretty simple to build, here\u2019s an example of one I built recently:"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "useUniqueId"
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
            children: "../utils/useUniqueId"
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
            children: "Accordion"
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
            children: " ({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "  heading"
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
            children: "  content"
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
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
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
            children: "  heading"
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
            children: "string"
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
            children: "  content"
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
            children: "string"
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
            children: "}) "
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
            children: "isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setIsActive"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "false"
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
            children: "panelId"
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
            children: "useUniqueId"
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
            children: "accordion"
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
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
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
            children: "accordion"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "h3"
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
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "button"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{panelId}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "aria-controls"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{panelId}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "aria-expanded"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{isActive}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          "
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
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "setIsActive"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
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
            children: "          "
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
            children: "accordion-toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          {heading}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "i"
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
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "chevron-down "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
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
            children: "open"
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
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '""}`'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "} />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        </"
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
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "h3"
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
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
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
              color: "#91B4D5"
            },
            children: "id"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{panelId}"
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
              color: "#91B4D5"
            },
            children: "role"
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
            children: "region"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
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
              color: "#91B4D5"
            },
            children: "aria-labelledby"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{panelId}"
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
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "accordion-content "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "isActive"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
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
            children: "active"
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
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '""}`'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "      >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "        {content}"
          })
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
            children: "p"
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
            children: "    </"
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
            children: "Accordion"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "and the css:"
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
            children: "accordion-toggle"
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
            children: "cursor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "pointer"
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
            children: "flex"
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
            children: "flex-direction"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "row"
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
            children: "justify-content"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "space-between"
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
            children: "align-items"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "center"
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
            children: "width"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100%"
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
            children: "margin"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: "background"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": rgba("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: " / "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "20%"
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
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "7px"
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
            children: "padding"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "8px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "15px"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "accordion-content"
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
            children: "max-height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: "opacity"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": translate("
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
            children: "-15px"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "transition"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "all"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0.3s"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "ease"
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
            children: "accordion-content"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "active"
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
            children: "opacity"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": translate("
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
            children: "max-height"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "100rem"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "chevron-down"
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
            children: "border"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "solid"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "transparent"
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
            children: "transition"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "all"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: ".3s"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "ease-in-out"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "chevron-down"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "open"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": rotate("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "180deg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") translateX("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "-4px"
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
            children: "chevron-down"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "::"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "after"
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
            children: "''"
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
              color: "#ADD7FF"
            },
            children: "box-sizing"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "border-box"
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
            children: "width"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": var(--chevron-size);"
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
            children: ": var(--chevron-size);"
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
            children: "border-bottom"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "solid"
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
            children: "border-right"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1px"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "solid"
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
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": rotate("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "45deg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") translateY("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "-4px"
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
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "transform-origin"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "center"
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
    }), "\n", createVNode(_components.h3, {
      id: "usage-1",
      children: "Usage:"
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
            children: "Accordion"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "heading"
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
            children: "Heading is here"
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
            children: "content"
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
            children: "Content is here"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "And here it is in action:"
    }), "\n", createVNode(Accordion, {
      "client:load": true,
      heading: "Who's the best guitarist of all time?",
      content: "Tony Iommi \u{1F3B8}\u{1F918}\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F\u26A1\uFE0F",
      "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Accordion",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping up"
    }), "\n", createVNode(_components.p, {
      children: "Hope this helps inspire you to maybe create your own components or something, and they\u2019re not too difficult to build. If not umm here have a random quokka:"
    }), "\n", createVNode(RandomQuokka, {
      "client:load": true,
      "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/blog/RandomQuokka",
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
const url = "src/content/blog/youmaynotneed.mdx";
const file = "/Users/melias/Sites/mikowl-ap/src/content/blog/youmaynotneed.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/content/blog/youmaynotneed.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
