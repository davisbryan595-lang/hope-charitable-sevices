import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-lg">Hope</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming lives through compassion, community, and opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Annual Report
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">hello@hope.org</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Hope Street,
                  <br />
                  Community, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © 2025 Hope Charitable Services. All rights reserved. Made with compassion.
          </p>
        </div>
      </div>
    </footer>
  )
}
