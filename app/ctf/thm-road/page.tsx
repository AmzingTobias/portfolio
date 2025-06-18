import RoadWalkthrough from "@/components/ctf-walkthroughs/Road";
import Section from "@/components/sections/Section";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="flex flex-col w-full items-center justify-items-center min-h-screen gap-16">
        <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl">
          <div className="w-full flex flex-col gap-8 max-w-full">
            <Section
              id=""
              title="Road Walkthrough (TryHackMe)"
              children={<RoadWalkthrough />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
