import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    try {
      const whatsappNumber = "2348157836970";

      const message = `

Hello Emmanuel,

Name: ${data.name}

Email: ${data.email}

Message:

${data.message}

      `;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      setStatus("success");

      window.open(whatsappUrl, "_blank");

      reset();

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } catch (error) {
      console.log(error);

      setStatus("error");
    }
  }

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        dark:bg-slate-950
        text-slate-900
        dark:text-white
        px-6
        py-20
        transition-colors
        duration-300
      "
    >
      <section
        className="
          max-w-5xl
          mx-auto
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Contact Me
          </h1>

          <p
            className="
              text-slate-600
              dark:text-slate-400
              max-w-xl
              transition-colors
              duration-300
            "
          >
            Have a project idea or want to collaborate? Send me a message and
            I'll get back to you.
          </p>
        </motion.div>

        {/* Status Messages */}

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                mt-8
                flex
                items-center
                gap-3
                bg-emerald-500/10
                border
                border-emerald-500
                text-emerald-500
                px-5
                py-4
                rounded-lg
              "
            >
              <FaCheckCircle />
              Opening WhatsApp...
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                mt-8
                flex
                items-center
                gap-3
                bg-red-500/10
                border
                border-red-500
                text-red-500
                px-5
                py-4
                rounded-lg
              "
            >
              <FaExclamationCircle />
              Something went wrong. Try again.
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-10
            bg-white
            dark:bg-slate-900
            border
            border-slate-300
            dark:border-slate-700
            rounded-2xl
            shadow-lg
            shadow-slate-300/30
            dark:shadow-black/25
            p-6
            md:p-8
            space-y-6
            transition-all
            duration-300
          "
        >
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              error: errors.name,
              register: {
                required: "Name is required",
              },
            },

            {
              id: "email",
              label: "Email",
              type: "email",
              error: errors.email,
              register: {
                required: "Email is required",
              },
            },
          ].map((field) => (
            <div key={field.id}>
              <label className="block mb-2 text-sm" htmlFor={field.id}>
                {field.label}
              </label>

              <input
                id={field.id}
                type={field.type}
                {...register(field.id, field.register)}
                className="
                  w-full
                  bg-slate-100
                  dark:bg-slate-950
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  text-slate-900
                  dark:text-white
                  focus:border-emerald-400
                  transition-colors
                  duration-300
                "
              />

              {field.error && (
                <p className="text-red-400 text-sm mt-2">
                  {field.error.message}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block mb-2 text-sm" htmlFor="message">
              Message
            </label>

            <textarea
              rows="5"
              id="message"
              {...register("message", {
                required: "Message is required",
              })}
              className="
                w-full
                bg-slate-100
                dark:bg-slate-950
                border
                border-slate-300
                dark:border-slate-700
                rounded-lg
                px-4
                py-3
                outline-none
                text-slate-900
                dark:text-white
                focus:border-emerald-400
                resize-none
                transition-colors
                duration-300
              "
            />

            {errors.message && (
              <p className="text-red-400 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
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
              disabled:opacity-50
            "
          >
            <FaWhatsapp />

            {isSubmitting ? "Opening..." : "Send Message"}
          </button>
        </motion.form>

        <div
          className="
            flex
            justify-center
            gap-6
            mt-10
            text-2xl
          "
        >
          <a
            href="https://github.com/Ejeh-Emmanuel"
            aria-label="Visit my GitHub profile"
            className="
              hover:text-emerald-400
              transition
              cursor-pointer
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-odugbo-40409b237?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            aria-label="Visit my LinkedIn profile"
            className="
              hover:text-emerald-400
              transition
              cursor-pointer
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Ejeh_jr250"
            aria-label="Visit my Twitter profile"
            className="
              hover:text-emerald-400
              transition
              cursor-pointer
            "
          >
            <FaTwitter />
          </a>

          <a
            href="https://wa.me/2348157836970"
            aria-label="Visit my WhatsApp profile"
            className="
              hover:text-emerald-400
              transition
              cursor-pointer
            "
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
