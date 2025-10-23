import { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Caterory";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import CardInfo from "../components/CardInfo";
import { useSelector } from "react-redux";

const Home = () => {
  const { cate, setCate, input, showOrder, setShowOrder } =
    useContext(dataContext);

  function filterItems(itemFromCategory) {
    if (itemFromCategory === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (it) => it.food_category === itemFromCategory
      );
      setCate(newList);
    }
  }

  const items = useSelector((state) => state.cart);

  const subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const delivery_charge = 10;
  const tax_rate = (subTotal * 0.25) / 100;

  const total_price = Math.floor(subTotal + delivery_charge + tax_rate);

  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap items-center justify-center gap-10 w-full bord">
          {Categories.map((item) => {
            return (
              <div
                className="w-28 h-32 bg-white flex flex-col items-center justify-start rounded-md gap-5 p-4 text-slate-500 font-semibold shadow-xl hover:bg-teal-100 hover:opacity-90 transition-all cursor-pointer duration-250"
                onClick={() => filterItems(item.name)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex flex-wrap items-center justify-center gap-5 px-5 py-10">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>

      {/* Cart top right */}
      <div
        className={`w-full md:w-[30vw] h-[100%] fixed top-0 right-0 overflow-auto bg-white shadow-xl transition-all duration-300 p-8 ${
          showOrder ? "translate-x-0" : "translate-x-full"
        }  `}
      >
        <header className="flex items-center justify-between text-primary ">
          <span className="font-semibold text-xl">Order Items</span>
          <RxCross1
            className="w-[20px] h-[30px] cursor-pointer hover:text-gray-600"
            onClick={() => setShowOrder(false)}
          />
        </header>

        <div className="w-full mt-8 flex flex-col  gap-5">
          {items.map((item) => (
            <CardInfo
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>

        <div className="w-full border-t-2 border-b-2 border-gray-400 text-black pb-5 mt-6">
          <div className="flex items-center justify-between pt-4">
            <span className="text-lg"> Subtotal</span>
            <span className="text-green-600 text-lg">BDT {subTotal}/- </span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-lg"> Delivery Fee</span>
            <span className="text-green-600 text-lg">
              BDT {delivery_charge}/-{" "}
            </span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-lg"> Taxes</span>
            <span className="text-green-600 text-lg">BDT {tax_rate}/- </span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between pt-4 text-xl font-bold">
            <span className=" text-gray-900 "> Total</span>
            <span className="text-green-600 ">BDT {total_price}/- </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-8/10 mx:w-auto px-6 mt-3.5 py-3 font-semibold text-white text-2xl tracking-wider bg-gradient-to-r from-teal-400 to-green-400 rounded-lg hover:bg-green-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
