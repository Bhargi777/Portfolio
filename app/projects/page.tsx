"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => {
                    setData(json)
                }, 2500)
            })
            .catch((err) => console.error(err))
    }, [])

    if (!data) return <LoadingScreen />

    return (
        <main className="min-h-screen bg-transparent flex flex-col justify-between">
            <div className="flex-1 mt-8">
                <Projects data={data.portfolio} />
            </div>
            <Footer />
        </main>
    )
}
