import Project, { ProjectInfo } from "@/components/project/Project";
import Section from "@/components/sections/Section";

const ProjectDisplay: React.FC<{ project: ProjectInfo; datePosted: Date }> = ({
  project,
  datePosted,
}) => {
  return (
    <Section
      id=""
      title={project.name}
      children={<Project project={project} />}
      datePosted={datePosted}
    />
  );
};

export default ProjectDisplay;
