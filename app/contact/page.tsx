import { Navigation } from "@/components/navigation"
import { ContactCard } from "@/components/contact-card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions or want to learn more about how Hope Charitable Services can help? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Quick Contact Info</h2>
              
              <div className="space-y-6">
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+17573930664" className="text-primary hover:opacity-80 transition">
                    (757) 393-0664
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Text Message</h3>
                  <a href="sms:+17572555535" className="text-primary hover:opacity-80 transition">
                    (757) 255-5535
                  </a>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Fax</h3>
                  <p className="text-muted-foreground">(815) 605-8060</p>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCard />
      <Footer />
    </main>
  )
}
