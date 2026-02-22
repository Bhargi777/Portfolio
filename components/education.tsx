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
        <div className="font-mono text-accent mb-4 md:mb-6 flex flex-col items-center overflow-x-auto">
          <pre className="text-[10px] md:text-xs">╔══════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold">║ EDUCATION ║</pre>
          <pre className="text-[10px] md:text-xs">╚══════════════════════════════╝</pre>
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
