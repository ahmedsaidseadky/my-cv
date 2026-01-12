import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior GIS & Geospatial Solutions Engineer",
    company: "Edge-Pro Company",
    period: "January 2024 - Present",
    highlights: [
      "Leading implementation of advanced geospatial solutions for 15+ governmental and private sector clients",
      "Developing full-stack GIS web applications using Leaflet, PostgreSQL, and Python with 99.9% uptime",
      "Integrating remote sensing data with GIS platforms for enhanced spatial analysis",
      "Automating data workflows and spatial ETL processes, reducing processing time by 60%",
    ],
  },
  {
    title: "GIS Team Leader",
    company: "Edge-Pro Company",
    period: "January 2020 - January 2024",
    highlights: [
      "Led GIS department and supervised 8+ team members across multiple large-scale projects",
      "Managed project coordination and stakeholder communication for 20+ concurrent projects",
      "Delivered customized GIS dashboards, spatial databases, and web/mobile solutions",
      "Implemented quality assurance processes improving project delivery time by 40%",
    ],
  },
  {
    title: "GIS Specialist",
    company: "Edge-Pro Company",
    period: "March 2019 - January 2020",
    highlights: [
      "Contributed to spatial data analysis and cartographic outputs for multiple projects",
      "Developed GIS layers and mapping standards",
      "Performed quality control and data validation for spatial datasets",
    ],
  },
  {
    title: "Remote Sensing Specialist",
    company: "Edge-Pro Company",
    period: "March 2018 - October 2018",
    highlights: [
      "Performed satellite image classification and land use analysis",
      "Conducted change detection analysis for urban planning applications",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="section-title mb-0">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 glow-effect" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div 
                    className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="text-accent mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
