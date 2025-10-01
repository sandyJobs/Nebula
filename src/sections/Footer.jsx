import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-charcoal via-midnight to-charcoal text-white">
      {/* Decorative gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cta via-teal to-electric" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white font-headline">
            Nebula Studio
          </h3>
          <p className="text-sm mt-2 text-white">
            Invisible excellence, delivered.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="grid grid-cols-2 gap-3 text-sm"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <a className="hover:text-cta transition-colors text-white" href="#home">
            Home
          </a>
          <a className="hover:text-cta transition-colors text-white" href="#services">
            Services
          </a>
          <a className="hover:text-cta transition-colors text-white" href="#portfolio">
            Portfolio
          </a>
          <a className="hover:text-cta transition-colors text-white" href="#about">
            About
          </a>
          <a className="hover:text-cta transition-colors text-white" href="#cta">
            Contact
          </a>
        </motion.nav>

        {/* Socials */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-cta transition-colors"
          >
            <Linkedin size={18} className="text-white" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-cta transition-colors"
          >
            <Twitter size={18} className="text-white" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-cta transition-colors"
          >
            <Github size={18} className="text-white" />
          </a>
        </motion.div>
      </div>

      {/* Subtle branded watermark near footer bottom */}
      <div className="footer-watermark" aria-hidden="true" />

      {/* Bottom note */}
      <div className="border-t border-white/10 mt-6 py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Nebula Studio Collective. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
