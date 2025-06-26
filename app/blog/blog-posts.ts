import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import emailMasking from "@/public/posts/blog/thumbnails/email-masking.jpg";
import oscp from "@/public/posts/blog/thumbnails/oscp.png";

const blogPosts: PostCardInfo[] = [
  {
    title: "My experience passing OSCP",
    image: oscp,
    desc: "My experience learning all the content required for the OSCP exam, what I did outside of the Offsec course content to prepare, and some small tips to help others planning to take the exam.",
    project_page_link: "/oscp-experience",
    tag: TAGS.BLOG,
    date: new Date("2025-06-22"),
  },
  // {
  //   title: "Why you should be using email address aliases",
  //   image: emailMasking,
  //   desc: "A short post on why I recommend people use email address aliases.",
  //   project_page_link: "/email-aliases",
  //   tag: TAGS.BLOG,
  //   date: new Date("2025-06-16"),
  // },
].sort((a, b) => (a.date < b.date ? 1 : -1));
export default blogPosts;
