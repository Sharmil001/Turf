"use client";

import React from "react";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

const SportBookerLayout = ({ children }: any) => {

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SportBookerLayout;
