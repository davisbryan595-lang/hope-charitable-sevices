import Image from "next/image"

export function ThreeFoldApproach() {
  return (
    <section className="w-full bg-gray-200 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            This is accomplished through our<br />
            <span className="text-primary">THREE FOLD APPROACH:</span>
          </h2>
        </div>

        {/* Charitable Services - Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">CHARITABLE SERVICES</h3>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="font-semibold">Bishop Frank Allen- Executive Director</p>
              </div>
              <ul className="space-y-2">
                <li>Hope House</li>
                <li>Hope Empowerment Sessions</li>
                <li>Summer Day Camp</li>
                <li>Women of a Silent Cry Food Outreach</li>
                <li>Hope Regional Distribution Outreach</li>
              </ul>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/6646951/pexels-photo-6646951.jpeg"
              alt="Diverse volunteers posing in front of a van, ready to help the community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Charitable Supply Chain - Image Left */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.pexels.com/photos/5953713/pexels-photo-5953713.jpeg"
              alt="Worker in a cold storage facility with shelves of perishable goods"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-bold text-foreground">CHARITABLE SUPPLY CHAIN</h3>
            <div className="space-y-4 text-foreground text-sm leading-relaxed">
              <p>
                Through our CHARITABLE SUPPLY CHAIN we distribute resources from our warehouse to those affected by poverty and disaster. We also provide logistical support and services for relief and recovery exercises. This is done through our direct service programs in our inner-city community and through partnerships with multiple churches and nonprofit organizations across our region, in rural poverty pockets, migrant camps, inner cities and Native American reservations across the United States. We reach into 27 of the poorest countries in the world.
              </p>
              <div className="space-y-2 font-semibold">
                <p>We distribute:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Food</li>
                  <li>• Clothing</li>
                  <li>• Hygiene Items</li>
                  <li>• Household Goods</li>
                  <li>• Furniture</li>
                  <li>• School Supplies</li>
                  <li>• Building Materials</li>
                  <li>• Medical Supplies</li>
                  <li>• And more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sanctuary of Hope - Image Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">SANCTUARY OF HOPE</h3>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="font-semibold">Kelly Williams- Operations Director</p>
              </div>
              <ul className="space-y-2">
                <li>Coat Drive</li>
                <li>Clothing Drive</li>
                <li>Food Distribution & Hope Kitchen</li>
              </ul>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/5875272/pexels-photo-5875272.jpeg"
              alt="Woman praying with another person's hand on her shoulder, expressing faith and spirituality"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
