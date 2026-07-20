import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";

import profileImage from "../assets/profile.jpg";
import ScrollIndicator from "./ScrollIndicator";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,

    y: 20,
  },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        bg-slate-950
      "
    >
      {/* Animated Background Blobs */}

      <motion.div
        animate={{
          x: [0, 40, 0],

          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-emerald-500/20
          rounded-full
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],

          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-10
          w-80
          h-80
          bg-cyan-500/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
         relative
         max-w-6xl
         mx-auto
         flex
         flex-col
         items-center
         gap-12
         py-20
         md:grid
         md:grid-cols-2
         md:items-center
         md:py-0
       "
      >
        {/* Text Content */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="
              text-emerald-400
              font-semibold
              mb-4
            "
          >
            Hello, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            "
          >
            Emmanuel Odugbo
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="
              text-2xl
              md:text-3xl
              text-slate-300
              mt-4
            "
          >
            A Frontend Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              text-slate-400
              mt-6
              max-w-lg
              leading-relaxed
            "
          >
            I build responsive and interactive web applications using modern
            frontend technologies like React, JavaScript and Tailwind CSS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-wrap
              gap-4
              mt-8
            "
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <NavLink
                to="/contact"
                className="
                  flex
                  items-center
                  gap-2
                  bg-emerald-500
                  text-slate-950
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-emerald-400
                  transition-colors
                  cursor-pointer
                "
              >
                Contact Me
                <FaArrowRight />
              </NavLink>
            </motion.div>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="https://github.com/Ejeh-Emmanuel"
              className="
                flex
                items-center
                gap-2
                border
                border-slate-700
                text-white
                px-6
                py-3
                rounded-lg
                hover:border-emerald-400
                transition-colors
                cursor-pointer
              "
            >
              <FaGithub />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}

        <motion.div
          initial={{
            opacity: 0,

            scale: 0.8,
          }}
          animate={{
            opacity: 1,

            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            justify-center
          "
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,

              repeat: Infinity,

              ease: "easeInOut",
            }}
            className="
              w-72
              h-72
              md:w-96
              md:h-96
              rounded-full
              overflow-hidden
              border-4
              border-emerald-400
            "
          >
            <img
              src={profileImage}
              alt="Emmanuel Odugbo - Frontend Developer"
              className="
                w-full
                h-full
                object-cover
                object-[center_30%]
              "
            />
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}

export default Hero;
