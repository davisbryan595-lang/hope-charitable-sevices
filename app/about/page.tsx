import { Navigation } from "@/components/navigation"
import { TeamLeadership } from "@/components/team-leadership"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Hope Charitable Services",
  description: "Learn about Hope Charitable Services and our mission to serve communities in need.",
}

export default function About() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">About Hope Charitable Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Dedicated to serving communities in need with compassion, integrity, and purpose
            </p>
          </div>
        </div>
      </section>

      <TeamLeadership />
      <Footer />
    </main>
  )
}
