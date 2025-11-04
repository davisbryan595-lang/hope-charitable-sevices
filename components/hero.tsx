import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Hope for <span className="text-primary">Everyone</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                At Hope Charitable Services, we believe in the power of compassion. We provide essential services and
                support to those in need, creating pathways to dignity, independence, and renewed hope.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Support Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">15K+</p>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-sm text-muted-foreground">Years Active</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image src="/diverse-community-helping-each-other-smiling.jpg" alt="Hope Charitable Services" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
