import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Web Application Security Testing",
      subtitle: "(DVWA Project)",
      description: "Comprehensive security assessment of vulnerable web applications using various penetration testing tools and techniques.",
      technologies: ["XAMPP", "OWASP-ZAP", "Burp Suite", "MySQL", "Kali Linux", "DVWA"],
      image: "https://i.imgur.com/tgfpFAW.jpeg",
      link: "https://github.com/SURYAMUPPIRI04/DVWA-Web-Security-Project"
    },
    {
      title: "Cybersecurity Case Studies &",
      subtitle: "Captstone Project",
      description: "Advanced cybersecurity research project focusing on threat analysis, vulnerability assessment, and security frameworks implementation.",
      technologies: ["IBM X-Force", "Google Dorking", "Nmap", "OpenVAS", "Kali Linux", "Linux CLI"],
      image: "https://i.imgur.com/Cwo36zW.jpeg",
      link: "https://github.com/SURYAMUPPIRI04/Cybersecurity-Case-Studies-and-Capstone-Project"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="cyber-glow">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cyber-card group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold cyber-glow">{project.title}</h3>
                  <h4 className="text-lg text-primary">{project.subtitle}</h4>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="btn-cyber group w-full">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;