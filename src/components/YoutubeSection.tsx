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
          <a
            href="https://youtu.be/KHNbxxHbQRQ?si=7CxbG8MtwPK9UAT1"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
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
          </a>

          <a
            href="https://youtu.be/ocNP3s4Vjys?si=enAwSrG64PCi3cl5"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://i.imgur.com/FD6PZZA.png"
                alt="Youtube Content 2"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;