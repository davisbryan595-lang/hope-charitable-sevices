import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Impact } from "@/components/impact"
import { GetInvolved } from "@/components/get-involved"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Impact />
      <GetInvolved />
      <Testimonials />
      <Footer />
    </main>
  )
}
