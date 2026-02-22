"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface ResumeData {
  main: any
  resume: any
  portfolio: any
}

export default function Page() {
  const [data, setData] = useState<ResumeData | null>(null)

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("[v0] Failed to load resume data:", err))
  }, [])

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="font-mono text-sm text-accent animate-in fade-in zoom-in duration-500 relative z-10 flex flex-col items-center gap-6">
          <Loader2 className="w-10 h-10 animate-spin" />
          <pre className="text-center tracking-widest text-xs md:text-sm shadow-lg shadow-accent/20 border border-accent/20 p-6 bg-background/50 backdrop-blur-md">
            {`╔════════════════════════╗
║ INITIALIZING SYSTEM... ║
╚════════════════════════╝`}
          </pre>
          <div className="h-1 w-48 bg-border overflow-hidden rounded-full">
            <div className="h-full bg-accent animate-[waving_2s_ease-in-out_infinite] w-1/2" style={{ animationName: 'progress' }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero data={data.main} />
      <About data={data.main} />
      <Experience data={data.resume} />
      <Projects data={data.portfolio} />
      <Skills data={data.resume} />
      <Education data={data.resume} />
      <Contact data={data.main} />
      <Footer />
    </main>
  )
}
