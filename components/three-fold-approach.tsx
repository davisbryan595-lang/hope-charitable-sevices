export function ThreeFoldApproach() {
  return (
    <section className="w-full bg-gray-200 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            This is accomplished through our<br />
            <span className="text-primary">THREE FOLD APPROACH:</span>
          </h2>
        </div>

        {/* Three Fold Sections */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Charitable Services */}
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

          {/* Charitable Supply Chain */}
          <div className="space-y-6">
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

          {/* Sanctuary of Hope */}
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
        </div>
      </div>
    </section>
  )
}
