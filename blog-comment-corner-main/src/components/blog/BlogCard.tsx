import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const cardClass = featured
    ? "group cursor-pointer transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-blog-hero"
    : "group cursor-pointer transition-all duration-300 hover:shadow-lg";

  return (
    <Link to={`/blog/${post.id}`}>
      <Card className={cardClass}>
        {post.image && (
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            {featured && (
              <Badge className="bg-blog-accent text-blog-accent-foreground">
                Featured
              </Badge>
            )}
          </div>
          <h3 className={`font-semibold leading-tight group-hover:text-blog-accent transition-colors ${
            featured ? "text-xl" : "text-lg"
          }`}>
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;