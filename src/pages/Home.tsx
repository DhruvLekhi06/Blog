import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/blog/Header";
import Footer from "@/components/blog/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

// Mock data for featured posts
const featuredPosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React project with TypeScript, covering best practices and common patterns.",
    category: "Technology",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
    featured: true
  },
  {
    id: "2", 
    title: "The Art of Clean Code",
    excerpt: "Discover principles and practices that will make your code more readable, maintainable, and elegant.",
    category: "Programming",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    featured: true
  }
];

const recentPosts = [
  {
    id: "3",
    title: "Understanding CSS Grid Layout",
    excerpt: "A comprehensive guide to CSS Grid, from basic concepts to advanced layout techniques.",
    category: "Web Design",
    date: "Jan 10, 2024",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "My Journey into Open Source",
    excerpt: "Reflections on contributing to open source projects and the lessons learned along the way.",
    category: "Personal",
    date: "Jan 8, 2024", 
    readTime: "4 min read"
  },
  {
    id: "5",
    title: "Building Responsive Web Applications",
    excerpt: "Best practices for creating web apps that work seamlessly across all devices and screen sizes.",
    category: "Technology",
    date: "Jan 5, 2024",
    readTime: "7 min read"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blog-hero via-background to-blog-hero opacity-50" />
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing insights, experiences, and knowledge about technology, programming, 
            and life. Join me on this journey of continuous learning and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blog-accent hover:bg-blog-accent/90">
              <Link to="/blog">
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-blog-hero/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blog-accent" />
              </div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-blog-accent" />
              </div>
              <h3 className="text-2xl font-bold">1,200+</h3>
              <p className="text-muted-foreground">Regular Readers</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Clock className="h-8 w-8 text-blog-accent" />
              </div>
              <h3 className="text-2xl font-bold">2 Years</h3>
              <p className="text-muted-foreground">Writing Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and impactful articles that have resonated with readers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-blog-hero/10">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Button asChild variant="outline">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get notified when I publish new articles. No spam, unsubscribe at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-input rounded-md bg-background"
                />
                <Button className="bg-blog-accent hover:bg-blog-accent/90">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;