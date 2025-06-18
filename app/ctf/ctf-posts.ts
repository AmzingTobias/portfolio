import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import road from "@/public/posts/ctf/thumbnails/road.png";

const ctfPosts: PostCardInfo[] = [
  {
    title: "Road (TryHackMe)",
    image: road,
    desc: "A TryHackMe CTF.",
    project_page_link: "/thm-road",
    tag: TAGS.CTF,
    date: new Date("2025-06-17"),
  },
];

export default ctfPosts;
