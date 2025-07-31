import { ExternalLink } from "lucide-react";

const YoutubeSection = () => {
  return (
    <section id="youtube" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            My <span className="cyber-glow">Youtube Career</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://i.imgur.com/tEHPqc6.jpeg"
                alt="Youtube Content 1"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium">Watch Video</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative overflow-hidden rounded-lg">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Second Youtube Project</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;