"use client";
import ProjectCard from "./ProjectCard";

const resourceSections = [
  {
    id: "SaaS",
    title: "SaaS",
    items: [
      {
        image: "/KweliVote.png",
        title: "KweliVote",
        url: "https://kwelivote.com",
      },
    ],
  },
];

export default function Resources() {
  return (
    <section className="w-full border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="text-center text-2xl font-semibold mb-8">Resources</div>
      <div className="max-w-7xl mx-auto px-4">
        {resourceSections.map((section, sectionIdx) => (
          <div
            key={`section-${sectionIdx}`}
            id={section.id}
            className="mb-12 scroll-mt-24"
          >
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
              {section.title}
            </h3>
            {section.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, idx) => {
                  return (
                    <ProjectCard
                      key={`${section.title}-${item.title}-${idx}`}
                      idx={idx}
                      {...item}
                      url={item.url}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center text-gray-500 italic">
                Coming soon...
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
