import { Navigation } from "@/components/navigation"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
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
      <Impact />
      <Testimonials />
      <Footer />
    </main>
  )
}
