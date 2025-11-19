"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";

interface Project {
  image: string;
  title: string;
  website: string;
  code: string;
}

const projects: Project[] = [
  {
    image: "/bible.png",
    title: "Bible In a Year",
    website: "https://bible-in-a-year.vercel.app/",
    code: "https://github.com/lennykioko/bible-in-a-year",
  },
];

export default function HobbyProjects() {
  const [showCode, setShowCode] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const demo = searchParams.get("demo");
    setShowCode(!!demo);
  }, [searchParams]);

  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 p-4">
      <div className="p-4 text-center text-2xl font-bold">Hobby Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project, idx) => (
          <ProjectCard
            key={`${project.title}-${idx}`}
            idx={idx}
            {...project}
            showCode={showCode}
          />
        ))}
      </div>
    </section>
  );
}
