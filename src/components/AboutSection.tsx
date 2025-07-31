import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://i.imgur.com/CEXW7NR.jpeg"
              alt="About Lakshman Surya"
              className="w-full max-w-md mx-auto rounded-2xl shadow-cyber cyber-card"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Get To Know More{" "}
                <span className="cyber-glow">About</span> Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm about a challenging program in the field of cybersecurity which I can
                apply my technical knowledge and skills to identify vulnerabilities in
                systems, networks, applications, and infrastructure. My goal is to
                contribute to protecting organizations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-2xl font-bold mb-2 cyber-glow">
                  Master of Science in Cybersecurity
                </h3>
                <p className="text-muted-foreground">
                  Student at Lewis University, Romeoville, IL
                </p>
              </div>

              <a
                href="https://androiddevhub.com/tools/link-converter/docx-to-link.php?id=25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-cyber group">
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Download CV
                  <span className="ml-2 cyber-glow">→ Lakshman Surya</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;