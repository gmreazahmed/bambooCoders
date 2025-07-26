import { Card, CardContent } from "@/components/ui/card";

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95, description: "Modern UI library for building interactive interfaces" },
        { name: "Vue.js", level: 90, description: "Progressive framework for building user interfaces" },
        { name: "TypeScript", level: 85, description: "Typed superset of JavaScript for better development" },
        { name: "Next.js", level: 88, description: "React framework for production-grade applications" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 92, description: "JavaScript runtime for server-side development" },
        { name: "Python", level: 88, description: "Versatile language for web development and data processing" },
        { name: "Django", level: 85, description: "High-level Python web framework" },
        { name: "Express.js", level: 90, description: "Fast, minimalist web framework for Node.js" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", level: 88, description: "Advanced open-source relational database" },
        { name: "MongoDB", level: 85, description: "NoSQL document database for modern applications" },
        { name: "Redis", level: 80, description: "In-memory data structure store for caching" },
        { name: "MySQL", level: 83, description: "Popular open-source relational database" }
      ]
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", level: 87, description: "Amazon Web Services cloud platform" },
        { name: "Docker", level: 85, description: "Containerization platform for application deployment" },
        { name: "Kubernetes", level: 78, description: "Container orchestration for scalable applications" },
        { name: "Vercel", level: 90, description: "Platform for frontend deployment and hosting" }
      ]
    }
  ];

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "Adobe XD", category: "Design" },
    { name: "Git", category: "Version Control" },
    { name: "Jest", category: "Testing" },
    { name: "Cypress", category: "Testing" },
    { name: "Webpack", category: "Build Tools" },
    { name: "Vite", category: "Build Tools" },
    { name: "Tailwind CSS", category: "Styling" }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technologies & <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies and tools to build robust, scalable, and maintainable web applications.
          </p>
        </div>
        
        {/* Technology Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tools & Frameworks */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Tools & Frameworks We Love
          </h3>
          <p className="text-muted-foreground mb-8">
            Additional tools and technologies that power our development workflow
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group bg-card border rounded-lg px-4 py-3 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {tool.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certifications & Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold text-muted-foreground">AWS Certified</div>
              <div className="text-sm text-muted-foreground">Solutions Architect</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-muted-foreground">Google Cloud</div>
              <div className="text-sm text-muted-foreground">Professional Developer</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-muted-foreground">Microsoft Azure</div>
              <div className="text-sm text-muted-foreground">Fundamentals</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-muted-foreground">Meta</div>
              <div className="text-sm text-muted-foreground">React Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;