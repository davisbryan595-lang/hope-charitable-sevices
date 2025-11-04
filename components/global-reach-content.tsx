import Image from "next/image"

const globalReachSections = [
  {
    title: "Hope Beyond Our Community",
    content: `Through our Charitable Supply Chain we distribute resources from our warehouse to those affected by poverty and disaster. We share goods with ministries and nonprofit organizations in our region that serve the needy. We provide logistical support and send goods to developing countries globally. We support work in rural poverty areas, inner cities, Native American reservations and migrant communities across the United States and into many of the poorest countries in the world.

The supply chain is also our workforce development program where we train individuals from the inner city in workplace valuable skills and behaviors.

During times of disaster we collect and ship emergency relief aid to disaster areas, both in America and abroad, as well as coordinating donations from churches in the USA.`,
    image: "https://images.pexels.com/photos/6646881/pexels-photo-6646881.jpeg",
    imageAlt: "Volunteers organizing and distributing aid",
    imagePosition: "right" as const,
  },
  {
    title: "Supporting Christians in the Holy Land and Middle East",
    content: `We have shipped multiple forty-foot containers filled with relief goods to Christian humanitarian organizations in countries such as: Syria, Iraq, Israel, Palestine, and Egypt. While there are many international relief organizations that bring aid to the Jews and Muslims, very few offer support to Christians. Our commitment is to ensure that vulnerable Christian communities receive the support and resources they desperately need.`,
    image: "https://images.pexels.com/photos/15804050/pexels-photo-15804050.jpeg",
    imageAlt: "Rescue workers celebrating saving lives in Syria",
    imagePosition: "left" as const,
  },
  {
    title: "Hope for Lumberton",
    content: `Lumberton is a poverty pocket in the deep rural southern part of North Carolina. Both hurricane Matthew and Florence devastated this area and left it struggling to recover. Hope Charitable Services has been a significant part of the relief efforts for both of these disasters. Through our dedicated efforts, we've helped families rebuild their homes and lives, providing hope and resources during their most critical times of need.`,
    image: "https://images.pexels.com/photos/1344265/pexels-photo-1344265.jpeg",
    imageAlt: "Disaster relief recovery efforts",
    imagePosition: "right" as const,
  },
  {
    title: "Jamaica",
    content: `Over the years we have hosted mission trips to Jamaica including crusades, children's ministry, feeding programs, and community outreach. We have frequently sent humanitarian relief and built homes for the poor. Our work in Jamaica reflects our belief in the power of compassion and community, transforming lives and creating opportunities for those in the most vulnerable communities.`,
    image: "https://images.pexels.com/photos/9037205/pexels-photo-9037205.jpeg",
    imageAlt: "Volunteers engaged in community service",
    imagePosition: "left" as const,
  },
]

export function GlobalReachContent() {
  return (
    <section className="py-20 md:py-32 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Global Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Extending compassion and hope beyond our community to reach those in need worldwide
          </p>
        </div>

        {/* Global Reach Sections */}
        <div className="space-y-20">
          {globalReachSections.map((section, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                section.imagePosition === "right" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {section.title}
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
