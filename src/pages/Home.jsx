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
        className={`w-full md:w-[30vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl transition-all duration-300 p-8 ${
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

        {/* <CardInfo /> */}
      </div>
    </div>
  );
};

export default Home;
