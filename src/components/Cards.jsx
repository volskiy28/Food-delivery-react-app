import React from "react";

export default function Cards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2 ">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2 ">Added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="rounded-xl relative">
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">Desserts Delivery</p>
          <p className="px-2 ">Tasty treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </div>
  );
}
