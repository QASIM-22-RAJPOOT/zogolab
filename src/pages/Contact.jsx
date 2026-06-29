import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const receiverEmail = "qasim432712@gmail.com";
    const receiverEmail = "Zogolabs@gmail.com";
    const emailSubject = formData.subject;

    const emailBody = `
Name: ${formData.fullName}
Email: ${formData.email}

Message:
${formData.message}
`;

    const mailUrl = `mailto:${receiverEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailUrl;

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
   <section
  id="contact"
  className="min-h-[calc(100vh-76px)] bg-[#070707] px-6 py-16 text-white scroll-mt-28"
>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#2d8cff]/30 bg-[#071323] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#2d8cff]">
            Get In Touch
          </span>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            Ready to bring your ideas to life? Let's create something
            extraordinary together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side Info */}
          <div>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 rounded-xl bg-[#141414] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff2aa3]/10 text-[#ff2aa3]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Email</p>
                 <h3 className="mt-1 text-base font-bold text-white">
  Zogolabs@gmail.com
</h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 rounded-xl bg-[#141414] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b5cff]/10 text-[#8b5cff]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">Phone</p>
                  <h3 className="mt-1 text-base font-bold text-white">
                    +92 371 6519006
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-xl bg-[#141414] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1683ff]/10 text-[#1683ff]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    Location
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white">
                    Lahore, Pakistan
                  </h3>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm text-gray-500">Follow us</p>

              {["X", "in", "◎", "▶"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191919] text-sm font-bold text-gray-500 transition-all duration-300 hover:bg-[#2d8cff] hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#8b5cff]/70 bg-[#141414] p-8 shadow-[0_0_30px_rgba(139,92,255,0.15)]"
          >
            <h2 className="text-2xl font-extrabold text-white">
              Send us a message
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="mt-2 w-full rounded-lg border border-white/5 bg-[#070707] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-[#8b5cff]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="mt-2 w-full rounded-lg border border-white/5 bg-[#070707] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-[#8b5cff]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-gray-500">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
                className="mt-2 w-full rounded-lg border border-white/5 bg-[#070707] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-[#8b5cff]"
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-gray-500">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows="5"
                className="mt-2 w-full resize-none rounded-lg border border-white/5 bg-[#070707] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-[#8b5cff]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ff2aa3] via-[#8b5cff] to-[#2d8cff] px-6 py-4 text-base font-extrabold text-white shadow-[0_0_25px_rgba(139,92,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,255,0.6)] active:scale-95"
            >
              Send Message
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M22 2 11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m22 2-7 20-4-9-9-4 20-7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-transparent bg-gradient-to-r from-[#ff2aa3] via-[#8b5cff] to-[#2d8cff] pt-[1px]">
          <div className="flex flex-col items-center justify-between gap-4 bg-[#070707] py-7 md:flex-row">
            <p className="text-sm text-gray-500">
              <span className="font-extrabold text-[#a855f7]">ZOGO LAB</span>
              <span className="mx-2">·</span>
              Play Creative
            </p>

            <p className="text-sm text-gray-600">
              © 2026 Zogo Lab. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;