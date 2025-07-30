const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="cyber-link text-sm text-muted-foreground hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="cyber-link text-sm text-muted-foreground hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="cyber-link text-sm text-muted-foreground hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cyber-link text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </button>
          </nav>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;