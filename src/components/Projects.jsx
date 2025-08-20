import ProjectsData from "./ProjectsData.js";

const Projects = () => {
  return (
    <section className="flex flex-col gap-12 mb-20 items-center max-sm:mb-10 max-sm:gap-6">
      <h2 className="text-5xl text-center max-sm:text-3xl">Projects</h2>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4">
    {ProjectsData.map((project) =>(
      <div
        className="py-6 flex flex-col px-4 hover:border-[#4DD0E1] group max-sm:py-3"
        key={project.id}
        onClick={()=> window.open(project.link, "_blank")}
      >
        <img
          src={project.image}
          alt=""
          className="size-80 max-sm:size-64 max-md:size-72"
          loading="lazy"
        />
        <p className="mt-4 mb-1 text-2xl  group-hover:text-[#4DD0E1] max-sm:text-xl">
          {project.title}
        </p>
        <p className="text-lg text-[#B0B0B0] max-sm:text-[1rem]">{project.category}</p>
      </div>))}
      </div>
    </section>
  );
};

export default Projects;
