import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function PortfolioCard({ title, description, tech, image, github, demo }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        bg-white
        dark:bg-slate-900
        rounded-xl
        overflow-hidden
        border
        border-slate-200
        dark:border-slate-800
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        ease-out
      "
    >
      {/* Project Image */}

      <div
        className="
          h-48
          overflow-hidden
          relative
        "
      >
        <motion.img
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/20
            transition-all
            duration-300
          "
        />
      </div>

      {/* Card Content */}

      <div
        className="
          p-6
        "
      >
        <h3
          className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
            mb-3
            transition-colors
            duration-300
          "
        >
          {title}
        </h3>

        <p
          className="
            text-slate-600
            dark:text-slate-400
            mb-4
            leading-relaxed
            transition-colors
            duration-300
          "
        >
          {description}
        </p>

        {/* Technology */}

        <p
          className="
            text-emerald-500
            text-sm
            mb-6
          "
        >
          {tech}
        </p>

        {/* Buttons */}

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >
          {/* GitHub */}

          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              text-sm
              bg-slate-900
              dark:bg-transparent
              text-white
              border
              border-slate-900
              dark:border-slate-700
              px-4
              py-2
              rounded-lg
              hover:bg-slate-800
              dark:hover:bg-slate-800
              hover:border-emerald-400
              transition-colors
              duration-300
              cursor-pointer
            "
          >
            <FaGithub />
            GitHub
          </motion.a>

          {/* Live Demo */}

          <motion.a
            href={demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              text-sm
              bg-emerald-500
              text-slate-950
              px-4
              py-2
              rounded-lg
              hover:bg-emerald-400
              transition-colors
              duration-300
              cursor-pointer
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
