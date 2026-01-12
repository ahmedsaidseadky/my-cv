import { useState } from "react";
import { Award, GraduationCap, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    title: "Advanced GIS (GIS2)",
    issuer: "NARSS",
    //icon: "🗺️",
    file: "/certificited/advanced gis.pdf",
    date: "",
  },
  {
    title: "Network Analysis",
    issuer: "NARSS",
    // icon: "🌐",
    file: "/certificited/network analysis.pdf",
    date: "",
  },
  {
    title: "CSS & HTML",
    issuer: "Mahara-Tech",
    // icon: "🎨",
    file: "/certificited/Course_Certificate_En (html&css).pdf",
    date: "September 2025",
  },
  {
    title: "Javascript",
    issuer: "Mahara-Tech",
    // icon: "🟨",
    file: "/certificited/Course_Certificate_En (javascript).pdf",
    date: "October 2025",
  },
  {
    title: "Python Programming Basics",
    issuer: "Mahara-Tech",
    // icon: "🐍",
    file: "/certificited/Course_Certificate_En (python).pdf",
    date: "October 2025",
  },
  {
    title: "Database Fundamentals",
    issuer: "Mahara-Tech",
    // icon: "💻",
    file: "/certificited/Database Fundamentals_En.pdf",
    date: "September 2025",
  },
];


const education = {
  degree: "Bachelor of Science in Geographic Information Systems",
  institution: "Faculty of Arts, Zagazig University",
  period: "September 2013 - April 2017",
  grade: "Good",
};

const CertificationsSection = () => {
  const [popupFile, setPopupFile] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container relative z-10 px-4 md:px-6">
        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="section-title mb-0">Education</h2>
          </div>

          <div className="glass-card p-8 rounded-xl max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-accent font-medium mb-2">{education.institution}</p>
            <p className="text-muted-foreground mb-4">{education.period}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Grade: {education.grade}</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="section-title mb-0">Certifications & Training</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setPopupFile(cert.file)}
              >
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <CardTitle className="text-base">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal PDF */}
        {popupFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative w-full max-w-3xl h-[90vh] bg-white rounded-lg shadow-lg">
              <button
                onClick={() => setPopupFile(null)}
                className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 z-50"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={popupFile}
                className="w-full h-full rounded-lg"
                title="Certificate PDF"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
