import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formspree handles the POST naturally, but we use this to trigger
  // our loading UI state when the form is submitted
  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-16">
          <span className="text-cyan-400">CONTACT ME</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information Sidebar */}
          <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have a project in mind or need a developer for your next idea?
              Feel free to reach out. I'm always open to discussing new
              opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-1">Phone</h3>
                <p className="text-gray-300">+251 973 415854</p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-1">Email</h3>
                <p className="text-gray-300">yasserosama0910@gmail.com</p>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/251973415854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  +251973415854
                </a>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-1">GitHub</h3>
                <a
                  href="https://github.com/yasa606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  github.com/yasa606
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <form
              action="https://formspree.io/f/xovwwnaa"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 resize-none focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed text-gray-300"
                    : "bg-cyan-400 text-black hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
