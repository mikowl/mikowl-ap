import { c as createCollectionToGlobResultMap, a as createGetCollection, b as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, m as maybeRenderHead, h as renderComponent, F as Fragment, u as unescapeHTML, _ as __astro_tag_component__, i as createVNode } from '../astro.220171ad.mjs';
/* empty css                           */import rss from '@astrojs/rss';
import Fuse from 'fuse.js';
import { useRef, useState, useEffect } from 'react';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
/* empty css                            *//* empty css                            *//* empty css                            *//* empty css                           *//* empty css                            */import { slug } from 'github-slugger';
/* empty css                           *//* empty css                         */import satori from 'satori';
import { writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/favorite-newish-css-things.mdx": () => import('../favorite-newish-css-things.50229c8d.mjs'),"/src/content/blog/hello.mdx": () => import('../hello.783775f8.mjs'),"/src/content/blog/js-one-liners.mdx": () => import('../js-one-liners.52c1bcc6.mjs'),"/src/content/blog/projects.mdx": () => import('../projects.40089c0a.mjs'),"/src/content/blog/terminal-shootout.mdx": () => import('../terminal-shootout.626481a8.mjs'),"/src/content/blog/vscode-plugins-2023.mdx": () => import('../vscode-plugins-2023.66f66f5b.mjs'),"/src/content/blog/youmaynotneed.mdx": () => import('../youmaynotneed.9bd5fbd2.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/favorite-newish-css-things.mdx": () => import('../favorite-newish-css-things.fb661259.mjs'),"/src/content/blog/hello.mdx": () => import('../hello.23ed4fde.mjs'),"/src/content/blog/js-one-liners.mdx": () => import('../js-one-liners.7de67718.mjs'),"/src/content/blog/projects.mdx": () => import('../projects.50cdece1.mjs'),"/src/content/blog/terminal-shootout.mdx": () => import('../terminal-shootout.e4adbedd.mjs'),"/src/content/blog/vscode-plugins-2023.mdx": () => import('../vscode-plugins-2023.bcf1bf76.mjs'),"/src/content/blog/youmaynotneed.mdx": () => import('../youmaynotneed.da9aa02f.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const SITE = {
  website: "https://www.mikowl.com",
  author: "Michael Elias",
  desc: "My personal space on the interwebs",
  title: "Mikowl",
  ogImage: "/assets/logo.png",
  lightAndDarkMode: false,
  postPerPage: 5
};
const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 944,
  height: 955
};
const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/mikowl",
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.title} on Facebook`,
    active: false
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `${SITE.title} on Instagram`,
    active: false
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-elias-047b2578/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: "Mail",
    href: "mailto:michael@mikowl.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mikowl",
    linkTitle: `${SITE.title} on Twitter`,
    active: true
  },
  {
    name: "Twitch",
    href: "",
    linkTitle: `${SITE.title} on Twitch`,
    active: false
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.title} on TikTok`,
    active: false
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.title} on CodePen`,
    active: false
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.title} on Discord`,
    active: false
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.title} on GitLab`,
    active: false
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.title} on Skype`,
    active: false
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.title} on Steam`,
    active: false
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$h = createAstro("https://www.mikowl.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = ({}).PUBLIC_GOOGLE_SITE_VERIFICATION;
  const {
    title = SITE.title,
    author = SITE.author,
    description = SITE.desc,
    ogImage = SITE.ogImage
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(
    ogImage ? ogImage : SITE.ogImage,
    Astro2.url.origin
  ).href;
  return renderTemplate(
    _a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="canonical"', '>\n		<meta name="generator"', '>\n\n		<!-- Favicon stuff -->\n		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n		<link rel="manifest" href="/site.webmanifest">\n		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d2232">\n		<meta name="msapplication-TileColor" content="#ffc40d">\n		<meta name="theme-color" content="#ffffff">\n\n		<!-- General Meta Tags -->\n		<title>', '</title>\n		<meta name="title"', '>\n		<meta name="description"', '>\n		<meta name="author"', '>\n\n		<!-- Open Graph / Facebook -->\n		<meta property="og:title"', '>\n		<meta property="og:description"', '>\n		<meta property="og:url"', '>\n		<meta property="og:image"', '>\n\n		<!-- Twitter -->\n		<meta property="twitter:card" content="summary_large_image">\n		<meta property="twitter:url"', '>\n		<meta property="twitter:title"', '>\n		<meta property="twitter:description"', '>\n		<meta property="twitter:image"', '>\n\n		<!-- Google Font -->\n		<link rel="preconnect" href="https://fonts.googleapis.com">\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n		<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;600&display=swap" rel="stylesheet">\n\n		', '\n\n		<script src="/toggle-theme.js"><\/script>\n	', "</head>\n	<body>\n		", "\n	</body></html>"])),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    googleSiteVerification && renderTemplate`<meta name="google-site-verification"${addAttribute(googleSiteVerification, "content")}>`,
    renderHead($$result),
    renderSlot($$result, $$slots["default"])
  );
}, "/Users/melias/Sites/mikowl-ap/src/layouts/Layout.astro");

const logoPNG = "/assets/mikowllogo.png";

const $$Astro$g = createAstro("https://www.mikowl.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="h-40 astro-3EF6KSR2">
	<a id="skip-to-content" href="#main-content" class="astro-3EF6KSR2">Skip to content</a>
	<!-- <div class="nav-container">
		<div class="top-nav-wrap">
			<nav id="nav-menu">
				<button
					class="hamburger-menu focus-outline"
					aria-label="Open Menu"
					aria-expanded="false"
					aria-controls="menu-items"
				>
					<div class="flex icon-container">
						<div id="first-line"></div>
						<div id="second-line"></div>
						<div id="third-line"></div>
					</div>
				</button>
				<ul id="menu-items" class="display-none sm:flex">
					<li>
						<LinkButton
							href="/search"
							className={\`focus-outline p-3 sm:p-1 \${
								activeNav === "search" ? "active" : ""
							}\`}
							ariaLabel="search"
							title="Search"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="scale-125 sm:scale-100"
								><path
									d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
								></path>
							</svg>
						</LinkButton>
					</li>
					<li>
						{
							SITE.lightAndDarkMode && (
								<button
									id="theme-btn"
									class="focus-outline"
									title="Toggles light & dark"
									aria-label="auto"
									aria-live="polite"
								>
									<svg xmlns="http://www.w3.org/2000/svg" id="moon-svg">
										<path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" id="sun-svg">
										<path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
									</svg>
								</button>
							)
						}
					</li>
				</ul>
			</nav>
		</div>
	</div> -->
	<a href="/" class="logo astro-3EF6KSR2">
		${renderTemplate`<img class="mx-auto -mt-12 w-36 astro-3EF6KSR2"${addAttribute(logoPNG, "src")} alt="Mikowl Logo"${addAttribute(LOGO_IMAGE.width, "width")}${addAttribute(LOGO_IMAGE.height, "height")}>` }
	</a>
</header>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Header.astro");

const $$Astro$f = createAstro("https://www.mikowl.com");
const $$Hr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`max-w-4xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}>
	<hr class="border-skin-line"${addAttribute(ariaHidden, "aria-hidden")}>
</div>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Hr.astro");

const $$Astro$e = createAstro("https://www.mikowl.com");
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href, className, ariaLabel, title, disabled = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a type="button"${addAttribute(disabled ? "#" : href, "href")}${addAttribute(disabled ? "-1" : "0", "tabindex")}${addAttribute(`group ${className} astro-5EUNQZKT`, "class")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/LinkButton.astro");

const socialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  Twitter: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`
};

const $$Astro$d = createAstro("https://www.mikowl.com");
const $$Socials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Socials;
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`social-icons ${centered ? "flex" : ""} astro-UPU6FZXR`, "class")}>
	${SOCIALS.filter((social) => social.active).map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": social.href, "className": "link-button astro-UPU6FZXR", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate`
				${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(socialIcons[social.name])}` })}
			` })}`)}
</div>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Socials.astro");

const $$Astro$c = createAstro("https://www.mikowl.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer${addAttribute(`${noMarginTop ? "" : "mt-auto"} astro-SZ7XMLTE`, "class")}>
	${renderComponent($$result, "Hr", $$Hr, { "noPadding": true, "class": "astro-SZ7XMLTE" })}
	<div class="footer-wrapper astro-SZ7XMLTE">
		${renderComponent($$result, "Socials", $$Socials, { "centered": true, "class": "astro-SZ7XMLTE" })}
		<div class="copyright-wrapper astro-SZ7XMLTE">
			<span class="astro-SZ7XMLTE">&#169; ${currentYear} Mikowl Worldwide Incorporated Global Industries&trade;</span>
			<!-- <span class="separator">&nbsp;|&nbsp;</span> -->
			<!-- <span>You ain't tracked or anything luv u bye</span> -->
		</div>
	</div>
</footer>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Footer.astro");

function Datetime({
  datetime,
  size = "sm",
  className
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: `flex items-center space-x-2 opacity-80 ${className}`,
    children: [/* @__PURE__ */ jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `${size === "sm" ? "scale-90" : "scale-100"} inline-block h-6 w-6 fill-skin-base`,
      "aria-hidden": "true",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
      })]
    }), /* @__PURE__ */ jsx("span", {
      className: "sr-only",
      children: "Posted on:"
    }), /* @__PURE__ */ jsx("span", {
      className: `italic ${size === "sm" ? "text-sm" : "text-base"}`,
      children: /* @__PURE__ */ jsx(FormattedDatetime, {
        datetime
      })
    })]
  });
}
const FormattedDatetime = ({
  datetime
}) => {
  const myDatetime = new Date(datetime);
  const date = myDatetime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: date
  });
};
__astro_tag_component__(Datetime, "@astrojs/react");

function Card({
  href,
  frontmatter,
  secHeading = true
}) {
  const {
    title,
    pubDatetime,
    description,
    postThumb
  } = frontmatter;
  return /* @__PURE__ */ jsxs("li", {
    className: "my-10 flex flex-wrap sm:flex-nowrap items-center gap-8",
    children: [postThumb ? /* @__PURE__ */ jsx("div", {
      className: "post-thumb basis-full sm:basis-1/4",
      children: /* @__PURE__ */ jsx("img", {
        src: postThumb,
        className: "rounded-md max-w-sm w-full"
      })
    }) : /* @__PURE__ */ jsx("div", {}), /* @__PURE__ */ jsxs("div", {
      className: "post-content basis-full sm:basis-3/4",
      children: [/* @__PURE__ */ jsx("a", {
        href,
        className: "inline-block text-lg font-medium text-skin-accent focus-visible:no-underline focus-visible:underline-offset-0",
        children: secHeading ? /* @__PURE__ */ jsx("h2", {
          className: "mb-0 text-lg font-medium border-none text-skin-accent hover:underline",
          children: title
        }) : /* @__PURE__ */ jsx("h3", {
          className: "text-lg font-medium hover:underline",
          children: title
        })
      }), /* @__PURE__ */ jsx(Datetime, {
        datetime: pubDatetime
      }), /* @__PURE__ */ jsx("p", {
        children: description
      })]
    })]
  });
}
__astro_tag_component__(Card, "@astrojs/react");

const getSortedPosts = (posts) => posts.filter(({ data }) => !data.draft).sort(
  (a, b) => Math.floor(new Date(b.data.pubDatetime).getTime() / 1e3) - Math.floor(new Date(a.data.pubDatetime).getTime() / 1e3)
);

const slugifyStr = (str) => slug(str);
const slugify = (post) => post.postSlug ? slug(post.postSlug) : slug(post.title);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));

const $$Astro$b = createAstro("https://www.mikowl.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const featuredPosts = sortedPosts.filter(({ data }) => data.featured);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "class": "astro-J7PV25F6" })}
	${maybeRenderHead($$result2)}<main id="main-content" class="astro-J7PV25F6">
		<section id="hero" class="astro-J7PV25F6">
			<!-- <a
        target="_blank"
        href="/rss.xml"
        class="rss-link"
        aria-label="rss feed"
        title="RSS Feed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="rss-icon"
          ><path
            d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"
          ></path><path
            d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"
          ></path><circle cx="6" cy="18" r="2"></circle>
        </svg>
      </a> -->

			<p class="text-lg text-center sm:text-xl astro-J7PV25F6">
				Hi 👋 I'm Michael Elias, a full stack web developer from California
				who's been building things on the interwebs for over 15 years. You can
				take a look at my
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-wavy text-[#67e37c] astro-J7PV25F6", "href": "https://github.com/mikowl" }, { "default": ($$result3) => renderTemplate`
					GitHub profile
				` })}, follow me on
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-wavy text-[#4eade8] astro-J7PV25F6", "href": "https://twitter.com/mikowl" }, { "default": ($$result3) => renderTemplate`
					Twitter
				` })}, or connect on
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-wavy text-[#8790eb] astro-J7PV25F6", "href": "https://www.linkedin.com/in/michael-elias-047b2578/" }, { "default": ($$result3) => renderTemplate`
					LinkedIn
				` })}. Feel free to shoot me
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-wavy text-[#febc44] astro-J7PV25F6", "href": "mailto:michael@mikowl.com" }, { "default": ($$result3) => renderTemplate`
					an email
				` })}
				if you have any questions.
			</p>
			<p class="text-lg text-center sm:text-xl astro-J7PV25F6">
				You can read more about me
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "hover:text-skin-accent underline underline-offset-4 decoration-wavy text-[#f06897] astro-J7PV25F6", "href": "/about" }, { "default": ($$result3) => renderTemplate`
					here
				` })}<span class="display-none sm:inline astro-J7PV25F6">, if you'd like.</span>
			</p>
			<!-- {
        // only display if at least one social link is enabled
        socialCount > 0 && (
          <div class="social-wrapper">
            <Socials />
          </div>
        )
      } -->
		</section>

		${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-J7PV25F6" })}

		${featuredPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					<section id="featured" class="astro-J7PV25F6">
						<h2 class="astro-J7PV25F6">Featured</h2>
						<ul class="astro-J7PV25F6">
							${featuredPosts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data, "secHeading": false, "class": "astro-J7PV25F6" })}`)}
						</ul>
					</section>
					${renderComponent($$result3, "Hr", $$Hr, { "class": "astro-J7PV25F6" })}
				` })}`}

		<section id="recent-posts" class="astro-J7PV25F6">
			<h2 class="astro-J7PV25F6">Recent Posts</h2>
			<ul class="astro-J7PV25F6">
				${sortedPosts.map(
    ({ data }, index) => index < 4 && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data, "secHeading": false, "class": "astro-J7PV25F6" })}`
  )}
			</ul>
			<div class="all-posts-btn-wrapper astro-J7PV25F6">
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					All Posts
					<svg xmlns="http://www.w3.org/2000/svg" class="astro-J7PV25F6"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-J7PV25F6"></path>
					</svg>
				` })}
			</div>
		</section>
	</main>

	${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/index.astro");

const $$file$6 = "/Users/melias/Sites/mikowl-ap/src/pages/index.astro";
const $$url$6 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

async function get$1() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `posts/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime)
    }))
  });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get: get$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://www.mikowl.com");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumb astro-ILHXCYM7" aria-label="breadcrumb">
	<ul class="astro-ILHXCYM7">
		<li class="astro-ILHXCYM7">
			<a href="/" class="astro-ILHXCYM7">Home</a>
			<span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
		</li>
		${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li class="astro-ILHXCYM7">
						<span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"} astro-ILHXCYM7`, "class")} aria-current="page">
							
							${breadcrumb}
						</span>
					</li>` : renderTemplate`<li class="astro-ILHXCYM7">
						<a${addAttribute(`/${breadcrumb}`, "href")} class="astro-ILHXCYM7">${breadcrumb}</a>
						<span aria-hidden="true" class="astro-ILHXCYM7">&#62;</span>
					</li>`
  )}
	</ul>
</nav>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Breadcrumbs.astro");

const $$Astro$9 = createAstro("https://www.mikowl.com");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Main;
  const { pageTitle, pageDesc } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-HSP6OTUF" })}
${maybeRenderHead($$result)}<main id="main-content" class="astro-HSP6OTUF">
	<h1 class="astro-HSP6OTUF">${pageTitle}</h1>
	<p class="astro-HSP6OTUF">${pageDesc}</p>
	${renderSlot($$result, $$slots["default"])}
</main>`;
}, "/Users/melias/Sites/mikowl-ap/src/layouts/Main.astro");

function SearchBar({
  searchList
}) {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = new Fuse(searchList, {
    keys: ["title", "description"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr)
      setInputVal(searchStr);
    setTimeout(function() {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
    }, 50);
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsxs(Fragment$1, {
    children: [/* @__PURE__ */ jsxs("label", {
      className: "relative block",
      children: [/* @__PURE__ */ jsx("span", {
        className: "absolute inset-y-0 left-0 flex items-center pl-2 opacity-75",
        children: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx("path", {
            d: "M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
          })
        })
      }), /* @__PURE__ */ jsx("input", {
        className: "block w-full rounded border border-skin-fill \n        border-opacity-40 bg-skin-fill py-3 pl-10\n        pr-3 placeholder:italic placeholder:text-opacity-75 \n        focus:border-skin-accent focus:outline-none",
        placeholder: "Search for anything...",
        type: "text",
        name: "search",
        value: inputVal,
        onChange: handleChange,
        autoComplete: "off",
        autoFocus: true,
        ref: inputRef
      })]
    }), inputVal.length > 1 && /* @__PURE__ */ jsxs("div", {
      className: "mt-8",
      children: ["Found ", searchResults?.length, searchResults?.length && searchResults?.length === 1 ? " result" : " results", " ", "for '", inputVal, "'"]
    }), /* @__PURE__ */ jsx("ul", {
      children: searchResults && searchResults.map(({
        item,
        refIndex
      }) => /* @__PURE__ */ jsx(Card, {
        href: `/posts/${slugify(item.data)}`,
        frontmatter: item.data
      }, `${refIndex}-${slugify(item.data)}`))
    })]
  });
}
__astro_tag_component__(SearchBar, "@astrojs/react");

const $$Astro$8 = createAstro("https://www.mikowl.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Search;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const searchList = posts.map(({ data }) => ({
    title: data.title,
    description: data.description,
    data
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "activeNav": "search" })}
	${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Search", "pageDesc": "Search any article ..." }, { "default": ($$result3) => renderTemplate`
		${renderComponent($$result3, "Search", SearchBar, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })}
	` })}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/search.astro");

const $$file$5 = "/Users/melias/Sites/mikowl-ap/src/pages/search.astro";
const $$url$5 = "/search";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

let idCounter = 0;
const useUniqueId = (prefix = "id") => {
  const idRef = useRef(`${prefix}-${++idCounter}`);
  return idRef.current;
};
__astro_tag_component__(useUniqueId, "@astrojs/react");

const Tooltip = ({
  content,
  children
}) => {
  const [show, setShow] = useState(false);
  const tooltipId = useUniqueId("tooltip");
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };
  const handleFocus = () => {
    setShow(true);
  };
  const handleBlur = () => {
    setShow(false);
  };
  return /* @__PURE__ */ jsxs("span", {
    className: "tooltip-container",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    tabIndex: 0,
    "aria-describedby": tooltipId,
    children: [children, show && /* @__PURE__ */ jsx("span", {
      className: "tooltip-content",
      id: tooltipId,
      role: "tooltip",
      children: content
    })]
  });
};
__astro_tag_component__(Tooltip, "@astrojs/react");

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../AboutLayout.e8829994.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/AboutLayout.astro",
  "title": "About"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "software",
    "text": "Software"
  }, {
    "depth": 3,
    "slug": "hardware",
    "text": "Hardware"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode("img", {
      class: "w-[26%] float-right ml-5 mt-1 scale-x-[-1]",
      src: "/img/me-avatar-wave.png",
      alt: "Michael Elias"
    }), "\n", createVNode(_components.p, {
      children: ["My name is ", createVNode("span", {
        class: "squiggle",
        children: "Michael Elias"
      }), ", I currently reside in California with my lovely wife, 2 beautiful daughters, and a goodest big boi great dane name Kevin."]
    }), "\n", createVNode(_components.p, {
      children: ["I have experience with a large ", createVNode("span", {
        children: createVNode(Tooltip, {
          "client:visible": true,
          content: "['Typescript','React', 'Vue', 'WordPress', 'Next.js', ...]",
          "client:component-path": "/Users/melias/Sites/mikowl-ap/src/components/Tooltip",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: "[array]"
        })
      }), " of technologies but recently have been specializing in Shopify development and headless e\u2011commerce sites. I am currently a senior front end engineer at Nordic Naturals, a large vitamins & supplements company where I help drive the company\u2019s goals and develop new features."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("strong", {
        children: "Things I know and use:"
      }), " Javascript/Typescript, React, Next.js, Gatsby, Tailwind, Figma, Photoshop, GraphQL, working and wrangling API\u2019s of various natures."]
    }), "\n", createVNode("div", {
      class: "flex flex-row gap-5 md:flex-col",
      children: [createVNode("div", {
        class: "basis-1/2",
        children: [createVNode(_components.h3, {
          id: "software",
          children: "Software"
        }), createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://code.visualstudio.com/",
              children: "VS Code"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://www.figma.com/",
              children: "Figma"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://sw.kovidgoyal.net/kitty/",
              children: "Kitty"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://orgmode.org/",
              children: "eMacs org-mode"
            })
          }), "\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://marketplace.visualstudio.com/items?itemName=vscodevim.vim",
              children: "Vim extension"
            })
          }), "\n"]
        })]
      }), createVNode("div", {
        class: "basis-1/2",
        children: [createVNode(_components.h3, {
          id: "hardware",
          children: "Hardware"
        }), createVNode(_components.p, {
          children: "Usually a Macbook Pro or iMac, extra monitor if I\u2019m feeling fancy."
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/about";
const file = "/Users/melias/Sites/mikowl-ap/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/melias/Sites/mikowl-ap/src/pages/about.mdx";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://www.mikowl.com");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Posts;
  const { pageNum, totalPages, posts } = Astro2.props;
  const prev = pageNum > 1 ? "" : "disabled";
  const next = pageNum < totalPages ? "" : "disabled";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}`, "class": "astro-EENKY23Y" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts", "class": "astro-EENKY23Y" })}
	${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted.", "class": "astro-EENKY23Y" }, { "default": ($$result3) => renderTemplate`
		${maybeRenderHead($$result3)}<ul class="posts-list astro-EENKY23Y">
			${posts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data, "class": "astro-EENKY23Y" })}`)}
		</ul>
	` })}

	${totalPages > 1 && renderTemplate`<nav class="pagination-wrapper astro-EENKY23Y" aria-label="Pagination">
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": prev === "disabled", "href": `/posts${pageNum - 1 !== 1 ? "/" + (pageNum - 1) : ""}`, "className": `mr-4 select-none ${prev} astro-EENKY23Y`, "ariaLabel": "Previous" }, { "default": ($$result3) => renderTemplate`
					<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${prev}-svg astro-EENKY23Y`, "class")}>
						<path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" class="astro-EENKY23Y"></path>
					</svg>
					Prev
				` })}
				${renderComponent($$result2, "LinkButton", $$LinkButton, { "disabled": next === "disabled", "href": `/posts/${pageNum + 1}`, "className": `ml-4 select-none ${next} astro-EENKY23Y`, "ariaLabel": "Next" }, { "default": ($$result3) => renderTemplate`
					Next
					<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${next}-svg astro-EENKY23Y`, "class")}>
						<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-EENKY23Y"></path>
					</svg>
				` })}
			</nav>`}${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": totalPages > 1, "class": "astro-EENKY23Y" })}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/layouts/Posts.astro");

const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

const $$Astro$6 = createAstro("https://www.mikowl.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const paginatedPosts = sortedPosts.slice(0, SITE.postPerPage);
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNum": 1, "totalPages": totalPages.length })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/posts/index.astro");

const $$file$4 = "/Users/melias/Sites/mikowl-ap/src/pages/posts/index.astro";
const $$url$4 = "/posts";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://www.mikowl.com");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tag;
  const { name, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li${addAttribute(`inline-block ${size === "sm" ? "my-1 underline-offset-4" : "my-3 mx-1 underline-offset-8"} astro-BLWJYJPT`, "class")}>
	<a${addAttribute(`/tags/${name.toLowerCase()}`, "href")}${addAttribute(`${size === "sm" ? "text-sm" : "text-lg"} pr-2 group astro-BLWJYJPT`, "class")}>
		<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${size === "sm" ? " scale-75" : "scale-110"} astro-BLWJYJPT`, "class")}><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z" class="astro-BLWJYJPT"></path>
		</svg>
		&nbsp;<span class="astro-BLWJYJPT">${name.toLowerCase()}</span>
	</a>
</li>`;
}, "/Users/melias/Sites/mikowl-ap/src/components/Tag.astro");

const $$Astro$4 = createAstro("https://www.mikowl.com");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post } = Astro2.props;
  const { title, author, description, ogImage, pubDatetime, tags } = post.data;
  const { Content } = await post.render();
  const ogUrl = new URL(ogImage ? ogImage : `${title}.png`, Astro2.url.origin).href;
  const titleClass = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "author": author, "description": description, "ogImage": ogUrl, "class": "astro-VJ4TPSPI" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "class": "astro-VJ4TPSPI" })}
	${maybeRenderHead($$result2)}<div class="flex justify-start w-full max-w-4xl px-2 mx-auto astro-VJ4TPSPI">
		<button class="flex mt-8 mb-2 focus-outline hover:opacity-75 astro-VJ4TPSPI" onclick="history.back()">
			<svg xmlns="http://www.w3.org/2000/svg" class="astro-VJ4TPSPI"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" class="astro-VJ4TPSPI"></path>
			</svg><span class="astro-VJ4TPSPI">Go back</span>
		</button>
	</div>
	<main id="main-content"${addAttribute(titleClass + " astro-VJ4TPSPI", "class")}>
		<h1 class="post-title astro-VJ4TPSPI">${title}</h1>
		${renderComponent($$result2, "Datetime", Datetime, { "datetime": pubDatetime, "size": "lg", "className": "my-2 astro-VJ4TPSPI" })}
		<article id="article" role="article" class="max-w-4xl mx-auto mt-8 prose astro-VJ4TPSPI">
			${renderComponent($$result2, "Content", Content, { "class": "astro-VJ4TPSPI" })}
		</article>
		<ul class="tags-container astro-VJ4TPSPI">
			${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "name": tag, "class": "astro-VJ4TPSPI" })}`)}
		</ul>
		<div class="text-center astro-VJ4TPSPI">
			<a type="button" href="/posts" tabindex="0" class="no-underline astro-VJ4TPSPI">
				More Posts
				<svg xmlns="http://www.w3.org/2000/svg" class="astro-J7PV25F6 astro-VJ4TPSPI"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-J7PV25F6 astro-VJ4TPSPI"></path>
				</svg>
</a>
		</div>
		<!-- Next blog post -->

	</main>
	${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-VJ4TPSPI" })}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/layouts/PostDetails.astro");

const $$Astro$3 = createAstro("https://www.mikowl.com");
async function getStaticPaths$2() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: slugify(post.data) },
    props: { post }
  }));
  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) }
  }));
  return [...postResult, ...pagePaths];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const currentPage = slug && !isNaN(Number(slug)) && totalPages.includes(Number(slug)) ? Number(slug) : 0;
  const lastPost = currentPage * SITE.postPerPage;
  const startPost = lastPost - SITE.postPerPage;
  const paginatedPosts = sortedPosts.slice(startPost, lastPost);
  return renderTemplate`${post ? renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post })}` : renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "posts": paginatedPosts, "pageNum": currentPage, "totalPages": totalPages.length })}`}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/posts/[slug].astro");

const $$file$3 = "/Users/melias/Sites/mikowl-ap/src/pages/posts/[slug].astro";
const $$url$3 = "/posts/[slug]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file$3,
	getStaticPaths: getStaticPaths$2,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const getUniqueTags = (posts) => {
  let tags = [];
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  filteredPosts.forEach((post) => {
    tags = [...tags, ...post.data.tags].map((tag) => slugifyStr(tag)).filter(
      (value, index, self) => self.indexOf(value) === index
    );
  });
  return tags;
};

const $$Astro$2 = createAstro("https://www.mikowl.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })}
	${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate`
		${maybeRenderHead($$result3)}<ul>
			${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "name": tag, "size": "lg" })}`)}
		</ul>
	` })}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/tags/index.astro");

const $$file$2 = "/Users/melias/Sites/mikowl-ap/src/pages/tags/index.astro";
const $$url$2 = "/tags";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const getPostsByTag = (posts, tag) => posts.filter((post) => slugifyAll(post.data.tags).includes(tag));

const $$Astro$1 = createAstro("https://www.mikowl.com");
async function getStaticPaths$1() {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.map((tag) => {
    return {
      params: { tag },
      props: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagPosts = getPostsByTag(posts, tag);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag:${tag} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })}
	${renderComponent($$result2, "Main", $$Main, { "pageTitle": `Tag:${tag}`, "pageDesc": `All the articles with the tag "${tag}".` }, { "default": ($$result3) => renderTemplate`
		${maybeRenderHead($$result3)}<ul>
			${tagPosts.map(({ data }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slugify(data)}`, "frontmatter": data })}`)}
		</ul>
	` })}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/tags/[tag].astro");

const $$file$1 = "/Users/melias/Sites/mikowl-ap/src/pages/tags/[tag].astro";
const $$url$1 = "/tags/[tag]";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.mikowl.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found | ${SITE.title}`, "class": "astro-ZETDM5MD" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "class": "astro-ZETDM5MD" })}

	${maybeRenderHead($$result2)}<main id="main-content" class="astro-ZETDM5MD">
		<div class="not-found-wrapper astro-ZETDM5MD">
			<h1 aria-label="404 Not Found" class="astro-ZETDM5MD">404</h1>
			<span aria-hidden="true" class="astro-ZETDM5MD">¯\\_(ツ)_/¯</span>
			<p class="astro-ZETDM5MD">Page Not Found</p>
			${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "className": "my-6 underline decoration-dashed underline-offset-8 text-lg astro-ZETDM5MD" }, { "default": ($$result3) => renderTemplate`
				Go back home
			` })}
		</div>
	</main>

	${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-ZETDM5MD" })}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/pages/404.astro");

const $$file = "/Users/melias/Sites/mikowl-ap/src/pages/404.astro";
const $$url = "/404";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const fetchFonts = async () => {
  const fontFileRegular = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf");
  const fontRegular2 = await fontFileRegular.arrayBuffer();
  const fontFileBold = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf");
  const fontBold2 = await fontFileBold.arrayBuffer();
  return {
    fontRegular: fontRegular2,
    fontBold: fontBold2
  };
};
const {
  fontRegular,
  fontBold
} = await fetchFonts();
const ogImage = (text) => {
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: "#fefbfb",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: [/* @__PURE__ */ jsx("div", {
      style: {
        position: "absolute",
        top: "-1px",
        right: "-1px",
        border: "4px solid #000",
        background: "#ecebeb",
        opacity: "0.9",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        margin: "2.5rem",
        width: "88%",
        height: "80%"
      }
    }), /* @__PURE__ */ jsx("div", {
      style: {
        border: "4px solid #000",
        background: "#fefbfb",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        margin: "2rem",
        width: "88%",
        height: "80%"
      },
      children: /* @__PURE__ */ jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "20px",
          width: "90%",
          height: "90%"
        },
        children: [/* @__PURE__ */ jsx("p", {
          style: {
            fontSize: 72,
            fontWeight: "bold",
            maxHeight: "84%",
            overflow: "hidden"
          },
          children: text
        }), /* @__PURE__ */ jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "8px",
            fontSize: 28
          },
          children: [/* @__PURE__ */ jsxs("span", {
            children: ["by", " ", /* @__PURE__ */ jsx("span", {
              style: {
                color: "transparent"
              },
              children: '"'
            }), /* @__PURE__ */ jsx("span", {
              style: {
                overflow: "hidden",
                fontWeight: "bold"
              },
              children: SITE.author
            })]
          }), /* @__PURE__ */ jsx("span", {
            style: {
              overflow: "hidden",
              fontWeight: "bold"
            },
            children: SITE.title
          })]
        })]
      })
    })]
  });
};
const options = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [{
    name: "Source Code Pro",
    data: fontRegular,
    weight: 400,
    style: "normal"
  }, {
    name: "Source Code Pro",
    data: fontBold,
    weight: 600,
    style: "normal"
  }]
};
const generateOgImage = async (mytext = SITE.title) => {
  const svg = await satori(ogImage(mytext), options);
  {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    console.info("Output PNG Image  :", `${mytext}.png`);
    await writeFile(`./dist/${mytext}.png`, pngBuffer);
  }
  return svg;
};
__astro_tag_component__(generateOgImage, "@astrojs/react");

const get = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle)
});
const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);
function getStaticPaths() {
  return posts.filter(({ data }) => !data.ogImage).map(({ data }) => ({
    params: { ogTitle: data.title }
  }));
}

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get,
	getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, SITE as S, Tooltip as T, _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, $$Breadcrumbs as j, $$Footer as k, $$Layout as l, useUniqueId as u };
