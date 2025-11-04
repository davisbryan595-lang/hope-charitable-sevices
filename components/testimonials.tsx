import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Program Participant",
    content:
      "Hope Charitable Services completely transformed my life. The support and guidance I received helped me rebuild and find stability.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Community Partner",
    content:
      "Working with Hope has been incredible. Their dedication to helping others is genuine and their impact is measurable.",
    stars: 5,
  },
  {
    name: "Emma Williams",
    role: "Volunteer",
    content:
      "The most rewarding experience of my life. Every day, I witness the real change this organization brings to the community.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Voices of Hope</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Hear from the people whose lives have been touched by our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border border-border bg-background hover:border-primary transition">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
