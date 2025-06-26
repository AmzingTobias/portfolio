import PostDisplay from "@/app/posts/PostDisplay";
import ctfPosts from "@/app/ctf/ctf-posts";

export default function Home() {
  return (
    <PostDisplay
      pageTitle="CTF Walkthroughs"
      posts={ctfPosts}
      tagsDisabled={true}
      typeBeingSearched="CTFs"
    />
  );
}
