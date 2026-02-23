import { MatrixText } from "./matrix-text"

interface AboutProps {
  data: {
    bio: string
    email: string
    phone: string
    social: Array<{
      name: string
      url: string
      className: string
    }>
    profiles?: Array<{
      name: string
      url: string
      className: string
    }>
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-px bg-accent/30 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-foreground uppercase">
            [ Introduction ]
          </h2>
          <div className="h-px bg-accent/30 flex-1"></div>
        </div>

        <div className="border border-border p-6 md:p-10 bg-card/80 backdrop-blur-sm hover:border-accent transition-all duration-500 group shadow-lg hover:shadow-accent/5 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none" />

          <div className="font-mono text-[11px] md:text-sm leading-relaxed space-y-4 md:space-y-6 relative z-10">
            <p className="text-foreground/90 group-hover:text-foreground transition-colors">
              <span className="text-accent animate-pulse mr-2">{">"}</span>
              {data.bio}
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/50 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 font-mono text-[10px] md:text-[13px]">
              <div className="flex flex-col gap-1 border border-border/30 bg-background/30 p-4 hover:border-accent/40 transition-colors">
                <span className="text-accent uppercase tracking-widest text-[9px] md:text-[10px] mb-1 jus">Email</span>{" "}
                <a
                  href={`mailto:${data.email}`}
                  className="text-foreground hover:text-accent transition-colors break-all"
                >
                  {data.email}
                </a>
              </div>
              <div className="flex flex-col gap-1 border border-border/30 bg-background/30 p-4 hover:border-accent/40 transition-colors">
                <span className="text-accent uppercase tracking-widest text-[9px] md:text-[10px] mb-1">Phone</span>
                <a href={`tel:${data.phone}`} className="text-foreground">{data.phone}</a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {data.social?.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link relative inline-flex font-mono text-xs md:text-sm text-foreground hover:text-accent transition-colors border border-border px-6 py-2 bg-background/50 hover:border-accent uppercase tracking-wider overflow-hidden"
                >
                  <span className="relative z-10">[<MatrixText text={social.name} triggerOnHover={true} />]</span>
                  <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover/link:translate-y-0 transition-transform duration-300 pointer-events-none" />
                </a>
              ))}
              {data.profiles?.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link relative inline-flex font-mono text-xs md:text-sm text-foreground hover:text-accent transition-colors border border-border px-6 py-2 bg-background/50 hover:border-accent uppercase tracking-wider overflow-hidden"
                >
                  <span className="relative z-10">[<MatrixText text={profile.name} triggerOnHover={true} />]</span>
                  <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover/link:translate-y-0 transition-transform duration-300 pointer-events-none" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
