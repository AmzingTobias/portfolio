import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type TProjectLinkBtns = {
  display: string;
  link: string;
};

export interface IProjectVisitBtns {
  visit_links?: TProjectLinkBtns[];
  github_links?: TProjectLinkBtns[];
}

const ProjectVisitBtns: React.FC<IProjectVisitBtns> = ({
  visit_links,
  github_links,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-center">
      {visit_links?.map((link_info, index) => (
        <Link
          key={index}
          className="w-full"
          target="_blank"
          prefetch={false}
          href={link_info.link}
        >
          <Button className="w-full font-semibold text-base min-h-12 flex flex-row gap-0">
            <FiExternalLink />
            &nbsp;{link_info.display}
          </Button>
        </Link>
      ))}
      {github_links?.map((link_info, index) => (
        <Link
          key={index}
          className="w-full"
          target="_blank"
          prefetch={false}
          href={link_info.link}
        >
          <Button
            className="w-full font-semibold text-base min-h-12 flex flex-row gap-0"
            variant={"secondary"}
          >
            <AiFillGithub />
            &nbsp;{link_info.display}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ProjectVisitBtns;
