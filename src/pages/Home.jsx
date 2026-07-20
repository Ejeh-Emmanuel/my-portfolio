import Hero from "../components/Hero";
import PortfolioCard from "../components/PortfolioCard";
import projects from "../data/projects";

function Home() {
  return (
    <main
      className="
        bg-slate-950
        text-white
      "
    >
      <Hero />

      <section
        className="
          max-w-6xl
          mx-auto
          px-6
          py-20
        "
      >
        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-10
          "
        >
          Featured Projects
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
