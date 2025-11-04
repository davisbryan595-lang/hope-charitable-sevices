import { Card } from "@/components/ui/card"
import { Heart, Users, BookOpen, Home } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Healthcare Support",
    description: "Providing access to medical care and wellness programs for underserved communities.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Building strong community bonds through mentorship, workshops, and support groups.",
  },
  {
    icon: BookOpen,
    title: "Education & Training",
    description: "Offering skills training and educational opportunities for personal growth.",
  },
  {
    icon: Home,
    title: "Housing Assistance",
    description: "Supporting individuals and families in finding safe, stable housing solutions.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We provide comprehensive support across multiple areas, ensuring holistic care for those we serve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 border border-border bg-background hover:border-primary transition hover:shadow-lg">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
