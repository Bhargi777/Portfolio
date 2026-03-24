import Projects from "@/components/projects"
import Footer from "@/components/footer"
import resumeData from "@/public/resumeData.json"
import { FullResumeData } from "@/types"

export default function ProjectsPage() {
    const data = resumeData as FullResumeData

    return (
        <main className="min-h-screen bg-transparent flex flex-col justify-between">
            <div className="flex-1 mt-8">
                <Projects data={data.portfolio} />
            </div>
            <Footer />
        </main>
    )
}
