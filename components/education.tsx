interface EducationProps {
  data: {
    education: Array<{
      school: string
      degree: string
      graduated: string
      description: string
    }>
  }
}

export default function Education({ data }: EducationProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-px bg-accent/30 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-foreground uppercase">
            [ ACADEMIC_RECORD ]
          </h2>
          <div className="h-px bg-accent/30 flex-1"></div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {data.education?.map((edu, index) => (
            <div
              key={index}
              className="border-2 border-border bg-card p-4 md:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="font-mono text-[10px] md:text-sm space-y-2">
                <div className="text-accent">┌─ SCHOOL ────────┐</div>
                <div className="text-foreground font-bold pl-2 break-words">{edu.school}</div>
                <div className="text-accent">├─ DEGREE ────────┤</div>
                <div className="text-foreground pl-2 break-words">{edu.degree}</div>
                <div className="text-accent">├─ YEAR ──────────┤</div>
                <div className="text-muted-foreground pl-2">{edu.graduated}</div>
                <div className="text-accent">└──────────────────┘</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
