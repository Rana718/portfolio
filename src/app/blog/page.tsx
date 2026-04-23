import { readFileSync } from "fs";
import { join } from "path";
import BlogList from "./BlogList";

export default function BlogPage() {
  const blogPosts = JSON.parse(
    readFileSync(join(process.cwd(), "public", "data", "blog.json"), "utf-8")
  );

  return (
    <main className="min-h-screen py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">BLOG</h1>
          <p className="text-foreground/60 text-sm max-w-xl mx-auto">
            Thoughts on Go, Next.js, microservices, DevOps, and building production systems
          </p>
        </div>
        <BlogList posts={blogPosts} />
      </div>
    </main>
  );
}
