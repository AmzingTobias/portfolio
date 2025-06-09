import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import pricescraper from "@/public/posts/projects/thumbnails/pricescraper.png";

const projectPosts: PostCardInfo[] = [
  {
    title: "PriceScraper",
    image: pricescraper,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi exercitationem assumenda maxime non facilis molestiae reiciendis alias dolor minus libero tenetur magni provident quisquam commodi repellendus, natus iusto eaque.",
    project_page_link: "/posts/ctf/test",
    tag: TAGS.PROJECTS,
    date: new Date("2025-06-07"),
  },
];

export default projectPosts;
