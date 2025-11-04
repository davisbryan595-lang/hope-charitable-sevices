import Image from "next/image"

const teamMembers = [
  {
    name: "Bishop Frank Allen",
    title: "Founder and CEO",
    bio: "Bishop Frank Allen is an Ordained minister and local pastor of a Church of God, in Portsmouth, VA. He is the Founder and CEO of Hope Charitable Services based in Portsmouth Virginia. Over 30 years ago, Bishop Allen created a neighborhood community intervention and crime prevention program for the residents of West Haven and the surrounding areas of Portsmouth.",
    image: "https://images.pexels.com/photos/6276708/pexels-photo-6276708.jpeg",
    imageAlt: "Bishop Frank Allen",
    imagePosition: "left" as const,
  },
  {
    name: "Anna",
    title: "Missionary & Volunteer Mobilization Coordinator",
    bio: "Anna is a missionary with over nine years of experience serving in different nations. Throughout her journey, she has walked alongside people from diverse cultures, helping them find healing, identity, and hope through faith. She joined HOPE Charitable Services with a passion to strengthen families, support those in recovery, and inspire young people to live with purpose. Her role includes counseling support and volunteer mobilization—because she believes that together we can rebuild our city, one life at a time.",
    image: "https://images.pexels.com/photos/23015738/pexels-photo-23015738.jpeg",
    imageAlt: "Anna",
    imagePosition: "right" as const,
  },
  {
    name: "Pastor Rosalyn Harmon",
    title: "Director of Food Outreach Services",
    bio: "Pastor Rosalyn Harmon is the founder and leader of A Women with a Silent Cry Outreach. Pastor Harmon provides natural and spiritual support such as food, hygiene products for those suffering from homelessness, substance abuse, mental illness, and domestic violence. Pastor Harmon partners with HOPE CHARITABLE SERVICES and MERCYCHEFS to provide food for seniors and our most vulnerable.",
    image: "https://images.pexels.com/photos/8817483/pexels-photo-8817483.jpeg",
    imageAlt: "Pastor Rosalyn Harmon",
    imagePosition: "left" as const,
  },
  {
    name: "Pastor Hector",
    title: "Associate Pastor",
    bio: "Pastor Hector serves at HOPE CHARITABLE SERVICES as an Associate Pastor. Pastor Hector attended Virginia State University and was ordained in 2018. He was the co-founder of a violence intervention program that directly helps mothers who have lost children to gun violence. Pastor Hector is the Director of HOPE HOUSE, a Christian home for men who are transitioning into regular housing.",
    image: "https://images.pexels.com/photos/7218328/pexels-photo-7218328.jpeg",
    imageAlt: "Pastor Hector",
    imagePosition: "right" as const,
  },
  {
    name: "Kelly Williams",
    title: "Operations Director, Sanctuary of Hope",
    bio: "Seven years ago, Kelly walked into Hope Charitable Services looking for a hot meal and a box of groceries for her and her children. Kelly had struggled for months trying to make her meager paycheck cover food, rent, utilities, and other necessities. Today, Kelly is the Assistant Director of Operations at Sanctuary of Hope, coordinating those hot meals and food.",
    image: "https://images.pexels.com/photos/32401765/pexels-photo-32401765.jpeg",
    imageAlt: "Kelly Williams",
    imagePosition: "left" as const,
  },
]

export function TeamLeadership() {
  return (
    <section className="py-20 md:py-32 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Meet the dedicated individuals leading Hope Charitable Services with compassion and purpose
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                member.imagePosition === "right" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {member.title}
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
