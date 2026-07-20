import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        bg-slate-950
        border-t
        border-slate-800
        text-white
        px-6
        py-10
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          gap-8
        "
      >
        {/* Personal Information */}

        <div>
          <h2
            className="
              text-xl
              font-bold
            "
          >
            Emmanuel Odugbo
          </h2>

          <p
            className="
              text-emerald-400
              mt-1
            "
          >
            Frontend Developer
          </p>

          <div
            className="
              mt-4
              space-y-2
              text-slate-400
              text-sm
            "
          >
            <p className="flex items-center gap-2">
              <FaEnvelope />

              <a
                href="mailto:odugboemmanuel22@gmail.com"
                className="
                  hover:text-emerald-400
                  transition-colors
                  cursor-pointer
                "
                aria-label="Visit my email"
              >
                odugboemmanuel22@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaWhatsapp />

              <a
                href="https://wa.me/2348157836970"
                target="_blank"
                rel="noreferrer"
                className="
                  hover:text-emerald-400
                  transition-colors
                  cursor-pointer
                "
                aria-label="Visit my WhatsApp profile"
              >
                +234 815 783 6970
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}

        <div
          className="
            flex
            items-center
            gap-5
            text-2xl
          "
        >
          <a
            href="https://github.com/Ejeh-Emmanuel"
            className="
              text-slate-400
              hover:text-emerald-400
              transition-colors
              cursor-pointer
            "
            aria-label="Visit my GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-odugbo-40409b237?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="
              text-slate-400
              hover:text-emerald-400
              transition-colors
              cursor-pointer
            "
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Ejeh_jr250"
            className="
              text-slate-400
              hover:text-emerald-400
              transition-colors
              cursor-pointer
            "
            aria-label="Visit my Twitter profile"
          >
            <FaTwitter />
          </a>

          <a
            href="https://wa.me/2348157836970"
            className="
              text-slate-400
              hover:text-emerald-400
              transition-colors
              cursor-pointer
            "
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div
        className="
          max-w-6xl
          mx-auto
          mt-8
          pt-6
          border-t
          border-slate-800
          text-center
          text-sm
          text-slate-500
        "
      >
        © 2026 Emmanuel Odugbo. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
