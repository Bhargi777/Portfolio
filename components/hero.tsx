import { MatrixText } from "./matrix-text"
import { FileText } from "lucide-react"

interface HeroProps {
  data: {
    name: string
    occupation: string
    resumedownload?: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative scan-line animate-in fade-in duration-1000">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
        <div className="font-mono leading-tight w-full flex justify-center overflow-x-auto relative">
          {/* Subtle glow behind ASCII art */}
          <div className="absolute inset-0 bg-accent/5 blur-3xl scale-150 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />

          <pre className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm neon-text z-10 animate-in slide-in-from-top-4 duration-1000">
            {`
██████╗ ██╗  ██╗ █████╗ ██████╗  ██████╗  █████╗ ██╗   ██╗ █████╗  
██╔══██╗██║  ██║██╔══██╗██╔══██╗██╔════╝ ██╔══██╗██║   ██║██╔══██╗  
██████╔╝███████║███████║██████╔╝██║  ███╗███████║██║   ██║███████║  
██╔══██╗██╔══██║██╔══██║██╔══██╗██║   ██║██╔══██║██║   ██║██╔══██║  
██████╔╝██║  ██║██║  ██║██║  ██║╚██████╔╝██║  ██║╚██████╔╝██║  ██║  
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ `}
          </pre>
        </div>

        <div className="text-center space-y-5 md:space-y-8 w-full z-10 mt-2">
          <h1 className="font-mono text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight drop-shadow-sm">
            <MatrixText text={data.name} delay={200} duration={1200} />
          </h1>

          <div className="font-mono text-xs sm:text-sm md:text-lg text-muted-foreground border-y border-accent/30 py-3 px-6 inline-block bg-background/50 backdrop-blur-sm shadow-lg shadow-accent/5">
            <span className="text-accent animate-pulse mr-2">{">"}</span>
            <MatrixText text={data.occupation} delay={800} duration={1000} />
            <span className="w-2 h-4 bg-accent inline-block align-middle ml-2 animate-pulse" style={{ animationDuration: '1s' }} />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            <a
              href={data.resumedownload || "/Bhargava_resume.pdf"} // using a fallback or defined state
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 font-mono text-xs md:text-sm bg-accent text-accent-foreground px-6 py-3 uppercase tracking-widest hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              <FileText className="w-4 h-4" />
              <span>Initialize Resume</span>
              <div className="absolute inset-0 border border-current scale-[1.03] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 text-accent/30 font-mono text-[10px] md:text-sm pointer-events-none">╔═══</div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-accent/30 font-mono text-[10px] md:text-sm pointer-events-none">═══╗</div>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-accent/30 font-mono text-[10px] md:text-sm pointer-events-none">╚═══</div>
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-accent/30 font-mono text-[10px] md:text-sm pointer-events-none">═══╝</div>
    </section>
  )
}
