import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/UI/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
