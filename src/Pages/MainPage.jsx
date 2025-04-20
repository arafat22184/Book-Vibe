import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "../Component/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-396px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
