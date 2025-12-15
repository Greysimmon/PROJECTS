import react from "react";
const projects = [
  {
    id: 1,
    title: "Fitness & Diet Tracker",
    description:
      "A full MERN stack platform for logging workouts, tracking meals, and monitoring health progress.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    image: "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Fitness+App",
    link: "https://yourlink.com",
  },
  {
    id: 2,
    title: "Mental-Health Tracker",
    description:
      "A well-being tracking app that logs mood, stress levels, habits, and self-care routines.",
    tech: ["React", "Node", "MongoDB"],
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=Mental+Health",
    link: "https://yourlink.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive developer portfolio created using React and modern UI design.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Portfolio",
    link: "https://yourlink.com",
  },
];
function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-primary text-white px-3 py-1 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary font-semibold hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
// Main Projects Page
export default function Projects() {
  return (
    <div className="pt-24 px-6 md:px-20 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

