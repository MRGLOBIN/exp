import web from "../assets/platforms/web.svg";
import android from "../assets/platforms/android.svg";
import ios from "../assets/platforms/ios.svg";
import mac from "../assets/platforms/mac.svg";
import windows from "../assets/platforms/windows.svg";

const Platforms = () => {
  return (
    <div className="flex justify-between mb-20 mx-24 max-sm:mx-6 max-sm:mb-10">
      <img className="size-16 max-sm:size-8" src={web} alt="" />
      <img className="size-16 max-sm:size-8" src={android} alt="" />
      <img className="size-16 max-sm:size-8" src={ios} alt="" />
      <img className="size-16 max-sm:size-8" src={windows} alt="" />
      <img className="size-16 max-sm:size-8" src={mac} alt="" />
    </div>
  );
};

export default Platforms;
