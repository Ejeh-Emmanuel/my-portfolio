import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      ? "text-emerald-400 font-semibold"
      : "text-slate-300 hover:text-emerald-400 transition-colors duration-300";

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
        bg-slate-950
        border-b
        border-slate-800
        relative
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
            text-white
          "
        >
          EMMANUEL 
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

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="
           md:hidden
           text-white
           text-2xl
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
                bg-slate-950
                border-b
                border-slate-800
              "
          >
            <ul
              className="
                  px-6
                  py-6
                  space-y-4
                "
            >
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass}
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
