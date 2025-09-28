"use client";
import React, { useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_6dl8aa9", // 🔹 replace with EmailJS Service ID
        "template_rkhkh85", // 🔹 replace with EmailJS Template ID
        form.current,
        "WyMwAXW-1f7eXBezv" // 🔹 replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. " + error.text);
        }
      );
  };

  return (
    <div className="py-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Open to Work
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Looking for entry-level opportunities where I can grow and
            contribute.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+91 9052740082</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                valpasaniharish@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            ></textarea>
            <button
              type="submit"
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
