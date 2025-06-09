import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import MrRobot from "@/public/posts/ctf/thumbnails/Mr-Robot.jpeg";

const ctfPosts: PostCardInfo[] = [
  {
    title: "Mr Robot",
    image: MrRobot,
    desc: "A TryHackMe CTF.",
    project_page_link: "/thm-mr-robot",
    tag: TAGS.CTF,
    date: new Date("2024-06-07"),
  },
];

export default ctfPosts;
