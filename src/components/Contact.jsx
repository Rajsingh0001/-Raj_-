import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vstti7", //
        "template_a79vkve", //
        form.current,
        "1cL2TO4fXA1t5zarX" //
      )
      .then(
        () => {
          console.log("Message sent successfully!");
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-violet-400">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#1e293b] p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded bg-[#0f172a] border border-violet-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded bg-[#0f172a] border border-violet-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded bg-[#0f172a] border border-violet-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded-full text-white font-semibold transition duration-300"
            >
              Send Message
            </button>
            {isSent && (
              <p className="text-green-400 pt-2 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Details */}
          <div className="text-gray-300 space-y-6 bg-[#1e293b] p-8 rounded-2xl shadow-lg">
            <p>
              <span className="font-bold text-white">Email:</span>{" "}
              rajsingh5179332@gmail.com
            </p>
            <p>
              <span className="font-bold text-white">Phone:</span> +91
              9026942604
            </p>
            <p>
              <span className="font-bold text-white">Location:</span> Noida,
              Uttar Pradesh, India
            </p>
            <p>
              You can reach out to me via this form or through my email. I’m
              always open to discussing new projects or creative ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
