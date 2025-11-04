import { Navigation } from "@/components/navigation"
import { Impact } from "@/components/impact"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

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
