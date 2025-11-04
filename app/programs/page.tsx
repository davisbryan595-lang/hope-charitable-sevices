import { Navigation } from "@/components/navigation"
import { ProgramsContent } from "@/components/programs-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs - Hope Charitable Services",
  description: "Explore our programs and initiatives designed to help those in need.",
}

export default function Programs() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">Our Programs</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive services serving every member of our community with compassion and purpose
            </p>
          </div>
        </div>
      </section>

      <ProgramsContent />
      <Footer />
    </main>
  )
}
