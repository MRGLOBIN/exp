const ServicesCard = ({ text, image }) => {
    return (
        <div className="w-80 py-12 shadow-[0px_0px_4px_0px_#B0B0B0] rounded-xl flex flex-col items-center gap-12 max-sm:py-6 max-sm:gap-6">
        <img className="size-24 max-sm:size-20" src={image} alt={text}/>
        <h3 className="text-3xl max-sm:text-2xl">{text}</h3>
        </div>
    );
}

export default ServicesCard