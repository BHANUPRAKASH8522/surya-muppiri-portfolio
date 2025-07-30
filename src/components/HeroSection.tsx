import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative matrix-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="space-y-8 animate-fade-in"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                I'm{" "}
                <span className="cyber-glow">LAKSHMAN SURYA KUMAR MUPPIRI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Master of Science in Cybersecurity |
                <br />
                Student at Lewis University, Romeoville, IL
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-cyber"
              >
                Explore more
              </Button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Connect me
                </Button>
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:muppiri.lsk2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div 
            className="relative animate-fade-in"
            style={{ 
              transform: `translateY(${scrollY * -0.05}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="relative float-animation">
              <img
                src="https://i.imgur.com/kpmO0Yj.jpeg"
                alt="Lakshman Surya Kumar Muppiri"
                className="w-full max-w-md mx-auto rounded-2xl shadow-cyber hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-cyber opacity-10 blur-lg hover:opacity-15 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;