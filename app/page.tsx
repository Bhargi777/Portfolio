import Hero from "@/components/hero"
import Footer from "@/components/footer"
import resumeData from "../../public/resumeData.json"
import { FullResumeData } from "@/types"

export default function Page() {
  const data = resumeData as FullResumeData

  return (
    <main className="min-h-screen bg-transparent flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center pb-20">
        <Hero data={data.main} />
      </div>
      <Footer />
    </main>
  )
}
