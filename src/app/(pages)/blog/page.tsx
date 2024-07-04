import PostList from "@/components/mdx/post-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles by Dean Morgan - Web Developer and e-Commerce Specialist",
  description: "Hi there, welcome to my site. I'm a web developer and e-commerce specialist based in the UK.",
};

export default function Blog() {
  return (
    <div className="max-w-prose">
      <h1>Articles</h1>
      <PostList />
    </div>
  );
}
