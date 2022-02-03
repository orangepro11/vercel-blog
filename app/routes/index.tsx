import * as firstPost from './blog/first-post.mdx';
import * as secondPost from './blog/second-post.mdx';
import { LoaderFunction, useLoaderData, Link } from 'remix'

import BlogCard, { BlogCardProps } from '~/components/blog-card/blog-card';

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod?.attributes?.meta,
  }
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(firstPost),
    postFromModule(secondPost),
  ]
}


export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center">
        <h2 className="text-4xl leading-10 tracking-tight font-extrabold text-gray-900">From The Blog</h2>
        <p className="mt-5 text-xl leading-7 text-gray-500">
          流动的音符拨动心弦
        </p>
      </div>
      {
        posts.map((post: BlogCardProps) => {
          return (
            <div key={post.slug} className="mt-12 grid gap-5 max-w-lg mx-auto">
              <Link to={`/blog/${post.slug}`}>
                <BlogCard {...post} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}