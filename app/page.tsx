import AboutMe from "@/components/sections/AboutMe";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] items-center sm:items-start">
      <div className="flex flex-col w-full items-center justify-items-center min-h-screen gap-16">
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl flex flex-col gap-10">
          <Section id="about-me" title="About Me" children={<AboutMe />} />
          <Section
            id="experience"
            title="Experience"
            children={<Experience />}
          />
          <Section
            id="certifications"
            title="Certifications"
            children={<Certifications />}
          />
          <Section id="education" title="Education" children={<Education />} />
        </div>
      </div>
    </main>
  );
}
