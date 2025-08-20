import Taqi from "../assets/footer/taqi.svg";
const Footer = () => {
  return (
    <footer className="text-white flex flex-col border-t border-[#B0B0B0] py-8 gap-20 mx-24 max-sm:mx-6 max-sm:gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl text-[#FFD166] max-sm:text-[1rem] max-lg:text-3xl">Lets work together</h1>
        <img className="size-24 max-sm:size-10" src={Taqi} alt="" />
      </div>
      <div className="flex gap-16 text-2xl justify-center max-sm:text-sm max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <a href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you." target="_blank">WhatsApp</a>
        <a href="https://www.instagram.com/direct/t/uiux.taqi" target="_blank">Instagram</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itstaqi2919@gmail.com" target="_blank">Email</a>
      </div>
      <p className="text-[1rem] text-[#B0B0B0] text-center max-sm:text-sm">
        © 2025 Muhammad Taqi All rights reserved | Designed & Developed by
        Muhammad Taqi.
      </p>
    </footer>
  );
};

export default Footer;
