import { Code2, Database, Map, Satellite } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 95 },
    ],
  },
  {
    title: "GIS & Mapping",
    icon: Map,
    skills: [
      { name: "ArcGIS Pro/Desktop", level: 95 },
      { name: "M.App Enterprise", level: 90 },
      { name: "QGIS", level: 85 },
      { name: "Leaflet", level: 90 },
      { name: "Global Mapper", level: 80 },
      { name: "SuperMap", level: 75 },
    ],
  },
  {
    title: "Remote Sensing",
    icon: Satellite,
    skills: [
      { name: "ERDAS Imagine", level: 88 },
      { name: "ENVI", level: 85 },
      { name: "SNAP", level: 80 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "Microsoft SQL Server", level: 88 },
      { name: "Git", level: 85 },
      { name: "Visual Studio Code", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="section-title mb-0">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
