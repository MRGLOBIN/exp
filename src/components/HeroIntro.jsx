import PrimaryBtn from "./PrimaryBtn";
import SecondryBtn from "./SecondryBtn";

const HeroIntro = () => {
  return (
    <article className="text-center mb-32 max-sm:mb-16">
      <h2 className="text-4xl max-sm:text-2xl">Hello! I am</h2>
      <h1 className="font-Nura text-5xl font-bold text-[#FFD166] my-2 max-sm:text-4xl">
        <span className="text-transparent [-webkit-text-stroke:1px_#FFD166]">
          Muhammad
        </span>{" "}
        Taqi
      </h1>
      <h2 className="text-4xl leading-normal mb-2 max-sm:text-2xl">
        A Ui/Ux Designer & <br />
        Front-End Developer
      </h2>
      <div className="flex gap-3.5 justify-center max-sm:(flex-col flex-wrap justify-center)">
      <SecondryBtn />
      <PrimaryBtn />

      </div>
    </article>
  );
};

export default HeroIntro;
