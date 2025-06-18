import ProjectDetails, {
  TProjectDetails,
} from "@/components/project/ProjectDetails";
import ProjectImages, {
  IProjectImageProps,
} from "@/components/project/ProjectImages";
import ProjectVisitBtns, {
  IProjectVisitBtns,
} from "@/components/project/ProjectVisitBtns";

export type ProjectInfo = {
  name: string;
  details: TProjectDetails[];
  images?: IProjectImageProps;
  btns: IProjectVisitBtns;
  use_row: boolean;
};

const Project: React.FC<{ project: ProjectInfo }> = ({ project }) => {
  return (
    <div
      className={`flex flex-col gap-8 ${project.use_row ? "2xl:flex-row" : ""}`}
    >
      {project.images !== undefined ? (
        <div className="flex flex-row justify-center">
          <div
            className={`w-full max-w-3xl m-2 flex-auto justify-center align-middle`}
          >
            <ProjectImages {...project.images} />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col w-full justify-center m-2 flex-shrink">
        <ProjectDetails details={project.details} />
      </div>
      <div className="w-full flex justify-center 2xl:flex-row">
        <ProjectVisitBtns
          visit_links={project.btns.visit_links}
          github_links={project.btns.github_links}
        />
      </div>
    </div>
  );
};

export default Project;
