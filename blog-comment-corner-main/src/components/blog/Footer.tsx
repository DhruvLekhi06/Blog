import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Blog</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Sharing thoughts, experiences, and insights on technology, life, and everything in between.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog?category=technology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/blog?category=personal" className="text-muted-foreground hover:text-foreground transition-colors">
                  Personal
                </Link>
              </li>
              <li>
                <Link to="/blog?category=tutorials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;