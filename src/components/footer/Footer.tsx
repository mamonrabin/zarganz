
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

import { playfairDisplay } from "@/src/app/font";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Shop", href: "/shop" },
    { name: "Blogs", href: "/blogs" },
    { name: "Our Store", href: "/store" },
    { name: "FAQ", href: "/faq" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Order Policy", href: "/order-policy" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1C1C1C] text-white">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#AC0000]/10 blur-[120px]" />

      <div className="Container relative">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">

          {/* Brand Information */}
          <div>
            <Link href="/" className="inline-block">
              <h2
                className={`${playfairDisplay.className} text-3xl font-bold tracking-[3px]`}
              >
                ZARGANZ<span className="text-[#AC0000]">.</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Discover timeless style and modern elegance. We bring you
              carefully selected fashion designed to make every moment special.
            </p>

            {/* Contact Information */}
            <div className="mt-7 flex flex-col gap-4">

              <div className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
                <MapPin size={17} className="shrink-0 text-[#AC0000]" />
                <span>Mirpur-1, Dhaka-1206, Bangladesh</span>
              </div>

              <a
                href="tel:+8801746770324"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone size={17} className="text-[#AC0000]" />
                +8801746770324
              </a>

              <a
                href="mailto:almamon757@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail size={17} className="text-[#AC0000]" />
                almamon757@gmail.com
              </a>

            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Our Company
            </h3>

            <ul className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#AC0000] opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[2px]">
              Customer Care
            </h3>

            <ul className="flex flex-col gap-1">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#AC0000] opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[2px]">
              Stay Connected
            </h3>

            <p className="text-sm leading-7 text-white/50">
              Subscribe to receive updates, access to exclusive deals, and
              more.
            </p>

            <form className="mt-6">
              <div className="flex items-center rounded-lg border border-white/15 bg-white/[0.04] p-1.5 transition-colors focus-within:border-[#AC0000]">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-11 shrink-0 items-center justify-center rounded-md bg-[#AC0000] text-white transition-all duration-300 hover:bg-white hover:text-[#AC0000]"
                >
                  <Send size={17} />
                </button>
              </div>
            </form>

            <p className="mt-3 text-[11px] text-white/30">
              Join our newsletter for exclusive updates.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                Follow Our Journey
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#AC0000] hover:bg-[#AC0000] hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
