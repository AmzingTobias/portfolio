import AboutMe from "@/components/sections/AboutMe";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <>
      <Section id="about-me" title="About Me" children={<AboutMe />} />
      <Section
        id="certifications"
        title="Certifications"
        children={<Certifications />}
      />
      <Section id="experience" title="Experience" children={<Experience />} />
      <Section id="education" title="Education" children={<Education />} />
    </>
  );
}
