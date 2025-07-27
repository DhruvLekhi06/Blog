import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/blog/Header";
import Footer from "@/components/blog/Footer";
import CommentSection from "@/components/blog/CommentSection";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";

// Mock blog post data
const mockPosts = {
  "1": {
    id: "1",
    title: "Getting Started with React and TypeScript",
    content: `
# Introduction

React and TypeScript make a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and cover the essential patterns you need to know.

## Why Use TypeScript with React?

TypeScript brings several benefits to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Self-Documenting Code**: Types serve as inline documentation
- **Easier Refactoring**: Confidence when making changes to your codebase

## Setting Up Your Project

The easiest way to get started is using Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

This creates a new React project with TypeScript already configured and ready to use.

## Essential TypeScript Patterns for React

### 1. Component Props

Always define interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
};
\`\`\`

### 2. Event Handlers

Type your event handlers properly:

\`\`\`typescript
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
};

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission
};
\`\`\`

### 3. useState with Types

Be explicit about state types:

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [items, setItems] = useState<Item[]>([]);
\`\`\`

## Best Practices

1. **Start with Strict Mode**: Enable strict TypeScript settings for better type checking
2. **Use Interfaces Over Types**: For object shapes, prefer interfaces
3. **Leverage Union Types**: Use union types for controlled values
4. **Don't Use 'any'**: Avoid the any type - be specific about your types

## Conclusion

TypeScript with React provides an excellent developer experience and helps build more robust applications. Start small, gradually add types to your existing React components, and you'll quickly see the benefits.

The investment in learning TypeScript pays off quickly through improved code quality, better tooling support, and increased confidence when refactoring your applications.
    `,
    category: "Technology",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    author: "Your Name"
  },
  "2": {
    id: "2", 
    title: "The Art of Clean Code",
    content: `
# The Art of Clean Code

Writing clean code is more than just following syntax rules - it's about creating code that is readable, maintainable, and elegant. In this article, we'll explore the principles that separate good code from great code.

## What Makes Code "Clean"?

Clean code has several characteristics:

- **Readable**: Anyone can understand what it does
- **Simple**: Does one thing well
- **Maintainable**: Easy to modify and extend
- **Tested**: Covered by comprehensive tests

## Core Principles

### 1. Meaningful Names

Choose names that reveal intent:

\`\`\`javascript
// Bad
const d = new Date();
const u = users.filter(u => u.a);

// Good  
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

### 2. Functions Should Be Small

Keep functions focused and small:

\`\`\`javascript
// Bad
function processUserData(users) {
  // 50 lines of mixed responsibilities
}

// Good
function validateUsers(users) { /* ... */ }
function transformUserData(users) { /* ... */ }
function saveUsers(users) { /* ... */ }
\`\`\`

### 3. Single Responsibility Principle

Each function should have one reason to change:

\`\`\`javascript
// Bad - multiple responsibilities
function handleUser(user) {
  validateUser(user);
  saveUser(user);
  sendEmail(user);
  logActivity(user);
}

// Good - separated concerns
function processUser(user) {
  const validUser = validateUser(user);
  const savedUser = saveUser(validUser);
  
  notificationService.sendWelcomeEmail(savedUser);
  auditService.logUserCreation(savedUser);
  
  return savedUser;
}
\`\`\`

## Practical Tips

1. **Use Consistent Formatting**: Pick a style and stick to it
2. **Write Comments for Why, Not What**: Explain the reasoning, not the obvious
3. **Refactor Regularly**: Don't let technical debt accumulate
4. **Use Version Control Effectively**: Make small, focused commits

## The Refactoring Mindset

Clean code is rarely written perfectly the first time. Embrace refactoring as part of the development process:

1. **Make it work** - Get the functionality correct
2. **Make it right** - Refactor for clarity and design
3. **Make it fast** - Optimize only when necessary

## Conclusion

Clean code is an investment in your future self and your team. It takes discipline and practice, but the payoff in reduced bugs, easier maintenance, and faster development is enormous.

Remember: code is read more often than it's written. Make it count.
    `,
    category: "Programming", 
    date: "Jan 12, 2024",
    readTime: "8 min read",
    author: "Your Name"
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? mockPosts[id as keyof typeof mockPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="py-8">
        <div className="container max-w-4xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Meta */}
          <header className="space-y-6 mb-12">
            <div className="space-y-4">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
            </div>
            
            <div className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>By {post.author}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="max-w-reading mx-auto leading-relaxed text-foreground">
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.substring(4)}</h3>;
                }
                if (line.startsWith('```')) {
                  return null; // Handle code blocks separately
                }
                if (line.startsWith('- ')) {
                  return <li key={index} className="ml-4">{line.substring(2)}</li>;
                }
                if (line.trim() === '') {
                  return <br key={index} />;
                }
                return <p key={index} className="mb-4">{line}</p>;
              })}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Comments Section */}
          <CommentSection />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;