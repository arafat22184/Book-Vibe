import React from "react";
import Banner from "../Component/Banner";
import Books from "../Component/Books";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
