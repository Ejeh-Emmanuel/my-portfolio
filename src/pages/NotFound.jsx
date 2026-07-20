import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaHome, FaCode } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function NotFound() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        justify-center
        px-6
      "
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          max-w-2xl
          text-center
        "
      >
        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            justify-center
            mb-6
          "
        >
          <FaCode
            className="
              text-6xl
              text-emerald-400
            "
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="
            text-7xl
            md:text-9xl
            font-black
            text-white
            mb-4
          "
        >
          404
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="
            text-3xl
            font-bold
            mb-5
          "
        >
          Looks like this page is still under development.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="
            text-slate-400
            leading-relaxed
            max-w-xl
            mx-auto
            mb-10
          "
        >
          The page you're trying to visit doesn't exist, has been moved, or the
          URL may be incorrect.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-5
            text-left
            max-w-lg
            mx-auto
            mb-10
            font-mono
            text-sm
          "
        >
          <p className="text-red-400">Error 404</p>

          <p className="text-slate-300 mt-3">{`> npm run page`}</p>

          <p className="text-yellow-400 mt-2">Page not found...</p>

          <p className="text-emerald-400 mt-2">
            Redirecting you back home is recommended.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <NavLink
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              bg-emerald-500
              hover:bg-emerald-400
              text-slate-950
              font-semibold
              mb-2
              px-6
              py-3
              rounded-lg
              transition-colors
              cursor-pointer
            "
          >
            <FaHome />
            Back Home
          </NavLink>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default NotFound;
