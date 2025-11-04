import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Our Vision */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Changing the fabric of our inner city and the world beyond one family at a time
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/29496186/pexels-photo-29496186.jpeg"
              alt="Community families united in transformation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.pexels.com/photos/20853660/pexels-photo-20853660.jpeg"
              alt="Community workshop with skills training and development"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower individuals with the necessary skills to transform their own community
            </p>
          </div>
        </div>

        {/* Join Us */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Join Us!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With faith and love, we can rebuild hope in Portsmouth feeding the hungry, caring for families, and restoring lives. Join us and be part of the change.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
              Click here!
            </Button>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/27023183/pexels-photo-27023183.jpeg"
              alt="Family in church setting with warmth and love"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
