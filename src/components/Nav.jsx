import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] px-8  ">
      <div className="w-16 h-16 bg-white flex items-center justify-center rounded shadow-2xl">
        <MdFastfood className="text-green-600 text-3xl" />
      </div>

      <form action="" className="flex rounded bg-white w-[70%] px-6 py-4">
        <IoSearch className="text-black text-3xl" />
        <input
          type="text"
          placeholder="Search your dish..."
          className="text-slate-700 pl-4 "
        />
      </form>

      <div className="w-16 h-16 bg-white flex items-center justify-center rounded shadow-2xl">
        <LuShoppingBag className="text-green-600 text-3xl" />
      </div>
    </div>
  );
};

export default Nav;
