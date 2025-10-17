import React from "react";
import Nav from "../components/Nav";
import Categories from "../Caterory";

const Home = () => {
  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />
      <div className="flex flex-wrap items-center justify-center gap-6 w-full">
        {Categories.map((item) => {
          return (
            <div className="w-28 h-32 bg-white flex flex-col items-center justify-start rounded-md gap-5 p-4 text-slate-500 font-semibold shadow-xl hover:bg-teal-100 hover:opacity-90 transition-all cursor-pointer duration-250">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
