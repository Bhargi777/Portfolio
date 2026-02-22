"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
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
                <Contact data={data.main} />
            </div>
            <Footer />
        </main>
    )
}
