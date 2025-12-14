import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61566564086102", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t relative overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20vw] font-bold font-headline leading-none whitespace-nowrap">
          ODD STUDIO
        </span>
      </div>

      <div className="container py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
                alt="Odd Studio Logo"
                width={140}
                height={42}
                className="h-10 w-auto"
                data-ai-hint="logo design"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A creative agency helping brands find their voice and tell their
              story through bold visuals and strategic thinking.
            </p>
          </div>

          <div>
            <h3 className="font-bold font-headline text-lg mb-6">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline text-lg mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-4">
              contact@oddstudiovision.com
            </p>
            <p className="text-muted-foreground mb-6">+88 01984-597890</p>
            <div className="flex gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Odd Studio. All rights reserved.
          </p>
          <p>Designed & Developed by M K Abir.</p>
        </div>
      </div>
    </footer>
  );
}
