
"use client";

import Navbar from "@/src/components/header/Navbar";
import React from "react";
import blogImage from "@/src/assets/blogs/slickvscottom.webp";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const sections = [
    {
      title: "E-Commerce Excellence",
      content:
        "At the core of ZARGANZ's success is its robust e-commerce platform. The website and app serve as virtual storefronts, showcasing the latest trends alongside timeless classics. Customers can effortlessly navigate various categories, from casual wear to formal attire, using convenient filtering options for size, color, and style. ZARGANZ's user-friendly interface and secure payment gateways ensure a smooth and enjoyable online shopping experience.",
    },
    {
      title: "Immersive Experience Zones Across Multiple Outlets",
      content:
        "Expanding beyond the digital space, ZARGANZ now operates 8 physical outlets known as Experience Zones. These outlets offer customers increased accessibility and convenience, enabling them to personally assess the quality and craftsmanship of products across various locations. This expansion significantly enhances the customer shopping experience by providing more opportunities to touch, feel, and try on items before purchasing. By broadening its physical presence, ZARGANZ strengthens its commitment to customer satisfaction and accessibility.",
    },
    {
      title: "In-House Production",
      content:
        "A distinctive feature of ZARGANZ is its vertical integration model, with the brand owning and operating its production facility. This approach guarantees strict quality control and meticulous oversight throughout the manufacturing process—from sourcing raw materials to final stitching. By managing production internally, ZARGANZ ensures premium quality products at competitive prices, delivering exceptional value.",
    },
    {
      title: "Diverse Order Channels",
      content:
        "Understanding diverse customer needs, ZARGANZ efficiently handles various order types—from individual retail purchases and bulk orders for special events to corporate orders for branded merchandise. The streamlined processes for managing these diverse order channels underscore ZARGANZ's versatility and commitment to being a comprehensive clothing destination.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <article className="Container pb-16 pt-24 lg:pt-28">
        {/* Back Navigation */}
        <Link
          href="/blogs"
          className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-[#AC0000]"
        >
          <ArrowLeft size={15} />
          Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mx-auto mb-8 max-w-4xl text-center">
          <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#AC0000]">
            Brand Story
          </span>

          <h1 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
            ZARGANZ: A Holistic E-Commerce Clothing Brand
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            Discover how ZARGANZ combines digital convenience, physical
            experiences, and in-house production to create a complete fashion
            destination.
          </p>

          <div className="mt-5 flex items-center justify-center gap-5 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} />
              Brand Story
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 size={13} />
              5 min read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mx-auto aspect-[16/8] max-h-[440px] w-full max-w-5xl overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={blogImage}
            alt="ZARGANZ fashion brand"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[190px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l-2 border-[#AC0000] pl-4">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
                In this article
              </p>

              <nav className="flex flex-col gap-3">
                <a href="#introduction" className="text-xs text-gray-500 transition hover:text-[#AC0000]">
                  Introduction
                </a>
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index}`}
                    className="text-xs leading-5 text-gray-500 transition hover:text-[#AC0000]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            <section id="introduction" className="mb-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-[#AC0000]">
                The ZARGANZ Story
              </p>

              <p className="text-sm leading-8 text-gray-600">
                In the dynamic world of e-commerce, ZARGANZ stands out as a
                comprehensive clothing brand, seamlessly blending online
                convenience with tangible in-person experiences. Operating
                through a user-friendly website and a mobile application,
                ZARGANZ caters to a diverse audience with an extensive range of
                clothing items, offering customers both virtual and physical
                shopping experiences.
              </p>
            </section>

            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index}`}
                className="mb-8 border-t border-gray-200 pt-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#AC0000]">
                    0{index + 1}
                  </span>
                  <div className="h-px w-7 bg-[#AC0000]/40" />
                </div>

                <h2 className="mb-3 font-serif text-xl font-semibold text-[#262626] sm:text-2xl">
                  {section.title}
                </h2>

                <p className="text-sm leading-8 text-gray-600">
                  {section.content}
                </p>
              </section>
            ))}

            {/* Article Footer */}
            <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
                ZARGANZ Journal
              </span>

              <Link
                href="/blogs"
                className="text-xs font-semibold text-[#AC0000] transition hover:underline"
              >
                More Stories →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Page;
