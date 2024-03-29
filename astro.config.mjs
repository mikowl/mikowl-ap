import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import remarkCodeTitles from "remark-code-titles";

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	integrations: [
		mdx({
			drafts: true,
		}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		react({
			experimentalReactChildren: true,
		}),
		sitemap(),
		icon(),
	],
	markdown: {
		remarkPlugins: [
			remarkCodeTitles,
			remarkToc,
			[
				remarkCollapse,
				{
					test: "Table of contents",
				},
			],
		],
		shikiConfig: {
			theme: "poimandres",
			langs: ["js", "jsx", "tsx", "ts", "html", "css", "astro"],
			wrap: false,
		},
		extendDefaultPlugins: true,
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
