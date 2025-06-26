import { PostCardInfo } from "@/components/Posts/PostCard";
import PostDisplay from "@/app/posts/PostDisplay";
import ctfPosts from "@/app/ctf/ctf-posts";
import projectPosts from "@/app/projects/project-posts";
import blogPosts from "@/app/blog/blog-posts";

const posts: PostCardInfo[] = [ctfPosts, projectPosts, blogPosts]
  .flat()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export default function Home() {
  return (
    <PostDisplay posts={posts} tagsDisabled={false} typeBeingSearched="Posts" />
  );
}
