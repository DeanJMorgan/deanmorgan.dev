import matter from 'gray-matter'
import path from 'path'
import type { Post } from '@/lib/types'
import fs from 'fs/promises'
import { cache } from 'react'

export const getPosts = cache(async () => {
  // Use path.join to create an absolute path to the posts directory
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const posts = await fs.readdir(postsDirectory)

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = path.join(postsDirectory, file)
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      })
  )
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === slug)
}

export default getPosts
