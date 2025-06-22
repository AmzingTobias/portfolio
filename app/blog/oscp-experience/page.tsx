import OSCPExperience from "@/components/blogs/OSCPExperience";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <Section
      id=""
      title="My Experience Passing OSCP"
      children={<OSCPExperience />}
    />
  );
}
