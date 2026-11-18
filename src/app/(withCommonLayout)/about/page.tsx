
import Navbar from "@/src/components/header/Navbar";
import React from "react";


const sections = [
  {
    number: "01",
    title: "E-Commerce Excellence",
    description:
      "At the core of ZARGANZ's success is its robust e-commerce platform. The website and app serve as virtual storefronts, showcasing the latest trends alongside timeless classics. Customers can effortlessly navigate various categories, from casual wear to formal attire, using convenient filtering options for size, color, and style. ZARGANZ's user-friendly interface and secure payment gateways ensure a smooth and enjoyable online shopping experience.",
  },
  {
    number: "02",
    title: "Immersive Experience Zones Across Multiple Outlets",
    description:
      "Expanding beyond the digital space, ZARGANZ now operates 8 physical outlets known as Experience Zones. These outlets offer customers increased accessibility and convenience, enabling them to personally assess the quality and craftsmanship of products across various locations. This expansion significantly enhances the customer shopping experience by providing more opportunities to touch, feel, and try on items before purchasing. By broadening its physical presence, ZARGANZ strengthens its commitment to customer satisfaction and accessibility.",
  },
  {
    number: "03",
    title: "In-House Production",
    description:
      "A distinctive feature of ZARGANZ is its vertical integration model, with the brand owning and operating its production facility. This approach guarantees strict quality control and meticulous oversight throughout the manufacturing process—from sourcing raw materials to final stitching. By managing production internally, ZARGANZ ensures premium quality products at competitive prices, delivering exceptional value.",
  },
  {
    number: "04",
    title: "Diverse Order Channels",
    description:
      "Understanding diverse customer needs, ZARGANZ efficiently handles various order types—from individual retail purchases and bulk orders for special events to corporate orders for branded merchandise. The streamlined processes for managing these diverse order channels underscore ZARGANZ's versatility and commitment to being a comprehensive clothing destination.",
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar
        tranlateBg="bg-red-600"
        navMainStyle="fixed text-[#262626] bg-white z-50 w-full"
        titleStyle="text-[#262626]"
        iconStyle="text-[#262626]"
        logoStyle="left-1/2 text-[#262626] lg:scale-30 scale-50"
        logoText2="lg:text-8xl text-4xl font-semibold tracking-[26px]"
      />

      <div className="Container pb-16 pt-28">
        {/* Intro */}
        <section className="border-b border-gray-200 pb-8">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[3px] text-[#AC0000]">
            About ZARGANZ
          </p>

          <div className="grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
            <h1 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-[#262626] sm:text-4xl lg:text-5xl">
              A Holistic E-Commerce
              <span className="block text-[#AC0000]">Clothing Brand.</span>
            </h1>

            {/* <p className="text-xs leading-6 text-gray-500 md:pb-1">
              Redefining the way you discover, experience, and shop fashion.
              Bringing online convenience and real-world experiences together.
            </p> */}
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="grid gap-6 py-8 md:grid-cols-[180px_1fr] lg:gap-16">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
              Our Story
            </span>
            <div className="mt-3 h-[2px] w-9 bg-[#AC0000]" />
          </div>

          <p className="max-w-3xl text-sm leading-8 text-gray-600">
            In the dynamic world of e-commerce, ZARGANZ stands out as a
            comprehensive clothing brand, seamlessly blending online
            convenience with tangible in-person experiences. Operating through
            a user-friendly website and a mobile application, ZARGANZ caters to
            a diverse audience with an extensive range of clothing items,
            offering customers both virtual and physical shopping experiences.
          </p>
        </section>

        {/* Brand Highlights */}
        <section className="border-t border-gray-200">
          {sections.map((section) => (
            <div
              key={section.number}
              className="group grid gap-3 border-b border-gray-200 py-6 transition-colors duration-300 hover:bg-white/70 md:grid-cols-[100px_1fr] md:gap-8 lg:py-8"
            >
              <div className="flex items-start gap-3">
                <span className="font-serif text-2xl text-[#AC0000]">
                  {section.number}
                </span>
                <span className="mt-2 h-px w-6 bg-gray-300 transition-all duration-300 group-hover:w-10 group-hover:bg-[#AC0000]" />
              </div>

              <div className="max-w-3xl">
                <h2 className="mb-3 font-serif text-xl font-medium text-[#262626] transition-colors group-hover:text-[#AC0000] sm:text-2xl">
                  {section.title}
                </h2>

                <p className="text-sm leading-7 text-gray-500">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </section>

    
      </div>
    </main>
  );
};

export default Page;
