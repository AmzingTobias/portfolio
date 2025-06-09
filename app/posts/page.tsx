import { PostCardInfo } from "@/components/Posts/PostCard";
import PostDisplay from "@/app/posts/PostDisplay";
import ctfPosts from "@/app/posts/ctf/ctf-posts";
import projectPosts from "@/app/posts/projects/project-posts";
import blogPosts from "@/app/posts//blog/blog-posts";

const postcard_raw: PostCardInfo[] = [ctfPosts, projectPosts, blogPosts].flat();

const dublicateItems = (arr: any[], numberOfRepetitions: number) =>
  arr.flatMap((i) => Array.from({ length: numberOfRepetitions }).fill(i));

const defaultPostCards = dublicateItems(postcard_raw, 25) as PostCardInfo[];

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex flex-col w-full items-center justify-items-center min-h-screen gap-16">
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl">
          <PostDisplay posts={defaultPostCards} tagsDisabled={false} />
        </div>
      </div>
    </main>
  );
}
