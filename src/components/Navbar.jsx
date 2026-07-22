import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../context/useTheme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const navLinkClass = ({ isActive }) =>
    isActive
      ? `
        text-emerald-600
        dark:text-emerald-400
        font-semibold
      `
      : `
        text-slate-600
        dark:text-slate-300
        hover:text-emerald-600
        dark:hover:text-emerald-400
        transition-colors
        duration-300
      `;

  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        bg-white
        dark:bg-slate-950
        border-b
        border-slate-200
        dark:border-slate-800
        relative
        transition-colors
        duration-300
      "
    >
      <nav
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >
        {/* Logo */}

        <NavLink
          to="/"
          className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
            hover:text-emerald-600
            dark:hover:text-emerald-400
            transition-colors
            duration-300
          "
        >
          Emmanuel
        </NavLink>

        {/* Desktop Navigation */}

        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              text-slate-700
              dark:text-slate-200
              hover:bg-slate-200
              dark:hover:bg-slate-800
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaSun />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaMoon />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-lg
              text-slate-700
              dark:text-white
              hover:bg-slate-200
              dark:hover:bg-slate-800
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{
                rotate: -90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              md:hidden
              bg-white
              dark:bg-slate-950
              border-b
              border-slate-200
              dark:border-slate-800
              transition-colors
              duration-300
            "
          >
            <ul
              className="
                px-6
                py-6
                space-y-5
              "
            >
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `${navLinkClass({ isActive })} block py-2`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
