import { PostCardInfo } from "@/components/Posts/PostCard";
import { TAGS } from "@/components/Posts/Tag";
import pricescraper from "@/public/posts/projects/thumbnails/pricescraper.png";

const projectPosts: PostCardInfo[] = [
  {
    title: "PriceScraper",
    image: pricescraper,
    desc: "My price scraping application, targeted at third party game key distributors. It can monitor the history of prices and send notifications to users via Discord Webhooks when prices change.",
    project_page_link: "/pricescraper",
    tag: TAGS.PROJECTS,
    date: new Date("2025-06-07"),
  },
].sort((a, b) => (a.date < b.date ? 1 : -1));
export default projectPosts;
