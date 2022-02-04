import * as firstPost from './blog/first-post.mdx';
import * as secondPost from './blog/second-post.mdx';
import { LoaderFunction, useLoaderData, Link } from 'remix'

import BlogCard, { BlogCardProps } from '~/components/blog-card/blog-card';

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod?.attributes?.meta,
    tags: (mod?.attributes?.meta?.tags || "").split(',')
  }
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(firstPost),
    postFromModule(secondPost),
  ].sort((a: any, b: any) => b.sort - a.sort)
}


export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div className="bg-gray-50 py-16 px-4 h-screen">
      <div className="text-center">
        <h2 className="text-4xl leading-10 tracking-tight font-extrabold text-gray-900">From The Blog</h2>
        <p className="mt-5 text-xl leading-7 text-gray-500">
          流动的音符拨动心弦
        </p>
      </div>
      <div className="grid mx-auto max-w-lg lg:max-w-none gap-5 grid-cols-1 lg:grid-cols-3 pb-4 lg:px-8">
        {
          posts.map((post: BlogCardProps) => {
            return (
              <div key={post.slug} className="mt-12">
                <Link to={`/blog/${post.slug}`}>
                  <BlogCard {...post} />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}