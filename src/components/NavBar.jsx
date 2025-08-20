import { Link } from "react-router-dom";
import CallIcon from "../assets/navBar/CallIcon.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between py-6 mb-20 mx-24 max-lg:mx-16 max-md:mx-12 max-sm:mx-6 max-sm:mb-10">
      <Link to="/">
        <h1 className="font-Nura text-2xl font-bold max-sm:text-[1rem]">
          <span className="text-transparent [-webkit-text-stroke:1px_white]">
            Muhammad
          </span>{" "}
          Taqi
        </h1>
      </Link>
      <div className="flex gap-6 text-[1rem] items-center">
        <Link className="border max-sm:text-sm px-6 flex py-1.5 gap-3 shadow-[2px_2px_0_0_#FFFFFF] hover:shadow-[0px_0px_0_0]" to="/contact"><img src={CallIcon} alt="" />Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
