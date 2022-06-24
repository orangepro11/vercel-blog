import * as MC from './blog/minecraft-server.mdx';
import * as ST from './blog/starve-together.mdx';
import { LoaderFunction, useLoaderData, Link } from 'remix'

function postFromModule(mod: any) {
	return {
		slug: mod.filename.replace(/\.mdx?$/, ''),
		...mod?.attributes?.meta,
		tags: (mod?.attributes?.tags || "").split(',')
	}
}

export const loader: LoaderFunction = () => {
	return [
		postFromModule(MC),
		postFromModule(ST),
	]
}


export default function BlogIndex() {
	const posts = useLoaderData();
	return (
		<div>
			<h2>文章列表</h2>
			<ul>
				{posts.map((post: any) => (
					<li key={post.slug}>
						<Link to={`/blog/${post.slug}`}>
							{post.title}
						</Link>

						{post.description ? (
							<p className="m-0 lg:m-0">{post.description}</p>
						) : null}
					</li>
				))}
			</ul>
		</div>
	)
}