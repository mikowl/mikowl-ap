import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
	href?: string;
	frontmatter: BlogFrontmatter;
	secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
	const { title, pubDatetime, description, postThumb } = frontmatter;
	return (
		<li className="my-10 flex flex-wrap items-center gap-8 sm:flex-nowrap">
			{postThumb ? (
				<div className="post-thumb basis-full sm:basis-1/4">
					<a href={href}>
						<img
							src={postThumb}
							className="w-full max-w-sm rounded-md"
							alt={title}
						/>
					</a>
				</div>
			) : (
				<div></div>
			)}
			<div className="post-content basis-full sm:basis-3/4">
				<a
					href={href}
					className="inline-block text-lg font-medium text-skin-accent focus-visible:no-underline focus-visible:underline-offset-0"
				>
					{secHeading ? (
						<h2 className="mb-0 border-none text-lg font-medium text-skin-accent hover:underline">
							{title}
						</h2>
					) : (
						<h3
							style={{ textDecorationColor: "rgb(59 130 246 / 0.15)" }}
							className="decoration-inherit text-transparent inline-block bg-[linear-gradient(to_right,#4eade8_0%,#65beb3_60%,#4eade8_100%)] bg-clip-text text-lg font-medium decoration-wavy underline-offset-4 subpixel-antialiased hover:underline"
						>
							{title}
						</h3>
					)}
				</a>
				<Datetime datetime={pubDatetime} />
				<p>{description}</p>
			</div>
		</li>
	);
}
