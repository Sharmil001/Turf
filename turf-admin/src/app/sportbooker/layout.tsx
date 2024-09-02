"use client";

import React from "react";
import Navbar from "../_components/Navbar";

const SportBookerLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="container px-4 m-auto">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default SportBookerLayout;
