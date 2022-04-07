import { GiCash } from "react-icons/gi";
import { BsSun, BsMoonStars } from "react-icons/bs";
import useDarkMode from "../../hooks/useDarkMode";

const Heading = () => {
  const [mode, setTheme] = useDarkMode();
  return (
    <div className="flex justify-between items-center p-5 mt-5 text-slate-700 dark:text-white">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl mr-2 ">Budget Calculator</h1>
        <GiCash className="text-3xl" />
      </div>

      <button className="flex items-center text-xl" onClick={() => setTheme(mode)}>
        Mode:
        {mode === "dark" ? (
          <BsSun className="text-3xl ml-2 hover:cursor-pointer" />
        ) : (
          <BsMoonStars className="text-3xl ml-2 text-white hover:cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default Heading;
