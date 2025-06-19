import PostDisplay from "@/app/posts/PostDisplay";
import projectPosts from "@/app/projects/project-posts";

export default function Home() {
  return (
    <PostDisplay
      pageTitle="Projects"
      posts={projectPosts}
      tagsDisabled={true}
    />
  );
}
