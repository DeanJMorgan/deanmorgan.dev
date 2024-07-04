import PostList from "@/components/mdx/post-list";

export default function Home() {
  return (
    <div>
      <div className="hero-text">
        <div className="hero-text__primary">Hello</div>
        <div className="hero-text__secondary">Welcome to my site</div>
      </div>
      <h3>Latest Articles</h3>
      <PostList />
    </div>
  );
}
