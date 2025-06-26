import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import road from "@/public/posts/ctf/thumbnails/road.png";
import valley from "@/public/posts/ctf/thumbnails/valley.png";

const ctfPosts: PostCardInfo[] = [
  {
    title: "Road (TryHackMe)",
    image: road,
    desc: "A TryHackMe CTF.",
    project_page_link: "/thm-road",
    tag: TAGS.CTF,
    date: new Date("2025-06-17"),
  },
  {
    title: "Valley (TryHackMe)",
    image: valley,
    desc: "A TryHackMe CTF.",
    project_page_link: "/thm-valley",
    tag: TAGS.CTF,
    date: new Date("2025-06-26"),
  },
].sort((a, b) => (a.date < b.date ? 1 : -1));
export default ctfPosts;
