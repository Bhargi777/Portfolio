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
    <section className="container mx-auto px-4 py-8 md:py-12" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-4 md:mb-6 flex flex-col items-center overflow-x-auto">
          <pre className="text-[10px] md:text-xs">╔══════════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold">║ EXPERIENCE ║</pre>
          <pre className="text-[10px] md:text-xs">╚══════════════════════════════════╝</pre>
        </div>

        <div className="space-y-3 md:space-y-4">
          {data.work?.map((job, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-accent transition-colors duration-300"
            >
              <div className="font-mono text-[10px] md:text-sm p-3 md:p-6">
                <div className="flex items-start justify-between gap-2 md:gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="text-accent mb-1 break-words">╔═ {job.company}</div>
                    <div className="text-foreground font-semibold pl-4 break-words">║ {job.title}</div>
                    <div className="text-muted-foreground pl-4 mt-1 text-[9px] md:text-[10px]">╚═ {job.years}</div>
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
