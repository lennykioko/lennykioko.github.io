import ProjectCard from "./ProjectCard";
interface Project {
  image: string;
  title: string;
  url: string;
}

const projects: Project[] = [
  {
    image: "/bible.png",
    title: "Bible In a Year",
    url: "https://bible-in-a-year.vercel.app/",
  },
];

export default function HobbyProjects() {
  return (
    <section className="w-full border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="text-center text-2xl font-semibold mb-8">
        Hobby Projects
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={`${project.title}-${idx}`}
              idx={idx}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
