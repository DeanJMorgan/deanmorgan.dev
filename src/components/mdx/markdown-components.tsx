import Link from 'next/link'
import { MDXComponents } from 'mdx/types'
import { MDXImage } from '@/components/mdx/mdx-image'

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
  img: MDXImage as any,
  // any other components you want to use in your markdown
}