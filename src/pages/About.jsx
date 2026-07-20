import { motion } from "framer-motion";
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";

import { SiTailwindcss, SiFastapi, SiMysql } from "react-icons/si";


const skills = [
  {
    name: "HTML",
    level: 90,
    icon: <FaHtml5 />,
  },

  {
    name: "CSS",
    level: 85,
    icon: <FaCss3Alt />,
  },

  {
    name: "React",
    level: 70,
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    level: 70,
    icon: <FaJs />,
  },

  {
    name: "Tailwind CSS",
    level: 70,
    icon: <SiTailwindcss />,
  },

  {
    name: "SQL",
    level: 70,
    icon: <SiMysql />,
  },

  {
    name: "FastAPI",
    level: 50,
    icon: <SiFastapi />,
  },

  {
    name: "Python",
    level: 50,
    icon: <FaPython />,
  },
];

const journey = [
  {
    title: "Computer Science Education",

    description:
      "Graduated with a Bachelor's degree and a solid foundation in Computer Science, building a strong base in programming, software development concepts and technology.",
  },

  {
    title: "Frontend Development",

    description:
      "Focused on creating responsive and interactive user interfaces using HTML, CSS, JavaScript, React and Tailwind CSS. Building projects that combine clean design with practical functionality.",
  },

  {
    title: "Office Assistant — NYSC",

    description:
      "Gained experience supporting technical operations, troubleshooting issues and working with Office Suites and Packages in a professional work environment.",
  },

  {
    title: "Expanding into Backend Development",

    description:
      "Currently exploring backend development with Python, FastAPI, SQL and database design while building towards full-stack development.",
  },

  {
    title: "Building Real-World Projects",

    description:
      "Developing portfolio projects including recipe applications, travel planning solutions and other web applications to strengthen practical software engineering skills.",
  },
];

function About() {
  return (
    <main
      className="
        bg-slate-950
        text-white
        min-h-screen
        px-6
        py-20
      "
    >
      {/* Introduction */}

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
              mb-6
            "
          >
            About Me
          </h1>

          <p
            className="
              text-slate-400
              max-w-3xl
              leading-relaxed
            "
          >
            I'm Emmanuel Odugbo, a frontend developer passionate about creating
            responsive and interactive web applications. I enjoy solving
            problems through code and continuously improving my skills across
            modern web technologies.
          </p>
        </motion.div>
      </section>

      {/* Skills */}

      <section
        className="
          max-w-5xl
          mx-auto
          mt-20
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            mb-10
          "
        >
          Skills & Technologies
        </h2>

        <div
          className="
            space-y-8
          "
        >
          {skills.map((skill) => (
            <div key={skill.name}>
              <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-3
                  "
              >
                <div
                  className="
                      flex
                      items-center
                      gap-3
                      text-lg
                    "
                >
                  <span
                    className="
                        text-emerald-400
                        text-xl
                      "
                  >
                    {skill.icon}
                  </span>

                  {skill.name}
                </div>

                <span
                  className="
                      text-emerald-400
                      text-sm
                    "
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className="
                    h-3
                    bg-slate-800
                    rounded-full
                    overflow-hidden
                  "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,

                    ease: "easeOut",
                  }}
                  className="
                      h-full
                      bg-emerald-500
                      rounded-full
                    "
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}

      <section
        className="
          max-w-5xl
          mx-auto
          mt-24
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            mb-10
          "
        >
          My Journey
        </h2>

        <div
          className="
            border-l
            border-emerald-500
            pl-8
            space-y-10
          "
        >
          {journey.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,

                x: -30,
              }}
              whileInView={{
                opacity: 1,

                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,

                delay: index * 0.15,
              }}
              className="
                  relative
                "
            >
              {/* Timeline Dot */}

              <span
                className="
                    absolute
                    -left-10.5
                    top-2
                    w-5
                    h-5
                    bg-emerald-500
                    rounded-full
                    border-4
                    border-slate-950
                  "
              />

              <h3
                className="
                    text-xl
                    font-semibold
                  "
              >
                {item.title}
              </h3>

              <p
                className="
                    text-slate-400
                    mt-2
                    leading-relaxed
                  "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
