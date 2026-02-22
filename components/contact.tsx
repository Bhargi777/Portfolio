interface ContactProps {
  data: {
    contactmessage: string
    email: string
    address: {
      city: string
      state: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-4 md:mb-6 flex flex-col items-center overflow-x-auto">
          <pre className="text-[10px] md:text-xs">╔══════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold">║ CONTACT ║</pre>
          <pre className="text-[10px] md:text-xs">╚══════════════════════════════╝</pre>
        </div>

        <div className="border-2 border-border bg-card p-4 md:p-8 text-center hover:border-accent transition-colors duration-300">
          <div className="font-mono text-[10px] md:text-sm space-y-3 md:space-y-4">
            <p className="text-muted-foreground leading-relaxed">{data.contactmessage}</p>

            <div className="pt-3 md:pt-4 border-t border-border">
              <div className="text-accent mb-1 md:mb-2 text-[9px] md:text-sm">┌──────────────┐</div>
              <a
                href={`mailto:${data.email}`}
                className="text-foreground hover:text-accent transition-colors underline break-all block"
              >
                {data.email}
              </a>
              <div className="text-accent mt-1 md:mt-2 text-[9px] md:text-sm">└──────────────┘</div>
            </div>

            <div className="text-muted-foreground text-[9px] md:text-xs">
              {data.address.city}, {data.address.state}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
