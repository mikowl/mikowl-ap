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
		<li className="my-10 flex flex-wrap sm:flex-nowrap items-center gap-8">
			{postThumb ? (
				<div className="post-thumb basis-full sm:basis-1/4">
					<img src={postThumb} className="rounded-md max-w-sm w-full" />
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
						<h2 className="mb-0 text-lg font-medium border-none text-skin-accent hover:underline">
							{title}
						</h2>
					) : (
						<h3 className="text-lg font-medium hover:underline">{title}</h3>
					)}
				</a>
				<Datetime datetime={pubDatetime} />
				<p>{description}</p>
			</div>
		</li>
	);
}
