import Image from "next/image"

const programsSections = [
  {
    title: "Children's and Teen's Services",
    content: `Summer Day Camp: Every summer, children in our community face a new range of challenges. Time spent in school becomes time spent wandering increasingly dangerous and resource-deprived neighborhoods. Protecting our children from community violence and food insecurity while academically enriching and empowering our kids is the goal of this program.

Spanning eight weeks, our programming includes reading and STEM classes led by talented tutors, fine arts, and physical activities. Almost every year, we raise enough money to provide camp free of charge to our community.

Before/After School: Currently on hiatus, our Before/After School program catered to hard-working parents of our community whose schedules did not align with the school system's. Through this program, we were able to provide free meals and access to tutors. Students enrolled in the program consistently grew in their academic progress and SOL scores.

HOPE strives to provide year-round services to the young people of our community, including toy drives at Christmas, year-round relationship building with families in order to better advocate for them with public services, and encourage a culture of volunteerism and active kindness.`,
    image: "https://images.pexels.com/photos/8033812/pexels-photo-8033812.jpeg",
    imageAlt: "Children learning and discussing together outdoors",
    imagePosition: "right" as const,
  },
  {
    title: "Community Outreach",
    content: `Every Tuesday the Urban Outreach Center provides a ministry to the homeless, those living in low-income households, and many struggling with addiction and mental health. We provide a hot meal and groceries to all who attend. In the autumn and winter we distribute coats to the poor and blankets to the homeless. We partner with volunteers from local churches to provide a meal at Thanksgiving and Christmas, as well as toys for the children.

Iron Sharpens Iron, a men's group at Sanctuary of Hope, meets each Wednesday morning for breakfast and bible study to support men in the community. This unique program provides men the opportunity to give back and encourage those in need. Many in this group have overcome the same challenges as those they seek to serve.`,
    image: "https://images.pexels.com/photos/6646904/pexels-photo-6646904.jpeg",
    imageAlt: "Volunteer loading food and aid supplies for community distribution",
    imagePosition: "left" as const,
  },
  {
    title: "Hope House",
    content: `HOPE HOUSE is a transitional, rehabilitative intentional living community for at-risk men in the community. Open to a diverse range of ages, this service targets men that face chronic homelessness, substance abuse disorders, un-/under-employment, or other factors that prevent them from thriving on their own.

Using a cost-share approach, mandated community service, and organized sharing sessions, Hope House encourages personal, social, and fiscal development and cooperation among housemates in order to assist those who desire to improve their lives in spite of risk factors. Our holistic approach combines housing stability with comprehensive support to help men rebuild and transform their lives.`,
    image: "https://images.pexels.com/photos/6740523/pexels-photo-6740523.jpeg",
    imageAlt: "Community members sharing a meal together",
    imagePosition: "right" as const,
  },
  {
    title: "Charitable Supply Chain",
    content: `The arterial support of our organization, we could not support our regular, weekly grocery and meal distribution or our multiple giving events without our robust network of warehouse workers and volunteers to move enormous amounts of in-kind goods. This has allowed us to not only mitigate the food deserts we serve in this city, but also to provide disaster relief throughout the nation.

Our supply chain enabled us to swiftly relieve the burden of Covid-19 throughout the pandemic by supplying food, masks, sanitizers, and other necessary products when they were at low availability. This critical infrastructure demonstrates our commitment to serving those in need with efficiency, compassion, and dedication.`,
    image: "https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg",
    imageAlt: "Warehouse worker managing storage and distribution of goods",
    imagePosition: "left" as const,
  },
]

export function ProgramsContent() {
  return (
    <section className="py-20 md:py-32 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive services designed to serve every member of our community
          </p>
        </div>

        {/* Programs Sections */}
        <div className="space-y-20">
          {programsSections.map((section, index) => (
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
