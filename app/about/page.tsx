"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function AboutPage() {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error(err))
    }, [])

    if (!data) return <LoadingScreen />

    return (
        <main className="min-h-screen bg-transparent flex flex-col justify-between">
            <div className="flex-1 mt-8">
                <About data={data.main} />
                <Experience data={data.resume} />
                <Skills data={data.resume} />
                <Education data={data.resume} />
            </div>
            <Footer />
        </main>
    )
}
