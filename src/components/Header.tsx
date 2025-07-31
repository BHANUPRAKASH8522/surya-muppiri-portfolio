import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <SidebarProvider>
        <div className="w-full">
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                ? "bg-background/80 backdrop-blur-lg shadow-cyber"
                : "bg-transparent"
            }`}
          >
            <nav className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold cyber-glow">
                  SURYA MUPPIRI
                </div>
                <SidebarTrigger className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </SidebarTrigger>
              </div>
            </nav>
          </header>
          <AppSidebar />
        </div>
      </SidebarProvider>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-cyber"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold cyber-glow">
            SURYA MUPPIRI
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="cyber-link text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="cyber-link text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="cyber-link text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("youtube")}
              className="cyber-link text-foreground hover:text-primary transition-colors"
            >
              Youtube
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cyber-link text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left cyber-link text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left cyber-link text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left cyber-link text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("youtube")}
                className="text-left cyber-link text-foreground hover:text-primary transition-colors"
              >
                Youtube
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left cyber-link text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;