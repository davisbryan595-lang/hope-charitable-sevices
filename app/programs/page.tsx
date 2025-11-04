import { Navigation } from "@/components/navigation"
import { GetInvolved } from "@/components/get-involved"
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
      <GetInvolved />
      <Footer />
    </main>
  )
}
