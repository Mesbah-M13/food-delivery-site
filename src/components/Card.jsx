import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";

const Card = ({ name, image, price, type }) => {
  return (
    <div className="text-black w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-4 shadow-xl  hover:border-2 transition-all border-green-300  ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg ">
        <img src={image} alt="" className="object-cover" />{" "}
      </div>
      <div className="text-2xl font-semibold"> {name} </div>
      <div>
        {" "}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-primary">BDT: {price} /-</div>
          <div className="flex items-center justify-between gap-2 text-primary font-semibold">
            {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
            <span>{type}</span>
          </div>
        </div>
      </div>

      <button className="bg-green-200 py-4 w-full rounded-md border border-transparent hover:border-black hover:bg-green-300 text-md transition-all duration-100">
        {" "}
        Add To Dish
      </button>
    </div>
  );
};

export default Card;
