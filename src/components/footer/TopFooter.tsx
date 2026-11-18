
import {
  ArrowRightLeft,
  Headset,
  HandCoins,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import React from "react";

const services = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on qualifying orders",
  },
  {
    icon: ArrowRightLeft,
    title: "Easy Returns",
    description: "Hassle-free 30 days return policy",
  },
  {
    icon: Headset,
    title: "Online Support",
    description: "We're here for you 24/7",
  },
  {
    icon: HandCoins,
    title: "Flexible Payment",
    description: "Multiple secure payment options",
  },
];

const TopFooter = () => {
  return (
    <section className="Container mt-14 pb-6">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-5 py-8 sm:px-8 lg:px-10">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-36 -left-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.08] sm:p-4 lg:rounded-none lg:px-5 ${
                  index !== 0 ? "lg:border-l lg:border-white/15" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white group-hover:text-primary">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-sm font-bold tracking-wide text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[11px] leading-relaxed text-white/65 sm:text-xs">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-white/0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TopFooter;
