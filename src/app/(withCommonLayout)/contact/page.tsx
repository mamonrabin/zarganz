
import { FaPhone} from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

import ContactForm from "@/src/form/ContactForm";
import Navbar from "@/src/components/header/Navbar";

export const metadata: Metadata = {
  title: "ZARGANZ | Contact Us",
  description: "Get in touch with ZARGANZ. We're here to help.",
};

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

      <div className="Container pb-12 pt-28">
        {/* Page Heading */}
        <div className="mb-9 border-b border-gray-200 pb-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#AC0000]">
            We&lsquo;d Love to Hear From You
          </p>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h1 className="font-serif text-3xl font-medium text-[#262626] sm:text-4xl">
              Get in <span className="text-[#AC0000]">Touch.</span>
            </h1>

            <p className="max-w-sm text-xs leading-6 text-gray-500">
              Have a question, need assistance, or want to know more about
              ZARGANZ? Send us a message.
            </p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Contact Form */}
          <section className="rounded-md border border-gray-200 bg-white p-5 sm:p-7">
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#AC0000]">
                Contact Form
              </span>

              <h2 className="mt-2 font-serif text-2xl text-[#262626]">
                Send Us a Message
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Fill in your details and our team will get back to you.
              </p>
            </div>

            <ContactForm />
          </section>

          {/* Contact Information */}
          <section className="flex flex-col">
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#AC0000]">
                Contact Information
              </span>

              <h2 className="mt-2 font-serif text-2xl text-[#262626]">
                Let&#39;s Connect
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Reach out through any of the channels below. We&apos;re always
                happy to assist you.
              </p>
            </div>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex gap-4 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#AC0000]/10 text-[#AC0000]">
                  <FaPhone size={15} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#262626]">
                    Phone Number
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    General Inquiries
                  </p>
                  <a
                    href="tel:+8801746770324"
                    className="mt-1 inline-block text-sm text-[#262626] transition hover:text-[#AC0000]"
                  >
                    +880 1746-770324
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#AC0000]/10 text-[#AC0000]">
                  <Mail size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#262626]">
                    Email Address
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    General Support
                  </p>
                  <a
                    href="mailto:almamon757@gmail.com"
                    className="mt-1 inline-block text-sm text-[#262626] transition hover:text-[#AC0000]"
                  >
                    almamon757@gmail.com
                  </a>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-4 border-b border-gray-200 pb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#AC0000]/10 text-[#AC0000]">
                  <BiSupport size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#262626]">
                    Customer Support
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    We&lsquo;re here to help with your orders and queries.
                  </p>
                  <a
                    href="mailto:almamon757@gmail.com"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-[#262626] transition hover:text-[#AC0000]"
                  >
                    Contact Support <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Shopping Hours */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#AC0000]/10 text-[#AC0000]">
                  <Clock3 size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#262626]">
                    Shopping Hours
                  </h3>
                  <p className="mt-2 text-xs text-gray-500">
                    Saturday — Thursday
                    <span className="ml-2 font-medium text-[#262626]">
                      9 AM – 5 PM
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Friday
                    <span className="ml-2 font-medium text-[#262626]">
                      Closed
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Location Highlight */}
            <div className="mt-7 flex items-center gap-3 rounded-sm bg-[#1C1C1C] p-4 text-white">
              <MapPin size={20} className="shrink-0 text-[#E05A5A]" />
              <div>
                <p className="text-xs font-semibold">Visit Our Location</p>
                <p className="mt-1 text-[11px] text-white/60">
                  Mirpur 1, Dhaka, Bangladesh
                </p>
              </div>
              <ArrowUpRight size={16} className="ml-auto text-white/60" />
            </div>
          </section>
        </div>

        {/* Google Map */}
        <section className="mt-9">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-serif text-xl text-[#262626]">
              Find Us on Map
            </h2>
            <span className="text-[10px] uppercase tracking-wider text-gray-400">
              Mirpur 1, Dhaka
            </span>
          </div>

          <div className="h-[280px] overflow-hidden rounded-md border border-gray-200 sm:h-[350px]">
            <iframe
              title="ZARGANZ Location - Mirpur 1 Dhaka"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848280008054!2d90.39124631498154!3d23.75088508458933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8915512f071%3A0x99fa2a85c09ccfe3!2sMirpur%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720789410664!5m2!1sen!2sbd"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
