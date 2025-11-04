import { Button } from "@/components/ui/button"

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
                Making Real Differences in Real Lives
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Since our founding, Hope Charitable Services has touched thousands of lives. Through dedicated programs
                and compassionate staff, we've created sustainable pathways out of hardship.
              </p>
            </div>

            {/* Impact List */}
            <div className="space-y-4">
              {[
                "7,500+ individuals provided housing assistance",
                "3,200+ youth completed our education programs",
                "5,400+ people accessed healthcare services",
                "2,100+ participants in job training",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Our Annual Report
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4">
            {[
              { number: "92%", label: "Beneficiaries Satisfied" },
              { number: "4.8★", label: "Community Rating" },
              { number: "$2.1M", label: "Annual Investment" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="bg-secondary border border-border p-6 rounded-lg hover:shadow-md transition">
                <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
