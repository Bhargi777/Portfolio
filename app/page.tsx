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

import { LoadingScreen } from "@/components/loading-screen"

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
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-transparent flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center pb-20">
        <Hero data={data.main} />
      </div>
      <Footer />
    </main>
  )
}
