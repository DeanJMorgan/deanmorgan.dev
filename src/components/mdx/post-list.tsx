import getPosts from "@/lib/get-posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function PostList() {
  const posts = await getPosts()

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }


  
  return (
    <div className="max-w-prose">
      <ul>
        {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(post => post?.slug !== undefined).map((post) => (
          <li key={post?.slug}>
            <Link href={`/blog/${post?.slug ?? ""}`}>{post?.title}</Link> - {formatDate(post?.date ?? "")}
          </li>
        ))}
      </ul>
    </div>
  );
}