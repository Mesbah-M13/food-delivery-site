import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] px-4 md:px-8  ">
      <div className="w-16 h-16 bg-white flex items-center justify-center rounded shadow-2xl">
        <MdFastfood className="text-primary text-3xl" />
      </div>

      <form
        action=""
        className="flex rounded-md shadow-lg bg-white w-[45%] md:w-[70%] px-6 py-4 "
      >
        <IoSearch className="text-black text-lg md:text-3xl" />
        <input
          type="text"
          placeholder="Search your dish..."
          className=" text-slate-700 pl-4 w-full border-none outline-none text-sm md:text-3xl "
        />
      </form>

      <div className="relative w-16 h-16 bg-white flex items-center justify-center rounded shadow-2xl">
        <span className="text-primary font-semibold text-lg absolute top-0 right-2">
          0
        </span>
        <LuShoppingBag className="text-primary text-3xl" />
      </div>
    </div>
  );
};

export default Nav;
