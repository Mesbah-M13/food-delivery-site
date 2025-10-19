import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItem } from "../Redux/cartSlice";

const CardInfo = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-30  p-2 flex justify-between items-start rounded-2xl border-slate-400 shadow-2xl">
      <div className="w-[60%] h-full  flex gap-5">
        <div className="w-[50%] h-full overflow-hidden rounded ">
          <img src={image} alt="" className=" object-cover" />
        </div>
        <div className="w-[45%] h-full flex flex-col gap-5 text-black  ">
          <div className="text-xl text-gray-700 font-semibold tracking-wider">
            {name}
          </div>
          <div className=" w-9/10 h-8 bg-slate-400 flex items-center justify-between overflow-hidden rounded-md text-xl border border-green-400 ">
            <button className="bg-white w-[30%] h-full cursor-pointer hover:bg-slate-200 ">
              -
            </button>
            <span className="bg-slate-200 hover:bg-slate-400 w-[40%] flex h-full justify-center items-center cursor-pointer">
              {qty}
            </span>
            <button className="bg-white w-[30%] h-full cursor-pointer hover:bg-slate-200 ">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-primary font-medium tracking-wide flex flex-col items-end gap-5 text-sm">
        <div className="text-xl">BDT {price}/-</div>
        <RiDeleteBin5Line
          className="text-red-500 text-4xl cursor-pointer "
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
};

export default CardInfo;
