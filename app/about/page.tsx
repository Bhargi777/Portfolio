import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Footer from "@/components/footer"
import resumeData from "@/public/resumeData.json"
import { FullResumeData } from "@/types"

export default function AboutPage() {
    const data = resumeData as FullResumeData

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
