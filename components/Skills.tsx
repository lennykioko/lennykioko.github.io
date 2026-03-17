import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "TypeScript"],
  },
  {
    title: "Backend & Languages",
    skills: ["Python", "Node.js", "Pine Script", "MQL4 & MQL5"],
  },
  {
    title: "Platforms & Tools",
    skills: ["TradingView", "MetaTrader 4", "MetaTrader 5", "cTrader", "VsCode"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git & GitHub", "CI/CD", "VPS"],
  },
];

export default function Skills() {
  return (
    <section className="w-full flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="p-4 text-center text-2xl font-semibold">Skills</div>

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
