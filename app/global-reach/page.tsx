import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Reach - Hope Charitable Services",
  description: "Discover how Hope Charitable Services extends its reach globally, serving 27 countries and communities worldwide.",
}

export default function GlobalReach() {
  return (
    <main className="bg-white">
      <Navigation />
      <section className="py-20 md:py-32 bg-secondary text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Global Reach</h1>
            <p className="text-xl text-muted-foreground">
              Serving communities across the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Impact Worldwide</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hope Charitable Services extends its reach beyond our local community. We work with partner organizations across the United States and internationally to bring hope, resources, and support to those in need.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">27 countries served through our global partnerships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Rural poverty pockets across the United States</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Migrant camps and Native American reservations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Inner-city neighborhoods nationwide</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Network</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our CHARITABLE SUPPLY CHAIN, we partner with multiple churches and nonprofit organizations to distribute resources where they are needed most. Our network enables us to respond quickly to poverty and disaster, providing logistical support and relief services to those affected.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mt-6">
                <p className="text-foreground font-semibold">
                  We believe that through collaboration and shared commitment, we can create lasting change in communities around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
