"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Ff43b39b3050e4088ad38f429ea8c0a4b%2F724f8b38ced94f8b983285dba5410942?format=webp&width=800"
              alt="Hope Charitable Services Logo"
              width={120}
              height={32}
              className="h-8 w-auto logo-blend-darken"
              priority
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline">Hope</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About Us
            </Link>
            <Link href="/global-reach" className="text-sm text-muted-foreground hover:text-foreground transition">
              Global Reach
            </Link>
            <Link href="/programs" className="text-sm text-muted-foreground hover:text-foreground transition">
              Programs
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact Us
            </Link>
            <Link href="/donate" asChild>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Donate Today
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Home
            </Link>
            <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              About Us
            </Link>
            <Link href="/global-reach" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Global Reach
            </Link>
            <Link href="/programs" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Programs
            </Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Contact Us
            </Link>
            <Link href="/donate" className="block">
              <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Donate Today
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
