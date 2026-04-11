import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  explore: [
    { href: "/species", label: "Wildlife Species" },
    { href: "/conservation", label: "Conservation Programs" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Get In Touch" },
  ],
  initiatives: [
    { href: "/conservation#habitat", label: "Habitat Restoration" },
    { href: "/conservation#anti-poaching", label: "Anti-Poaching" },
    { href: "/conservation#marine", label: "Marine Conservation" },
    { href: "/conservation#education", label: "Community Education" },
  ],
}

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                WILDLIFESCOPE
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 text-sm leading-relaxed">
              Dedicated to protecting endangered species and preserving natural habitats for future generations.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Explore</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Initiatives</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.initiatives.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">
                  Chittagong<br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">
                  01751116452
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/80">
                  rahenurislamsowrov@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} WildlifeScope. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
