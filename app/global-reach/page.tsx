import { Navigation } from "@/components/navigation"
import { GlobalReachContent } from "@/components/global-reach-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Reach - Hope Charitable Services",
  description: "Discover how Hope Charitable Services extends its reach globally, serving communities in poverty and disaster worldwide.",
}

export default function GlobalReach() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">Global Reach</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Extending compassion and hope across borders to serve communities in need worldwide
            </p>
          </div>
        </div>
      </section>

      <GlobalReachContent />
      <Footer />
    </main>
  )
}
