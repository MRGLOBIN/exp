const ProjectCard = ({ title, image, category, onClick }) => {
    return (
        <div className="py-6 flex flex-col px-4 hover:border-[#4DD0E1] group max-sm:py-3" onClick={onClick}>
            <img src={image} alt="" className="size-80 max-sm:size-64 max-md:size-72" loading="lazy"/>
            <p className="mt-4 mb-1 text-2xl  group-hover:text-[#4DD0E1] max-sm:text-xl">{title}</p>
            <p className="text-lg text-[#B0B0B0] max-sm:text-[1rem]">{category}</p>
        </div>
    )
}

export default ProjectCard