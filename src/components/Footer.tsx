import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Ahmed Said Seadky</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Senior GIS & Geospatial Solutions Engineer
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:ahmedsaid123423@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              Email
            </a>
            <a 
              href="tel:+201118119481"
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              Phone
            </a>
            <a 
              href="https://linkedin.com/in/ahmed-said-seadky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-primary transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:border-primary transition-colors text-sm"
            >
              <Github className="w-4 h-4 text-primary" />
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Said Seadky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
