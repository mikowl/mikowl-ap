import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import { SITE } from "./src/config";

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
		react(),
		sitemap(),
		image(),
	],
	markdown: {
		remarkPlugins: [
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
			langs: ['js', 'ts', 'html', 'css', 'astro'],
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
