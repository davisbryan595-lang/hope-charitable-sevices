import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ThreeFoldApproach } from "@/components/three-fold-approach"
import { SanctuaryOfHope } from "@/components/sanctuary-of-hope"
import { ContactCard } from "@/components/contact-card"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Hope Charitable Services",
  description: "Hope for Everyone. Hope Charitable Services provides essential services and support to those in need, creating pathways to dignity and independence.",
}

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <ThreeFoldApproach />
      <SanctuaryOfHope />
      <ContactCard />
      <Footer />
    </main>
  )
}
