import { useNavigate } from "react-router-dom";
const PrimaryBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="w-56 h-12 bg-[#4DD0E1] text-[#2C2C2C] text-2xl shadow-[4px_4px_0_0_#FFD166] hover:shadow-[0px_0px_0_0]" onClick={()=>{navigate("/contact")}}>
      Hire Me
    </button>
  );
};

export default PrimaryBtn
