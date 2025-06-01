
import { Bot, Code2, Database, GitBranch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Development Tools',
      description: 'Advanced AI-powered tools that accelerate development workflows and enhance code quality.',
    },
    {
      icon: Code2,
      title: 'Open Source Projects',
      description: 'Community-driven open-source tools and libraries that developers love to use.',
    },
    {
      icon: Database,
      title: 'ML Infrastructure',
      description: 'Robust machine learning infrastructure and deployment solutions for AI applications.',
    },
    {
      icon: GitBranch,
      title: 'Developer Experience',
      description: 'Streamlined developer experience tools that make AI integration seamless and intuitive.',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Intellivis.ai, we specialize in creating AI-powered development tools and open-source solutions 
            that empower developers and organizations to build better software faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
