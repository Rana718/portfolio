import { openSourceRepos } from "@/lib/data";

export interface GitHubRepoStats {
   stars: number;
   forks: number;
   openIssues: number;
}

export type GitHubStatsByRepo = Record<string, GitHubRepoStats>;

function getRepoPath(url: string) {
   try {
      const { pathname } = new URL(url);
      const [owner, repo] = pathname.split("/").filter(Boolean);
      return owner && repo ? `${owner}/${repo}` : null;
   } catch {
      return null;
   }
}

export async function getOpenSourceRepoStats(): Promise<GitHubStatsByRepo> {
   const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
   };

   if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
   }

   const entries = await Promise.all(
      openSourceRepos.map(async (repo) => {
         const repoPath = getRepoPath(repo.url);
         if (!repoPath) return [repo.name, null] as const;

         try {
            const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
               headers,
               next: { revalidate: 300 },
            });

            if (!response.ok) return [repo.name, null] as const;

            const data = (await response.json()) as {
               stargazers_count: number;
               forks_count: number;
               open_issues_count: number;
            };

            return [
               repo.name,
               {
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                  openIssues: data.open_issues_count,
               },
            ] as const;
         } catch {
            return [repo.name, null] as const;
         }
      }),
   );

   return Object.fromEntries(
      entries.filter(
         (entry): entry is readonly [string, GitHubRepoStats] => entry[1] !== null,
      ),
   );
}
