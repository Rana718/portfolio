import { getAllBlogs } from "@/lib/blogs";
import { HomeClient } from "@/components/HomeClient";
import { getOpenSourceRepoStats } from "@/lib/github";

export default async function Home() {
   const blogs = getAllBlogs().slice(0, 3).map((b) => ({
      slug: b.slug,
      title: b.title,
      description: b.description,
      date: b.date,
      category: b.category,
      language: b.language,
      readingTime: b.readingTime,
   }));

   const githubStats = await getOpenSourceRepoStats();

   return <HomeClient blogs={blogs} githubStats={githubStats} />;
}
