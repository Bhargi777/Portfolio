"use client"

import { useState } from "react"
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react"
import { MatrixText } from "./matrix-text"

interface ContactProps {
  data: {
    contactmessage: string
    email: string
    address: {
      city: string
      state: string
    }
    social?: Array<{
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

export default function Contact({ data }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    /*
     * HOW TO RECEIVE CONTACT DATA:
     * 1. Go to Formspree.io and create a free account
     * 2. Create a new form
     * 3. Replace the URL below with your actual form endpoint
    */
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      // NOTE: Replace this URL with your actual API endpoint once you have it.
      await fetch("https://formspree.io/f/xeelryvd", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
      // Simulating network delay for now because endpoint isn't real yet
      await new Promise((resolve) => setTimeout(resolve, 800))

      setIsSuccess(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSuccess(false)
        form.reset()
      }, 4000)
    }
  }

  return (
    <section className="container mx-auto px-4 py-8 md:py-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12 mt-4">
          <div className="h-px bg-accent/30 flex-1"></div>
          <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-foreground uppercase">
            [ SYSTEM_CONNECTION ]
          </h2>
          <div className="h-px bg-accent/30 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="group/connect">
              <h2 className="text-2xl lg:text-3xl font-bold font-mono text-foreground mb-4 flex items-center gap-2">
                <span className="text-accent animate-pulse">{">"}</span>
                <span className="group-hover/connect:text-accent transition-colors"><MatrixText text="Let's Connect" triggerOnHover={true} /></span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-md">{data.contactmessage}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-border/50 max-w-md">
              <a
                href={`mailto:${data.email}`}
                className="group flex items-center gap-4 p-4 border border-border bg-card/30 hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="bg-background/50 p-3 border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono mb-1 uppercase tracking-wider">Direct Comm</div>
                  <div className="text-xs md:text-sm font-mono text-foreground group-hover:text-accent transition-colors break-all">{data.email}</div>
                </div>
              </a>

              <div className="p-4 border border-border bg-card/30 flex flex-col gap-4">
                <div className="text-[10px] md:text-xs text-muted-foreground font-mono uppercase tracking-wider border-b border-border/50 pb-2">Verified Neural Links</div>
                <div className="flex flex-wrap gap-3">
                  {data.social?.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-foreground hover:text-accent transition-colors border border-border px-4 py-2 bg-background/50 hover:border-accent uppercase"
                    >
                      <MatrixText text={social.name} triggerOnHover={true} />
                    </a>
                  ))}
                  {data.profiles?.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-foreground hover:text-accent transition-colors border border-border px-4 py-2 bg-background/50 hover:border-accent uppercase"
                    >
                      <MatrixText text={profile.name} triggerOnHover={true} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent blur-xl opacity-50 z-0 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="relative z-10 bg-card/80 backdrop-blur-md border border-border p-6 font-mono flex flex-col gap-5 shadow-2xl">
              <div className="text-[10px] md:text-xs text-accent/70 pt-1 pb-4 border-b border-border/50 flex justify-between">
                <span>NEW_TRANSMISSION.TXT</span>
                <span className="animate-pulse">[INPUT_REQUIRED]</span>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="relative group">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="IDENTIFIER (Name)"
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="ROUTING_ADDRESS (Email)"
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="PAYLOAD (Message body...)"
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-muted-foreground/50"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="group/btn relative w-full flex items-center justify-center gap-2 mt-2 bg-accent/90 text-accent-foreground px-4 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all disabled:opacity-80 shadow-[0_0_15px_rgba(var(--color-accent),0.2)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.4)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-background" />
                    <span className="text-background">Transmitting...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 animate-in zoom-in duration-300 text-background" />
                    <span className="text-background">Payload Delivered</span>
                  </>
                ) : (
                  <>
                    <span className="text-background">Execute Send</span>
                    <Send className="w-4 h-4 text-background group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
                {!isSubmitting && !isSuccess && (
                  <div className="absolute inset-0 border border-transparent group-hover/btn:border-background/50 scale-[1.02] opacity-0 group-hover/btn:scale-100 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
