import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import insightqImage from '../img/insightq.png';
import chatwithdbImage from '../img/chat.png';
import chatbotImage from '../img/chatbot.jpg';

interface Project {
  title: string;
  description: string;
  tags: string[];
  stars: string;
  isOpenSource: boolean;
  image?: string; // Make image property optional
  sourceUrl?: string; // Add optional source URL
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'InsightIQ (Text Summarizer & Keyword Extractor)',
      description: 'Placeholder description for InsightIQ.',
      tags: ['AI/ML', 'NLP'],
      stars: '-',
      isOpenSource: true,
      image: insightqImage,
      sourceUrl: 'https://github.com/IntellivisAI/InsightIQ',
    },
    {
      title: 'Chatbot Application for Business Analysis',
      description: 'Placeholder description for Chatbot Application.',
      tags: ['AI/ML', 'Chatbot', 'Business Analysis'],
      stars: '-',
      isOpenSource: true,
      image: chatbotImage,
    },
    {
      title: 'Chat with Database',
      description: 'Placeholder description for Chat with DB.',
      tags: ['Database', 'AI/ML', 'NLP'],
      stars: '-',
      isOpenSource: true,
      image: chatwithdbImage,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Source Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of AI-powered development tools and open-source projects 
            that are transforming how developers build and deploy software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 overflow-hidden"
            >
              <div className="relative h-49 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Default Background/Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-green-500/20"></div>
                    <div className="absolute top-4 left-4 w-16 h-16 bg-orange-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full opacity-70"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/30 rounded-full"></div>
                  </>
                )}
                {project.isOpenSource && (
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{project.stars}</span>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2">
                  {project.sourceUrl ? (
                    <a 
                      href={project.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-300">
                        <Github size={16} className="mr-2" />
                        Source
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" variant="outline" className="hover:scale-105 transition-transform duration-300" disabled>
                      <Github size={16} className="mr-2" />
                      Source
                    </Button>
                  )}
                  <Button size="sm" className="gradient-bg text-white hover:scale-105 transition-transform duration-300">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
