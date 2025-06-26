import PostDisplay from "@/app/posts/PostDisplay";
import blogPosts from "@/app/blog/blog-posts";

export default function Home() {
  return (
    <PostDisplay
      pageTitle="Blogs"
      posts={blogPosts}
      tagsDisabled={true}
      typeBeingSearched="Blogs"
    />
  );
}
