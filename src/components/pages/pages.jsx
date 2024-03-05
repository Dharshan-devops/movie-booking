import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Bangalore from "./Bangalore/bangalore";

function Pages() {
  return (
    <>
    <Outlet/>
    </>
  );
}

export default Pages;