import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Gift, Users, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate Today - Hope Charitable Services",
  description: "Make a difference by donating to Hope Charitable Services. Your generosity directly impacts lives in our community.",
}

export default function Donate() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">Make a Difference</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your generosity directly impacts lives. Support Hope Charitable Services and help us create pathways to dignity and independence for those in need.
            </p>
            <div className="pt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how your donation makes a real difference in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Impact Item 1 */}
            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="flex justify-center">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">$25 Donation</h3>
              <p className="text-muted-foreground">
                Provides a nutritious meal for one family in need
              </p>
            </div>

            {/* Impact Item 2 */}
            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="flex justify-center">
                <Gift className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">$50 Donation</h3>
              <p className="text-muted-foreground">
                Provides essential supplies and care packages
              </p>
            </div>

            {/* Impact Item 3 */}
            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="flex justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">$100 Donation</h3>
              <p className="text-muted-foreground">
                Supports job training and skill development programs
              </p>
            </div>

            {/* Impact Item 4 */}
            <div className="bg-secondary p-8 rounded-lg text-center space-y-4">
              <div className="flex justify-center">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">$250+ Donation</h3>
              <p className="text-muted-foreground">
                Provides long-term support and ongoing assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ways to Give</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Method 1 */}
            <div className="bg-background p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Online Donation</h3>
              <p className="text-muted-foreground">
                Quick and secure. Donate using your credit card or bank account.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
                Donate Online
              </Button>
            </div>

            {/* Method 2 */}
            <div className="bg-background p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Mail a Check</h3>
              <p className="text-muted-foreground">
                Send a check to our mailing address. Please include a note with your contact information.
              </p>
              <div className="text-sm text-muted-foreground space-y-2 pt-4">
                <p className="font-semibold">P.O. Box 7816</p>
                <p>Portsmouth, VA 23707-0816</p>
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-background p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Phone Donation</h3>
              <p className="text-muted-foreground">
                Call us to make a donation over the phone. Our team is ready to assist you.
              </p>
              <a href="tel:+17573930664" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Support Hope Charitable Services?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Transparent & Accountable</h3>
                    <p className="text-muted-foreground">We're committed to transparency in how we use your donations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Direct Impact</h3>
                    <p className="text-muted-foreground">Your donation directly supports those in our community.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tax Deductible</h3>
                    <p className="text-muted-foreground">We're a registered nonprofit organization. Your donation is tax deductible.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Making a Difference</h3>
                    <p className="text-muted-foreground">Together, we're creating lasting change in our community.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Numbers Speak</h3>
              
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <p className="text-4xl font-bold text-primary">15K+</p>
                  <p className="text-muted-foreground">Lives Impacted</p>
                </div>

                <div className="border-b border-border pb-4">
                  <p className="text-4xl font-bold text-primary">8+</p>
                  <p className="text-muted-foreground">Years of Service</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-primary">27</p>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:opacity-90">
                Make Your Donation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
