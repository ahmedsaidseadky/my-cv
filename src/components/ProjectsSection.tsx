import { FolderGit2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Digital Transformation Project (Awqaf)",
    client: "Ministry of Awqaf",
    period: "2024 - 2026",
    description: "Contributed to building business applications for the Real Estate Ownership, Projects, Agricultural, and Legal Affairs administrations.",
    technologies: ["M.App Enterprise", "PostgreSQL/PostGIS", "Business Apps"],
  },
  {
    title: "Encroachment Monitoring & Real Estate Reports Center",
    client: "State Properties Authority (KSA)",
    period: "2023",
    description: "Periodic monitoring system with automatic change detection, dashboards, field-report registration, and notification workflows to governorates.",
    technologies: ["Hexagon Geospatial", "SQL Server", "Dashboards"],
  },
  {
    title: "Digital Elevation Models (DEM) Production",
    client: "Sudan",
    period: "2022",
    description: "Produced DEMs from very-high-resolution satellite imagery using stereo-vision technology; extracted building heights and generated slope maps for road and pipeline planning.",
    technologies: ["Stereo-Vision", "Satellite Imagery", "DEM"],
  },
  {
    title: "Crisis & Disaster Management System",
    client: "Sharkia Governorate",
    period: "January 2022 - March 2022",
    description: "Comprehensive system for managing crisis and disaster response operations with real-time GIS capabilities.",
    technologies: ["M.App Enterprise", "PostgreSQL", "Leaflet", "Python"],
  },
  {
    title: "Mechanization of the Provinces",
    client: "Gharbiya Governorate",
    period: "October 2021 - December 2021",
    description: "Interactive dashboards for provincial automation with optimized spatial database structures improving query performance by 50%.",
    technologies: ["GIS Dashboards", "Spatial Database", "Analytics"],
  },
  {
    title: "Project Monitoring System",
    client: "Military Survey Authority",
    period: "August 2021 - November 2021",
    description: "Web-based GIS applications for military operations with secure data access and user authentication systems.",
    technologies: ["Web GIS", "SQL Server", "Security"],
  },
  {
    title: "Crop Classification Application (CCA)",
    client: "Soils, Water and Environment Research Institute (SWERI)",
    period: "Project",
    description: "Full system built on M.App Enterprise and PostgreSQL/PostGIS with role-based apps for project management, crop blocks, spatial layer upload, and crop performance KPI dashboards.",
    technologies: ["M.App Enterprise", "PostgreSQL/PostGIS", "KPI Dashboards"],
  },
  {
    title: "Electronic System for State Assets & Property Management",
    client: "Administrative Control Authority",
    period: "Project",
    description: "Spatial-dimension workflow (audit, correction, approval), mobile location apps, shapefile handling, and KPI dashboards for contracts, encroachments, debts, and collections.",
    technologies: ["M.App Enterprise", "PostgreSQL/PostGIS", "Mobile GIS"],
  },
  {
    title: "RSC Field Survey System",
    client: "Project",
    period: "Project",
    description: "Role-based apps for survey requests, automatic distribution to survey teams, dual survey review, certificate issuance, financial tracking, and complaints handling.",
    technologies: ["M.App Enterprise", "PostgreSQL/PostGIS", "Field Survey"],
  },
  {
    title: "Field Survey",
    client: "Motobas, Kafr El Sheikh",
    period: "Field Project",
    description: "On-site field inventory of agricultural areas, recording land areas and owner details, with data collected and verified for the spatial database.",
    technologies: ["Field Survey", "Data Collection", "Spatial Database"],
  },
  {
    title: "Spatial Changes System",
    client: "Military Survey Authority",
    period: "February 2020 - March 2021",
    description: "Comprehensive GIS web and mobile applications with field-to-central database synchronization achieving 99% accuracy.",
    technologies: ["Mobile GIS", "Database Sync", "Field Operations"],
  },
  {
    title: "Digital Atlas for Qalyoubia Governorate",
    client: "Graduation Project",
    period: "2017",
    description: "Complete digital atlas covering administrative, demographic, and infrastructure data.",
    technologies: ["ArcGIS", "Cartography", "Spatial Analysis"],
  },
  {
    title: "Urban Sprawl Analysis - Zagazig City",
    client: "Academic Research",
    period: "1984-2018",
    description: "Multi-temporal analysis of urban expansion patterns using remote sensing and GIS techniques.",
    technologies: ["Remote Sensing", "Change Detection", "ERDAS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="w-8 h-8 text-primary" />
          <h2 className="section-title mb-0">Key Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {project.client}
                    </CardDescription>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-muted text-muted-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
