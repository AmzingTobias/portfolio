import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Tag, { TAGS } from "@/components/Posts/Tag";

export interface PostCardInfo {
    title: string;
    project_page_link: string;
    image: StaticImageData;
    desc: string;
    tag: TAGS
};

const date = new Date;
console.log(date.toLocaleDateString());

const PostCard: React.FC<PostCardInfo> = ({
    title,
    project_page_link,
    image,
    desc,
    tag
}) => {
    return (
        <div
            style={{ maxWidth: 432 }}
            className="flex flex-col gap-4 hover:cursor-pointer transition-colors duration-150 hover:hover:bg-accent/70 p-4 w-full"
        >
            <Link href={project_page_link}>
                <Image
                    src={image}
                    alt={title}
                    width={432}
                    height={480}
                    className=""
                />
            </Link>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-start justify-between">
                    <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
                    <div className="">
                        <Tag tag_for_post={tag} />
                    </div>
                </div>
                <div className="flex w-full">
                    <small className="flex italic">{date.toLocaleDateString()}</small>
                </div>
                {desc && (
                    <p>{desc}</p>
                )}
            </div>
        </div>
    )
}

export default PostCard;