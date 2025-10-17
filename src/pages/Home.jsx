import React from "react";
import Nav from "../components/Nav";
import Categories from "../Caterory";
import Card from "../components/Card";
import { food_items } from "../food";

const Home = () => {
  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />
      <div className="flex flex-wrap items-center justify-center gap-10 w-full bord">
        {Categories.map((item) => {
          return (
            <div className="w-28 h-32 bg-white flex flex-col items-center justify-start rounded-md gap-5 p-4 text-slate-500 font-semibold shadow-xl hover:bg-teal-100 hover:opacity-90 transition-all cursor-pointer duration-250">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-5 px-5 py-10">
        {food_items.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
