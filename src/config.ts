import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
	website: "https://www.mikowl.com",
	author: "Michael Elias",
	desc: "Full stack front end dev musings",
	title: "Mikowl",
	ogImage: "/assets/logo.png",
	lightAndDarkMode: false,
	postPerPage: 10,
};

export const LOGO_IMAGE = {
	enable: true,
	svg: false,
	width: 244,
	height: 255,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/mikowl",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "Facebook",
		href: "",
		linkTitle: `${SITE.title} on Facebook`,
		active: false,
	},
	{
		name: "Instagram",
		href: "",
		linkTitle: `${SITE.title} on Instagram`,
		active: false,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/michael-elias-047b2578/",
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: "Mail",
		href: "mailto:michael@mikowl.com",
		linkTitle: `Send an email to ${SITE.title}`,
		active: true,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/mikowl",
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
	{
		name: "Twitch",
		href: "",
		linkTitle: `${SITE.title} on Twitch`,
		active: false,
	},
	{
		name: "YouTube",
		href: "",
		linkTitle: `${SITE.title} on YouTube`,
		active: false,
	},
	{
		name: "WhatsApp",
		href: "",
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false,
	},
	{
		name: "Snapchat",
		href: "",
		linkTitle: `${SITE.title} on Snapchat`,
		active: false,
	},
	{
		name: "Pinterest",
		href: "",
		linkTitle: `${SITE.title} on Pinterest`,
		active: false,
	},
	{
		name: "TikTok",
		href: "",
		linkTitle: `${SITE.title} on TikTok`,
		active: false,
	},
	{
		name: "CodePen",
		href: "",
		linkTitle: `${SITE.title} on CodePen`,
		active: false,
	},
	{
		name: "Discord",
		href: "",
		linkTitle: `${SITE.title} on Discord`,
		active: false,
	},
	{
		name: "GitLab",
		href: "",
		linkTitle: `${SITE.title} on GitLab`,
		active: false,
	},
	{
		name: "Reddit",
		href: "",
		linkTitle: `${SITE.title} on Reddit`,
		active: false,
	},
	{
		name: "Skype",
		href: "",
		linkTitle: `${SITE.title} on Skype`,
		active: false,
	},
	{
		name: "Steam",
		href: "",
		linkTitle: `${SITE.title} on Steam`,
		active: false,
	},
	{
		name: "Telegram",
		href: "",
		linkTitle: `${SITE.title} on Telegram`,
		active: false,
	},
	{
		name: "Mastodon",
		href: "",
		linkTitle: `${SITE.title} on Mastodon`,
		active: false,
	},
];
