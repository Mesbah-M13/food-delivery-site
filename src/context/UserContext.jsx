import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");

  const [showOrder, setShowOrder] = useState(false);

  const data = {
    input,
    setInput,
    cate,
    setCate,

    showOrder,
    setShowOrder,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default UserContext;
