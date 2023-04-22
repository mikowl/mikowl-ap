import { b as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as renderSlot } from './astro.220171ad.mjs';
import { $ as $$Header, j as $$Breadcrumbs, k as $$Footer, S as SITE, l as $$Layout } from './pages/all.ea9e81c7.mjs';
/* empty css                          */import 'html-escaper';
/* empty css                          */import '@astrojs/rss';
import 'fuse.js';
import 'react';
import 'react/jsx-runtime';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                           */import 'github-slugger';
/* empty css                          *//* empty css                        */import 'satori';
import 'node:fs/promises';
import '@resvg/resvg-js';

const $$Astro = createAstro("https://www.mikowl.com");
const $$AboutLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}`, "class": "astro-D7MPL6VH" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, { "activeNav": "about", "class": "astro-D7MPL6VH" })}
	${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-D7MPL6VH" })}
	${maybeRenderHead($$result2)}<main id="main-content" class="astro-D7MPL6VH">
		<section id="about" class="max-w-4xl mb-28 astro-D7MPL6VH">
			<h1 class="text-2xl tracking-wider sm:text-3xl astro-D7MPL6VH">${frontmatter.title}</h1>
			${renderSlot($$result2, $$slots["default"])}
		</section>
	</main>
	${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-D7MPL6VH" })}
` })}`;
}, "/Users/melias/Sites/mikowl-ap/src/layouts/AboutLayout.astro");

const $$file = "/Users/melias/Sites/mikowl-ap/src/layouts/AboutLayout.astro";
const $$url = undefined;

export { $$AboutLayout as default, $$file as file, $$url as url };
