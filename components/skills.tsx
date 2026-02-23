import { MatrixText } from "./matrix-text"

interface SkillsProps {
  data: {
    skills: Array<{
      name: string
      level: string
    }>
  }
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-px bg-accent/30 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-foreground uppercase">
            [ Tech_Stack ]
          </h2>
          <div className="h-px bg-accent/30 flex-1"></div>
        </div>

        <div className="border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8 hover:border-accent transition-all duration-500 group shadow-lg hover:shadow-accent/5 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 relative z-10">
            {data.skills?.map((skill, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 50}ms` }}
                className="font-mono text-[10px] md:text-xs p-3 md:p-4 bg-background/50 border border-border/50 hover:border-accent/50 hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-accent/10 transition-all duration-300 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 group/skill"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-accent/60 group-hover/skill:text-accent transition-colors">▸</span>
                  <span className="text-foreground/90 group-hover/skill:text-foreground transition-colors font-semibold tracking-wide whitespace-nowrap">
                    <MatrixText text={skill.name} triggerOnHover={true} />
                  </span>
                </div>
                <span className="text-muted-foreground/60 text-[9px] bg-background px-1.5 py-0.5 border border-border/30 rounded-full flex-shrink-0">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
