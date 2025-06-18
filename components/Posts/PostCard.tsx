import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tag, { TAGS } from "@/components/Posts/Tag";

export interface PostCardInfo {
  title: string;
  project_page_link: string;
  image: StaticImageData;
  desc: string;
  tag: TAGS;
  date: Date;
}

const PostCard: React.FC<{ postcard: PostCardInfo; displayTag: boolean }> = ({
  postcard,
  displayTag,
}) => {
  let link_to_post = "";

  switch (postcard.tag) {
    case TAGS.BLOG:
      link_to_post += "/blog";
      break;
    case TAGS.CTF:
      link_to_post += "/ctf";
      break;
    case TAGS.PROJECTS:
      link_to_post += "/projects";
      break;
    default:
      link_to_post += "/";
  }

  link_to_post += postcard.project_page_link;

  return (
    <Link
      style={{ maxWidth: 432 }}
      href={link_to_post}
      className="flex flex-col gap-4 hover:cursor-pointer transition-colors duration-150 hover:hover:bg-secondary-foreground/5 p-4 w-full"
    >
      <Image
        src={postcard.image}
        alt={postcard.title}
        width={432}
        height={480}
        className="aspect-square object-cover w-full"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-start justify-between">
            <h3 className="text-2xl font-semibold ">{postcard.title}</h3>
            {displayTag ? (
              <div className="">
                <Tag tag_for_post={postcard.tag} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex w-full">
            <p className="text-sm sm:text-sm transition italic font-semibold text-secondary">
              {postcard.date.toLocaleDateString()}
            </p>
          </div>
        </div>
        {postcard.desc && <p>{postcard.desc}</p>}
      </div>
    </Link>
  );
};

export default PostCard;
