"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

type FormStatus = "idle" | "loading" | "success" | "error";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: FaLinkedin },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-violet">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Let's build something together
          </h2>
          <p className="mt-4 text-foreground/60">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-full border border-foreground/10 p-3 text-foreground/70 transition-colors hover:border-accent-violet/30 hover:text-accent-violet"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/70">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-foreground/10 bg-foreground/3 px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-violet"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-foreground/10 bg-foreground/3 px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-violet"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/70">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-xl border border-foreground/10 bg-foreground/3 px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-violet"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-violet to-accent-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-violet/20 disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-500"
              >
                <CheckCircle2 size={16} />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500"
              >
                <AlertCircle size={16} />
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}