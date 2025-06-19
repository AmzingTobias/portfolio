import { PostCardInfo } from "@/components/Posts/PostCard";
import PostDisplay from "@/app/posts/PostDisplay";
import ctfPosts from "@/app/ctf/ctf-posts";
import projectPosts from "@/app/projects/project-posts";
import blogPosts from "@/app/blog/blog-posts";

const postcard_raw: PostCardInfo[] = [ctfPosts, projectPosts, blogPosts]
  .flat()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const duplicateItems = (arr: any[], numberOfRepetitions: number) =>
  arr.flatMap((i) => Array.from({ length: numberOfRepetitions }).fill(i));

const defaultPostCards = duplicateItems(postcard_raw, 1) as PostCardInfo[];

export default function Home() {
  return <PostDisplay posts={defaultPostCards} tagsDisabled={false} />;
}
