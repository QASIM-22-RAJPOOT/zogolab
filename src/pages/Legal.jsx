import { useState } from "react";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <section
      id="legal"
      className="min-h-screen bg-[#070707] px-6 py-16 text-white scroll-mt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2d8cff]/30 bg-[#071323] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#2d8cff]">
            Legal Information
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Privacy Policy & Terms
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            Please read our Privacy Policy and Terms of Service carefully before
            using our games, websites, or online services.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`rounded-lg px-6 py-3 text-sm font-extrabold transition-all duration-300 ${
              activeTab === "privacy"
                ? "bg-gradient-to-r from-[#ff2aa3] via-[#8b5cff] to-[#2d8cff] text-white shadow-[0_0_25px_rgba(139,92,255,0.35)]"
                : "bg-[#141414] text-gray-500 hover:text-white"
            }`}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`rounded-lg px-6 py-3 text-sm font-extrabold transition-all duration-300 ${
              activeTab === "terms"
                ? "bg-gradient-to-r from-[#ff2aa3] via-[#8b5cff] to-[#2d8cff] text-white shadow-[0_0_25px_rgba(139,92,255,0.35)]"
                : "bg-[#141414] text-gray-500 hover:text-white"
            }`}
          >
            Terms of Service
          </button>
        </div>

        {/* Content Box */}
        <div className="mt-10 rounded-2xl border border-[#8b5cff]/50 bg-[#141414] p-7 shadow-[0_0_30px_rgba(139,92,255,0.12)] md:p-10">
          {activeTab === "privacy" ? <PrivacyPolicy /> : <TermsOfService />}
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="mb-9">
      <h2 className="text-xl font-extrabold text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-gray-500 md:text-base">
        {children}
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-extrabold text-white">
        Privacy Policy
      </h2>

      <Section title="1. Introduction">
        <p>
          Zogo Lab &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; is
          committed to protecting the privacy of our users. This Privacy Policy
          explains how we collect, use, disclose, and safeguard information when
          you access or use our mobile games, websites, and other online
          services.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>
          We do not directly collect any personal information from you when you
          use our Services. We do not require you to create an account or provide
          any personal details to access our games or services.
        </p>

        <p>
          However, trusted third-party analytics and advertising partners may
          collect certain information automatically as you interact with our
          Services.
        </p>

        <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong className="text-white">Device Information:</strong> Device
            type, operating system, unique device identifiers, IP address,
            mobile network information, and device interaction data.
          </li>
          <li>
            <strong className="text-white">Usage Information:</strong> Gameplay
            data, session lengths, levels reached, in-game purchases, and other
            usage metrics.
          </li>
          <li>
            <strong className="text-white">Location Information:</strong>{" "}
            Approximate geolocation based on IP address or mobile network
            information.
          </li>
          <li>
            <strong className="text-white">Advertising Data:</strong>{" "}
            Information about advertisements viewed, clicked, or interacted with.
          </li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <ul className="list-disc space-y-3 pl-6">
          <li>To improve, optimize, and maintain our Services.</li>
          <li>To analyze usage trends and fix bugs or performance issues.</li>
          <li>To provide customized content and gaming experiences.</li>
          <li>To show relevant advertisements inside our games.</li>
          <li>
            To comply with legal obligations, prevent fraud, and enforce our
            Terms of Service.
          </li>
        </ul>
      </Section>

      <Section title="4. Third-Party Analytics and Advertising Partners">
        <p>
          We work with trusted third-party analytics and advertising partners to
          understand how our Services are used, provide targeted advertising, and
          support analytics and marketing efforts.
        </p>

        <p>
          These third-party partners may have their own privacy policies. We
          encourage you to review their privacy policies to understand how they
          collect and use your information.
        </p>
      </Section>

      <Section title="5. Advertising">
        <p>
          We display advertisements within our games through third-party
          advertising partners. These advertisements may be targeted based on
          device information, gameplay data, and ad interaction data.
        </p>

        <p>
          Advertising partners may use cookies, web beacons, SDKs, and other
          tracking technologies to provide relevant ads and measure ad
          performance.
        </p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>
          Our Services are not directed towards children under the age of 13, and
          we do not knowingly collect personal information from children under
          13.
        </p>

        <p>
          If you believe we may have collected personal information from a child
          under 13, please contact us at{" "}
          <span className="font-bold text-[#2d8cff]">Zogolabs@gmail.com</span>.
        </p>
      </Section>

      <Section title="7. Data Security">
        <p>
          We take reasonable measures to protect information from unauthorized
          access, use, or disclosure. However, no method of data transmission or
          storage is 100% secure.
        </p>
      </Section>

      <Section title="8. Data Retention">
        <p>
          We retain collected information for as long as necessary to fulfill the
          purposes described in this Privacy Policy, unless a longer retention
          period is required or permitted by law.
        </p>
      </Section>

      <Section title="9. Your Choices and Rights">
        <p>
          Depending on your location and applicable laws, you may have rights to
          access, correct, delete, or object to the processing of your
          information.
        </p>

        <p>
          To exercise these rights, contact us at{" "}
          <span className="font-bold text-[#2d8cff]">Zogolabs@gmail.com</span>.
        </p>
      </Section>

      <Section title="10. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be effective when it becomes accessible through our
          Services or website.
        </p>
      </Section>

      <Section title="11. Contact Us">
        <p>
          For questions or concerns about this Privacy Policy, contact us at:
        </p>

        <p className="font-bold text-white">
          Zogo Lab <br />
          Email: <span className="text-[#2d8cff]">Zogolabs@gmail.com</span>
        </p>
      </Section>

      <p className="border-t border-white/10 pt-6 text-sm text-gray-600">
        © 2026 Zogo Lab. All rights reserved.
      </p>
    </>
  );
};

const TermsOfService = () => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-extrabold text-white">
        Terms of Service
      </h2>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using Zogo Lab games, websites, or online services,
          you agree to these Terms of Service. If you do not agree, please do not
          use our Services.
        </p>
      </Section>

      <Section title="2. Use of Our Services">
        <p>
          You agree to use our Services only for lawful purposes and in a way
          that does not damage, disable, or interfere with our games, websites,
          servers, or other users.
        </p>
      </Section>

      <Section title="3. Games and Content">
        <p>
          All game content, graphics, designs, logos, characters, UI, sounds,
          and other materials are owned by Zogo Lab or licensed to us. You may
          not copy, modify, distribute, or sell our content without permission.
        </p>
      </Section>

      <Section title="4. Advertisements">
        <p>
          Our games may display advertisements provided by third-party ad
          networks. By using our Services, you understand that ads may appear
          during gameplay or inside game menus.
        </p>
      </Section>

      <Section title="5. In-App Purchases">
        <p>
          Some of our games may include optional in-app purchases. All purchases
          are handled by the relevant app store platform, such as Google Play or
          Apple App Store.
        </p>
      </Section>

      <Section title="6. Prohibited Activities">
        <ul className="list-disc space-y-3 pl-6">
          <li>Do not hack, cheat, exploit, or modify our games.</li>
          <li>Do not reverse engineer or copy our game files.</li>
          <li>Do not use our Services for illegal or harmful activities.</li>
          <li>Do not attempt to damage our systems or servers.</li>
        </ul>
      </Section>

      <Section title="7. Disclaimer">
        <p>
          Our Services are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. We do not guarantee that our Services will
          always be error-free, uninterrupted, or fully secure.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          Zogo Lab will not be responsible for any indirect, incidental, special,
          or consequential damages that may result from your use of our Services.
        </p>
      </Section>

      <Section title="9. Changes to Terms">
        <p>
          We may update these Terms of Service from time to time. Continued use
          of our Services after updates means you accept the revised terms.
        </p>
      </Section>

      <Section title="10. Contact Us">
        <p>
          If you have any questions about these Terms of Service, contact us at:
        </p>

        <p className="font-bold text-white">
          Zogo Lab <br />
          Email: <span className="text-[#2d8cff]">Zogolabs@gmail.com</span>
        </p>
      </Section>

      <p className="border-t border-white/10 pt-6 text-sm text-gray-600">
        © 2026 Zogo Lab. All rights reserved.
      </p>
    </>
  );
};

export default Legal;