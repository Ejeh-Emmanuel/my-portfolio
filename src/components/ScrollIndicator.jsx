import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        flex
        flex-col
        items-center
        text-slate-400
        mt-10
      "
    >
      <span
        className="
          text-sm
          mb-2
        "
      >
        Scroll
      </span>

      <FaChevronDown />
    </motion.div>
  );
}

export default ScrollIndicator;
