import Figma from "../assets/hero/figma.svg";
import XD from "../assets/hero/xd.svg";
import React from "../assets/hero/react.svg";
import Next from "../assets/hero/next.svg";
import Tailwind from "../assets/hero/tailwind.svg";
import Scss from "../assets/hero/scss.svg";
import Taqi from "../assets/hero/Taqi.png";
const Hero = () => {
  return (
    <section className="mb-20 mr-24 bg-[#B0B0B0] px-28 rounded-r-full flex items-center justify-center gap-8 text-[#2C2C2C] max-sm:rounded-r-none max-sm:px-1 max-sm:mr-0 max-sm:w-full max-sm:mb-10 max-xl:mr-14 max-lg:mr-0 max-md:mr-0 max-lg:rounded-r-none max-lg:px-16 max-md:px-10">
      <div className="grid grid-cols-3 gap-x-8 gap-y-20 max-sm:grid-cols-2 max-sm:gap-x-1 max-sm:gap-y-1 max-lg:gap-y-12 max-lg:gap-x-4 max-xl:gap-y-6 max-xl:gap-x-6 max-md:gap-y-10 max-md:gap-x-4">
        <img className="max-sm:size-9" src={Figma} alt="Figma" />
        <img className="max-sm:size-9" src={XD} alt="XD" />
        <img className="max-sm:size-9" src={React} alt="React" />
        <img className="max-sm:size-9" src={Next} alt="Next" />
        <img className="max-sm:size-9" src={Tailwind} alt="Tailwind" />
        <img className="max-sm:size-9" src={Scss} alt="Scss" />
      </div>

      <img className="mt-[-3.5rem] max-sm:w-32 max-sm:mt-[-1rem] max-xl:w-72 max-lg:w-60 max-lg:mt-[-2.5rem] max-md:w-48" src={Taqi} alt="" />
      <div className="flex flex-col gap-20 max-sm:gap-4 max-xl:gap-16 max-lg:gap-10 max-md:gap-6">
        <div className="font-bold">
            <h1 className="text-2xl font-normal max-sm:text-[0.75rem] max-lg:text-xl">Experience</h1>
            <h1 className="text-4xl max-sm:text-[1rem] max-lg:text-3xl">2 <span className="text-transparent [-webkit-text-stroke:1px_#2C2C2C]">Plus</span></h1>
            <h1 className="text-4xl max-sm:text-[1rem] max-lg:text-3xl">Years</h1>
        </div>
        <div className="font-bold">
            <h1 className="text-2xl font-normal max-sm:text-[0.75rem] max-lg:text-xl">Projects</h1>
            <h1 className="text-4xl max-sm:text-[1rem] max-lg:text-3xl">20 <span className="text-transparent [-webkit-text-stroke:1px_#2C2C2C]">Plus</span></h1>
            <h1 className="text-4xl max-sm:text-[1rem] max-lg:text-3xl">Delivered</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
