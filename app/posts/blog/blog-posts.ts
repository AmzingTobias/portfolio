import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import emailMasking from "@/public/posts/blog/thumbnails/email-masking.jpg";

const blogPosts: PostCardInfo[] = [
  {
    title: "Why you need to be using email aliases",
    image: emailMasking,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi exercitationem assumenda maxime non facilis molestiae reiciendis alias dolor minus libero tenetur magni provident quisquam commodi repellendus, natus iusto eaque.",
    project_page_link: "/posts/ctf/test",
    tag: TAGS.BLOG,
    date: new Date("2025-06-07"),
  },
];

export default blogPosts;
