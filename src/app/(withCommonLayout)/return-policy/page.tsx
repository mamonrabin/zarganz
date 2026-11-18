
import Navbar from "@/src/components/header/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZARGANZ | Return Policy",
  description: "Read the ZARGANZ return and customer information policy.",
};

const policySections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We will automatically receive and collect certain anonymous
          information in standard usage logs through our web server, including
          computer-identification information obtained from cookies sent to
          your browser, an IP address, the domain server through which you
          access our service, and the type of computer and web browser you use.
        </p>

        <p>We may collect the following personally identifiable information:</p>

        <ul>
          <li>Name including first and last name.</li>
          <li>Alternate email address.</li>
          <li>Mobile phone number and contact details.</li>
          <li>ZIP/Postal code.</li>
          <li>
            Financial information (like account or credit card numbers) and
            opinions of features on our websites.
          </li>
          <li>Other information as per our registration process.</li>
        </ul>

        <p>We may also collect:</p>

        <ul>
          <li>About the pages you visit or access.</li>
          <li>The links you click on our site.</li>
          <li>The number of times you access a page.</li>
          <li>ZIP/Postal code.</li>
          <li>The number of times you have shopped on our website.</li>
        </ul>

        <p>
          You can terminate your account at any time. However, your information
          may remain stored in archive on our servers even after deletion or
          termination of your account.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Who Collects the Information?",
    content: (
      <p>
        We will collect anonymous traffic information from you when you visit
        our site. We will collect personally identifiable information about
        you only as part of a voluntary registration process, online survey,
        contest, or any combination thereof. Our advertisers may collect
        anonymous traffic information from their own assigned cookies to your
        browser. The site contains links to other websites. We are not
        responsible for the privacy practices of websites which we do not own,
        manage, or control.
      </p>
    ),
  },
  {
    number: "03",
    title: "Usage of Information",
    content: (
      <>
        <p>We use your personal information to:</p>
        <ul>
          <li>
            Make our bond stronger by understanding your interests and
            tailoring our site.
          </li>
          <li>Get in touch with you when necessary.</li>
          <li>Provide the services requested by you.</li>
          <li>Preserve social history as governed by existing law or policy.</li>
        </ul>

        <p>We use contact information internally to:</p>
        <ul>
          <li>Direct our efforts for product improvement.</li>
          <li>Contact you as a survey respondent.</li>
          <li>Notify you if you win any contest.</li>
          <li>
            Send you promotional materials from our contest sponsors or
            advertisers.
          </li>
        </ul>

        <p>Generally, we use anonymous traffic information to:</p>
        <ul>
          <li>Recognize your access privileges to our websites.</li>
          <li>
            Track your entries in promotions, sweepstakes, and contests to
            indicate progress and track entries, submissions, and prize
            drawing status.
          </li>
          <li>Make sure that you do not see the same ad repeatedly.</li>
          <li>Help diagnose problems with our server.</li>
          <li>
            Administer our websites and track sessions to better understand
            how people use our sites.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Sharing Information with Third Parties",
    content: (
      <>
        <p>
          We will not use your financial information for any purpose other
          than to complete a transaction with you. We do not rent, sell, or
          share your personal information and we will not disclose any of your
          personally identifiable information to third parties unless:
        </p>
        <ul>
          <li>We have your permission.</li>
          <li>To provide products or services you have requested.</li>
          <li>
            To help investigate, prevent, or take action regarding unlawful
            activities, suspected fraud, potential threats to the safety or
            security of any person, violations of ZARGANZ terms of use, or to
            defend against legal claims.
          </li>
          <li>
            Special circumstances such as compliance with subpoenas, court
            orders, or requests from legal authorities or law enforcement
            agencies.
          </li>
          <li>We share your information with advertisers on an aggregate basis only.</li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Your Information Choices",
    content: (
      <>
        <p>
          You may change your interests at any time and may opt in or opt out
          of marketing, promotional, or newsletter mailings. ZARGANZ reserves
          the right to send you certain service-related communications
          considered part of your account without offering the facility to
          opt out. You may update your information and change your account
          settings at any time.
        </p>

        <p>
          Upon request, we will remove or block your personally identifiable
          information from our database, thereby canceling your registration.
          However, your information may remain stored in archive on our
          servers even after deletion or termination of your account. If we
          plan to use your personally identifiable information for commercial
          purposes, we will notify you when we collect that information and
          allow you to opt out.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Security Procedures",
    content: (
      <p>
        To protect against the loss, misuse, and alteration of information
        under our control, we have appropriate physical, electronic, and
        managerial procedures in place. Our servers are accessible only to
        authorized personnel, and your information is shared with relevant
        personnel on a need-to-know basis to complete transactions and provide
        the services requested by you.
      </p>
    ),
  },
  {
    number: "07",
    title: "Your Rights",
    content: (
      <p>
        If you are concerned about your data, you have the right to request
        access to the personal data which we may hold or process about you.
        You have the right to require us to correct any inaccuracies in your
        data free of charge. At any stage, you also have the right to ask us
        to stop using your personal data for direct marketing purposes. If
        you want to delete your personal data from ZARGANZ across all
        platforms, please send an email to{" "}
        <a
          href="mailto:support@zarganz.com"
          className="font-medium text-[#AC0000] underline underline-offset-4"
        >
          support@zarganz.com
        </a>
        . We will process your request within the next business day and
        notify you about the update.
      </p>
    ),
  },
  {
    number: "08",
    title: "Policy Updates",
    content: (
      <p>
        We reserve the right to change or update this policy at any time by
        placing a prominent notice on our site. Such changes shall be
        effective immediately upon posting to this site.
      </p>
    ),
  },
];

const Page = () => {
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

      <div className="Container pb-16 pt-28">
        {/* Header */}
        <section className="border-b border-gray-200 pb-7">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#AC0000]">
            Customer Information
          </p>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h1 className="font-serif text-3xl font-medium text-[#262626] sm:text-4xl">
              Return <span className="text-[#AC0000]">Policy.</span>
            </h1>

            <p className="max-w-sm text-xs leading-6 text-gray-500">
              Your trust and confidence matter to us. Learn more about how
              ZARGANZ handles and protects your information.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="grid gap-4 border-b border-gray-200 py-7 md:grid-cols-[180px_1fr] md:gap-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
              Introduction
            </span>
            <div className="mt-3 h-[2px] w-8 bg-[#AC0000]" />
          </div>

          <div className="max-w-3xl space-y-3 text-sm leading-7 text-gray-600">
            <p>
              ZARGANZ respects and protects the privacy of our customers and
              users who visit our websites. We understand that you care how
              information about you is used and shared, and we appreciate
              your trust that we will do so carefully and sensibly.
            </p>

            <p>
              You are advised to read the Privacy Policy carefully. By
              accessing the services provided by zarganz.com, you agree to
              the collection and use of your data by ZARGANZ in the manner
              provided in this policy.
            </p>
          </div>
        </section>

        {/* Policy Sections */}
        <section>
          {policySections.map((section) => (
            <article
              key={section.number}
              className="group grid gap-3 border-b border-gray-200 py-6 transition-colors duration-300 hover:bg-white/60 md:grid-cols-[180px_1fr] md:gap-8 md:py-7"
            >
              <div className="flex items-start gap-3">
                <span className="font-serif text-2xl text-[#AC0000]">
                  {section.number}
                </span>
                <span className="mt-4 h-px w-6 bg-gray-300 transition-all group-hover:w-9 group-hover:bg-[#AC0000]" />
              </div>

              <div className="max-w-3xl">
                <h2 className="mb-3 font-serif text-lg font-medium text-[#262626] sm:text-xl">
                  {section.title}
                </h2>

                <div className="space-y-4 text-sm leading-7 text-gray-500 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:pl-1">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </section>

      
      </div>
    </main>
  );
};

export default Page;
