const SkillsSection = () => {
  const technicalSkills = [
    {
      name: "Python",
      description: "basic scripting, automation",
      icon: "https://i.imgur.com/ACcjfKu.png",
    },
    {
      name: "Bash",
      description: "basic commands",
      icon: "https://i.imgur.com/oqAwzvi.png",
    },
    {
      name: "SQL",
      description: "SQL commands",
      icon: "https://i.imgur.com/Vwyo0mG.png",
    },
    {
      name: "GitHub",
      description: "GitHub documentation and reports",
      icon: "https://i.imgur.com/ivdWkwP.png",
    },
  ];

  const cyberSecurityTools = [
    {
      name: "Kali Linux",
      icon: "https://i.imgur.com/TGVgeI0.jpeg",
    },
    {
      name: "IBM X-Force",
      icon: "https://i.imgur.com/5hW9vkg.png",
    },
    {
      name: "Wireshark",
      icon: "https://i.imgur.com/md1uMv9.png",
    },
    {
      name: "Nmap",
      icon: "https://i.imgur.com/V4zkRAP.jpeg",
    },
    {
      name: "OpenSSL",
      icon: "https://i.imgur.com/34z5pEQ.jpeg",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="cyber-glow">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technicalSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="cyber-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-cyber p-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 cyber-glow">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="cyber-glow">CYBERSECURITY</span> TOOLS & TECHNIQUES
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cyberSecurityTools.map((tool, index) => (
            <div
              key={tool.name}
              className="cyber-card text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-card p-4 group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold cyber-glow">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;