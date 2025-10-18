import { RiDeleteBin5Line } from "react-icons/ri";
import image1 from "../assets/image1.avif";

const CardInfo = () => {
  return (
    <div className="w-full h-30  p-2 flex justify-between items-start">
      <div className="w-[60%] h-full  flex gap-5">
        <div className="w-[50%] h-full overflow-hidden rounded ">
          <img src={image1} alt="" className=" object-cover" />
        </div>
        <div className="w-[45%] h-full flex flex-col gap-5 text-black  ">
          <div
            className="text-xl text-gray-700 font-semibold tracking-wider
"
          >
            Pancake
          </div>
          <div className=" w-9/10 h-8 bg-slate-400 flex items-center justify-between overflow-hidden rounded-md text-xl border border-green-400 ">
            <button className="bg-white w-[30%] h-full cursor-pointer hover:bg-slate-200 ">
              -
            </button>
            <span className="bg-slate-200 hover:bg-slate-400 w-[40%] flex h-full justify-center items-center cursor-pointer">
              1
            </span>
            <button className="bg-white w-[30%] h-full cursor-pointer hover:bg-slate-200 ">
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className="text-green-600 font-medium tracking-widest
 flex flex-col items-end gap-5 text-sm"
      >
        <div>BDT 399/-</div>
        <RiDeleteBin5Line className="text-red-500 text-4xl " />
      </div>
    </div>
  );
};

export default CardInfo;
