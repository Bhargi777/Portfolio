interface HeroProps {
  data: {
    name: string
    occupation: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative scan-line">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="font-mono leading-tight w-full flex justify-center overflow-x-auto">
          <pre className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm neon-text">
            {`
██████╗ ██╗  ██╗ █████╗ ██████╗  ██████╗  █████╗ ██╗   ██╗ █████╗  
██╔══██╗██║  ██║██╔══██╗██╔══██╗██╔════╝ ██╔══██╗██║   ██║██╔══██╗  
██████╔╝███████║███████║██████╔╝██║  ███╗███████║██║   ██║███████║  
██╔══██╗██╔══██║██╔══██║██╔══██╗██║   ██║██╔══██║██║   ██║██╔══██║  
██████╔╝██║  ██║██║  ██║██║  ██║╚██████╔╝██║  ██║╚██████╔╝██║  ██║  
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ `}
          </pre>
        </div>

        <div className="text-center space-y-2 md:space-y-4 w-full">
          <h1 className="font-mono text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-foreground">{data.name}</h1>
          <div className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground border-t-2 border-b-2 pulse-border py-2 px-4 inline-block">
            <span className="neon-cyan">{">"}</span> {data.occupation}
          </div>
        </div>
      </div>

      <div className="absolute top-2 left-2 md:top-4 md:left-4 text-accent/30 font-mono text-[10px] md:text-sm">╔═══</div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-accent/30 font-mono text-[10px] md:text-sm">═══╗</div>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-accent/30 font-mono text-[10px] md:text-sm">╚═══</div>
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-accent/30 font-mono text-[10px] md:text-sm">═══╝</div>
    </section>
  )
}
