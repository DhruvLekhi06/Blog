import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenTool, Home, FileText, User } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <PenTool className="h-6 w-6 text-blog-accent" />
          <span className="text-xl font-bold">My Blog</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blog-accent ${
              isActive("/") ? "text-blog-accent" : "text-muted-foreground"
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            to="/blog"
            className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blog-accent ${
              isActive("/blog") ? "text-blog-accent" : "text-muted-foreground"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Blog</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blog-accent ${
              isActive("/about") ? "text-blog-accent" : "text-muted-foreground"
            }`}
          >
            <User className="h-4 w-4" />
            <span>About</span>
          </Link>
        </nav>
        
        <Button variant="outline" size="sm">
          Subscribe
        </Button>
      </div>
    </header>
  );
};

export default Header;