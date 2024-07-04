import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx/markdown-components'

export function PostBody({ children }: { children: string }) {
  return (
    <div className="post-body max-w-prose">
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
          },
        }}
        components={mdxComponents}
      />
    </div>
  )
}