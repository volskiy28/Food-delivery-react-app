import React, { useState } from "react";
import { data } from "../data/data";

export default function Food() {
  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterByPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="">
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className=" flex justify-between flex-wrap">
            <button
              onClick={() => {
                setFoods(data);
              }}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className=" m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Prices</p>
          <div className="flex justify-between max-w-[390px]">
            <button
              onClick={() => filterByPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              $
            </button>
            <button
              onClick={() => filterByPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              $$
            </button>
            <button
              onClick={() => filterByPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              $$$
            </button>
            <button
              onClick={() => filterByPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:animate-pulse"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold ">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
