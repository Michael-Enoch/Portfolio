import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // grab the values
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // simple front‑end validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields before sending ❗️");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: { name, email, message },
      });
      toast.success("Message sent successfully ✅");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-slate-100">
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-slate-800 border border-slate-600 p-3 rounded text-slate-100 placeholder:text-slate-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-800 border border-slate-600 p-3 rounded text-slate-100 placeholder:text-slate-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-slate-800 border border-slate-600 p-3 rounded text-slate-100 placeholder:text-slate-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
