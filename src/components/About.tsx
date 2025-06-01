import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '../img/IMG_2746.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Intellivis.AI</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">AI-Powered Development Revolution</h3>
                <p className="text-lg text-muted-foreground">
                  We're an AI-powered development company looking for a team of passionate developers and AI researchers dedicated to creating tools 
                  that make software development more efficient, intelligent, and accessible to everyone.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Building AI tools that enhance developer productivity</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Contributing to open-source projects used by thousands</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Researching cutting-edge machine learning techniques</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Fostering a community of AI-driven development</span>
                </div>
              </div>

              <Button className="gradient-bg text-white hover:scale-105 transition-transform duration-300" onClick={() => window.open('https://discord.gg/u3ekTsmP')}> 
                Join Our Community
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
