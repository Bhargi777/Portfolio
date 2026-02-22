interface ExperienceProps {
  data: {
    work: Array<{
      company: string
      title: string
      years: string
    }>
  }
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-px bg-accent/30 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-foreground uppercase">
            [ EXPERIENCE_LOGS ]
          </h2>
          <div className="h-px bg-accent/30 flex-1"></div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {data.work?.map((job, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className="border border-border bg-card/80 backdrop-blur-sm hover:border-accent hover:-translate-y-1 transition-all duration-300 group shadow-lg hover:shadow-accent/5 transform-gpu animate-in fade-in slide-in-from-bottom-4"
            >
              <div className="font-mono text-[10px] md:text-sm p-4 md:p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none" />
                <div className="flex items-start justify-between gap-3 md:gap-6 flex-wrap relative z-10">
                  <div className="flex-1 min-w-0">
                    <div className="text-accent/60 group-hover:text-accent mb-2 break-words transition-colors">╔═ {job.company}</div>
                    <div className="text-foreground font-semibold pl-4 break-words text-sm md:text-base">║ {job.title}</div>
                    <div className="text-muted-foreground pl-4 mt-2 text-[10px] md:text-xs uppercase tracking-wider backdrop-blur-sm inline-block">╚═ {job.years}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
