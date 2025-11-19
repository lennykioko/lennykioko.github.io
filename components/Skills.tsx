import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Trading & Analysis",
    skills: [
      "ICT Concepts",
      "SMC Concepts",
      "TradingView",
      "cTrader",
      "MetaTrader 4 & 5",
      "Pine Script",
      "MQL5",
      "Python",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "NextJS",
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "HTML",
      "CSS",
      "ChakraUI",
      "Styled Components",
      "Figma",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Solidity",
      "NodeJS",
      "ExpressJS",
      "REST APIs",
      "GraphQL",
      "SQL",
      "KQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Django & DRF",
      "Flask",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & Github", "Docker", "VsCode"],
  },
];

export default function Skills() {
  return (
    <section className="w-full flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="p-4 text-center text-2xl font-bold">Skills</div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <Card key={categoryIdx} className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="secondary"
                    className="block text-center py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
