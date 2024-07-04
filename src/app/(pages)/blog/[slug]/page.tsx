import { getPost } from '@/lib/get-posts'
import { PostBody } from '@/components/mdx/post-body';
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}) : Promise<Metadata> {
  const post = await getPost(params.slug)

  // notFound is a Next.js utility
  if (!post) return notFound()
 
    // post.title follwed by 'by Dean Morgan'
  return {
    title: `${post.title} by Dean Morgan`,
    description: post.description,
  }
}


export default async function PostPage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = await getPost(params.slug)
  // notFound is a Next.js utility
  if (!post) return notFound()
  // Pass the post contents to MDX
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Posted on: {formatDate(post?.date ?? "")}</p>
      <PostBody>{post.body}</PostBody>
    </div>
  )
}
