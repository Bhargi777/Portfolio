import { MatrixText } from "./matrix-text"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

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
        <div className="w-full flex justify-center mt-4">
            <div className="relative group w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                {/* Animated outer rings */}
                <div className="absolute -inset-4 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-2 rounded-full border-t border-r border-primary/50 animate-[spin_8s_linear_infinite_reverse]" />
                
                {/* Image mask */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-accent/60 group-hover:border-accent transition-colors duration-500 shadow-[0_0_20px_rgba(var(--accent),0.2)] group-hover:shadow-[0_0_40px_rgba(var(--accent),0.4)]">
                    <img 
                      src="/profile.jpg" 
                      alt="Bhargava" 
                      className="w-full h-full object-cover bg-accent/5 backdrop-blur-sm grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                      onError={(e) => { 
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<div class="absolute inset-0 flex flex-col items-center justify-center text-accent/50 text-[10px] text-center font-mono"><span>[AVATAR_NOT_FOUND]</span><span class="opacity-50 mt-1">Place profile.jpg</span><span class="opacity-50">in public dir</span></div>');
                      }}
                    />
                </div>
                
                {/* Cyber scanning line */}
                <div className="absolute left-0 right-0 h-0.5 bg-accent/80 blur-[1px] transform -translate-y-full animate-[scanline_4s_linear_infinite]" style={{ top: '0%' }} key="scanline" />
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes scanline {
                        0% { top: 0%; opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                    }
                `}} />
            </div>
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

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            <a
              href="/about"
              className="group relative inline-flex items-center gap-3 font-mono text-xs md:text-sm bg-accent text-accent-foreground px-8 py-3 uppercase tracking-widest hover:bg-accent/90 transition-all shadow-lg active:scale-95 duration-300"
            >
              <span className="relative z-10 font-bold">Wanna know more</span>
              <div className="absolute inset-0 border border-current scale-[1.03] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 mt-10 animate-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
            {[
              { icon: Github, href: "https://github.com/Bhargi777" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent hover:scale-125 hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]"
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
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
