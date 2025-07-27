import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/blog/Header";
import Footer from "@/components/blog/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { Search, Filter } from "lucide-react";

// Mock blog posts data
const allPosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React project with TypeScript, covering best practices and common patterns.",
    category: "Technology",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "The Art of Clean Code",
    excerpt: "Discover principles and practices that will make your code more readable, maintainable, and elegant.",
    category: "Programming",
    date: "Jan 12, 2024",
    readTime: "8 min read"
  },
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
  },
  {
    id: "6",
    title: "Introduction to API Design",
    excerpt: "Learn the fundamentals of designing robust and scalable APIs that developers love to use.",
    category: "Programming",
    date: "Jan 3, 2024",
    readTime: "10 min read"
  }
];

const categories = ["All", "Technology", "Programming", "Web Design", "Personal"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterPosts(term, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterPosts(searchTerm, category);
  };

  const filterPosts = (search: string, category: string) => {
    let filtered = allPosts;

    if (category !== "All") {
      filtered = filtered.filter(post => post.category === category);
    }

    if (search) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blog-hero via-background to-blog-hero">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all my writings on technology, programming, and personal experiences.
            Use the search and filters below to find exactly what you're looking for.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
                className={selectedCategory === category ? "bg-blog-accent hover:bg-blog-accent/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 space-y-4">
              <h3 className="text-2xl font-semibold">No articles found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No articles match your current search and filter criteria. Try adjusting your search terms or category filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setFilteredPosts(allPosts);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;