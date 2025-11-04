import Link from "next/link"
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react"

export function ContactCard() {
  return (
    <section className="w-full bg-secondary text-foreground py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Phone</p>
                  <Link href="tel:+17573930664" className="text-muted-foreground hover:text-foreground transition">
                    (757) 393-0664
                  </Link>
                </div>
              </div>

              {/* Fax */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Fax</p>
                  <p className="text-muted-foreground">(815) 605-8060</p>
                </div>
              </div>

              {/* Text Message */}
              <div className="flex gap-4">
                <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Text Message</p>
                  <Link href="sms:+17572555535" className="text-muted-foreground hover:text-foreground transition">
                    (757) 255-5535
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Location</h2>
            
            <div className="space-y-6">
              {/* Physical Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Physical Address</p>
                  <p className="text-muted-foreground leading-relaxed">
                    3516 Winchester Drive<br />
                    Portsmouth, VA 23707-0816
                  </p>
                </div>
              </div>

              {/* Mailing Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Mailing Address</p>
                  <p className="text-muted-foreground leading-relaxed">
                    P.O. Box 7816<br />
                    Portsmouth, VA 23707-0816
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
