import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ThreeFoldApproach } from "@/components/three-fold-approach"
import { SanctuaryOfHope } from "@/components/sanctuary-of-hope"
import { Impact } from "@/components/impact"
import { GetInvolved } from "@/components/get-involved"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <ThreeFoldApproach />
      <SanctuaryOfHope />
      <Impact />
      <GetInvolved />
      <Testimonials />
      <Footer />
    </main>
  )
}
