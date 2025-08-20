const ContactsCard = ({ title, contact, image, onClick }) => {
  return (
    <button className="w-80 py-12 shadow-[0px_0px_4px_0px_#B0B0B0] rounded-xl flex flex-col items-center gap-14 hover:shadow-[0px_0px_4px_0px_#4DD0E1] group max-sm:py-6 max-sm:gap-6" onClick={onClick}>
      <img className="size-24 max-sm:size-20" src={image} alt={title} />
      <div className="flex flex-col items-center gap-6 max-sm:gap-3">
        <h3 className="text-3xl text-white group-hover:text-[#FFD166] max-sm:text-2xl">
          {title}
        </h3>
        <p className="text-xl text-[#B0B0B0] max-sm:text-sm">{contact}</p>
      </div>
    </button>
  );
};

export default ContactsCard;
