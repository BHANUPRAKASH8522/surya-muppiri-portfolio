import { Button } from "@/components/ui/button";
import { Phone, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch <span className="cyber-glow">Contact Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="tel:+919133669948"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-gradient-cyber group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold cyber-glow mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 91336 69948</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-gradient-cyber group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold cyber-glow mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">LinkedIn</p>
                </div>
              </a>

              <a
                href="mailto:muppiri.lsk2002@gmail.com"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-gradient-cyber group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold cyber-glow mb-2">Email</h3>
                  <p className="text-muted-foreground">muppiri.lsk2002@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;