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
  return (
    <section className="container mx-auto px-4 py-8 md:py-12" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-accent mb-4 md:mb-6 flex flex-col items-center overflow-x-auto">
          <pre className="text-[10px] md:text-xs">╔══════════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold">║ PROJECTS ║</pre>
          <pre className="text-[10px] md:text-xs">╚══════════════════════════════════╝</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.projects?.map((project, index) => (
            <div
              key={index}
              className="border-2 border-border bg-card hover:border-accent transition-all duration-300 group"
            >
              <div className="font-mono p-3 md:p-6">
                <div className="text-accent text-[10px] md:text-sm mb-2">╔═══════════════════╗</div>
                <h3 className="text-foreground font-bold text-xs md:text-base mb-2 pl-2 break-words">{project.title}</h3>
                <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed mb-3 pl-2">{project.about}</p>
                <div className="text-accent text-[10px] md:text-sm mb-2">╚═══════════════════╝</div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[10px] md:text-xs text-accent hover:text-foreground transition-colors border border-border px-3 py-1 mt-2 hover:bg-accent/10"
                >
                  [view →]
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
