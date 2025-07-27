import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/blog/Header";
import Footer from "@/components/blog/Footer";
import { Github, Twitter, Linkedin, Mail, Code, Coffee, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blog-hero via-background to-blog-hero">
        <div className="container max-w-4xl text-center space-y-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blog-accent to-primary overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate developer and writer who loves sharing knowledge through code and words. 
            Welcome to my digital space where I document my journey in technology.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container max-w-4xl space-y-12">
          
          {/* My Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Story</h2>
            <div className="max-w-reading space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started my journey in technology over [X] years ago, beginning with curiosity about how websites work 
                and eventually diving deep into software development. What began as a hobby quickly became a passion, 
                and today I work as a [Your Role] specializing in [Your Specialization].
              </p>
              <p>
                This blog is my way of giving back to the community that has taught me so much. I write about the 
                technologies I'm exploring, the challenges I'm solving, and the lessons I'm learning along the way. 
                Whether you're just starting out or you're a seasoned developer, I hope you'll find something useful here.
              </p>
              <p>
                When I'm not coding or writing, you can find me [your hobbies/interests]. I believe in continuous 
                learning, meaningful connections, and the power of sharing knowledge to make the tech community stronger.
              </p>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blog-accent" />
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript", "TypeScript", "React", "Node.js", 
                    "Python", "SQL", "Git", "AWS", "Docker"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blog-hero rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-blog-accent" />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Open Source Contribution</li>
                  <li>• Web Performance Optimization</li>
                  <li>• Developer Experience</li>
                  <li>• Technical Writing</li>
                  <li>• Mentoring New Developers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Current Focus */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What I'm Working On</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-blog-accent" />
                  <h3 className="text-xl font-semibold">Current Projects</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    🚀 <strong>Building this blog</strong> - Creating a platform to share knowledge and connect with fellow developers
                  </p>
                  <p>
                    📚 <strong>Learning [New Technology]</strong> - Exploring the latest in [specific area] and documenting my journey
                  </p>
                  <p>
                    🌟 <strong>Open Source Contributions</strong> - Contributing to projects that make developers' lives easier
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  I love connecting with fellow developers, creators, and anyone passionate about technology. 
                  Feel free to reach out if you want to collaborate, have questions, or just want to chat!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:your.email@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;