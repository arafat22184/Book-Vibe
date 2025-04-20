import React from "react";
import BannerImg from "../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-[86px] bg-gray-100 mt-8 py-20 rounded-3xl">
      <div className="space-y-12">
        <h1 className="max-w-[526px] text-[56px] font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="bg-green-400 text-white text-xl font-bold py-5 px-7 rounded-[8px]">
          View The List
        </button>
      </div>
      <div>
        <img src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
