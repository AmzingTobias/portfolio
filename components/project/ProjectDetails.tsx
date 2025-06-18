export type TProjectDetails = string | string[];

const ProjectDetails: React.FC<{ details: TProjectDetails[] }> = ({
  details,
}) => {
  return (
    <div>
      {details.map((paragraph, index) =>
        typeof paragraph === "string" ? (
          <p className={`${index === 0 ? "mt-0" : "mt-5"}`} key={index}>
            {paragraph}
          </p>
        ) : (
          paragraph.map((point, index) => (
            <ul key={index} className="list-disc ml-8 details-inner">
              <li key={index} className="details-inner">
                {point}
              </li>
            </ul>
          ))
        )
      )}
    </div>
  );
};

export default ProjectDetails;
