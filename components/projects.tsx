import { useEffect, useState } from "react"
import { Star, Code, Loader2 } from "lucide-react"
import { MatrixText } from "./matrix-text"

interface GithubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  fork: boolean
  pushed_at: string
}

interface ProjectsProps {
  data: {
    projects: Array<{
      title: string
      about: string
      url: string
      image?: string
    }>
  }
}

export default function Projects({ data }: ProjectsProps) {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchRepos() {
      try {
        // Cache repos in session storage to avoid rate limits
        const cached = sessionStorage.getItem("github_repos")
        if (cached) {
          setRepos(JSON.parse(cached))
          setLoading(false)
          return
        }

        // Fetch user repos
        const res = await fetch("https://api.github.com/users/Bhargi777/repos?per_page=100")
        if (!res.ok) throw new Error("Failed to fetch")

        const json: GithubRepo[] = await res.json()

        // Filter out forks and repos without descriptions, sort primarily by stars then pushed_at
        const filtered = json
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          })
          .slice(0, 6) // Keep top 6 repos

        sessionStorage.setItem("github_repos", JSON.stringify(filtered))
        setRepos(filtered)
      } catch (err) {
        console.error("Github sync error:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const displayProjects = !error && repos.length > 0
    ? repos.map(repo => ({
      title: repo.name,
      about: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      isGithub: true
    }))
    : data.projects?.map(p => ({
      ...p,
      isGithub: false,
      stars: 0,
      language: ""
    })) || []

  return (
    <section className="container mx-auto px-4 py-8 md:py-12" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-accent mb-6 md:mb-10 flex flex-col items-center overflow-x-auto relative group">
          <div className="absolute inset-0 bg-accent/5 blur-xl group-hover:bg-accent/10 transition-colors duration-700"></div>
          <pre className="text-[10px] md:text-xs">╔══════════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold tracking-widest">║ PROJECTS [SYNC_MODE: ALWAYS] ║</pre>
          <pre className="text-[10px] md:text-xs">╚══════════════════════════════════╝</pre>
        </div>

        {loading ? (
          <div className="flex justify-center flex-col items-center py-12 text-accent font-mono animate-pulse gap-4">
            <Loader2 className="w-8 h-8 animate-spin" />
            <pre className="text-xs uppercase tracking-widest">{`[FETCHING_GITHUB_REPOS...]`}</pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {displayProjects.map((project, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="border-2 border-border bg-card/80 backdrop-blur-sm hover:border-accent hover:-translate-y-1 transition-all duration-300 group shadow-lg hover:shadow-accent/5 transform-gpu animate-in fade-in slide-in-from-bottom-4"
              >
                <div className="font-mono p-4 md:p-6 flex flex-col h-full">
                  <div className="text-accent/50 text-[10px] md:text-xs mb-3 group-hover:text-accent transition-colors duration-300">
                    ╔═══════════════════╗
                  </div>

                  <div className="flex justify-between items-start mb-3 pl-2">
                    <h3 className="text-foreground font-bold text-sm md:text-lg break-words group-hover:text-accent transition-colors overflow-hidden">
                      <MatrixText text={project.title} triggerOnHover={true} />
                    </h3>
                    {project.isGithub && project.stars > 0 && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-accent/10 py-1 px-2 border border-accent/20">
                        <Star className="w-3 h-3 text-accent fill-accent" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-[11px] md:text-sm leading-relaxed mb-4 pl-2 flex-grow">
                    {project.about}
                  </p>

                  <div className="mt-auto">
                    {project.isGithub && project.language && (
                      <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-muted-foreground mb-4 pl-2">
                        <Code className="w-3.5 h-3.5 text-accent" />
                        <span className="opacity-80"><MatrixText text={project.language} triggerOnHover={true} /></span>
                      </div>
                    )}

                    <div className="text-accent/50 text-[10px] md:text-xs mb-3 group-hover:text-accent transition-colors duration-300">
                      ╚═══════════════════╝
                    </div>

                    <div className="group/btn relative inline-flex">
                      <div className="absolute inset-0 bg-accent/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-block font-mono text-[10px] md:text-xs text-accent hover:text-primary transition-colors border border-accent/30 hover:border-accent px-4 py-2 bg-background/50 backdrop-blur-sm hover:bg-accent/10 uppercase tracking-wider"
                      >
                        [execute →]
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
