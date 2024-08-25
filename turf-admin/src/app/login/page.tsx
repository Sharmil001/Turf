"use client";
import LoginDescription from "@/_components/LoginDescription";
import React, { useState } from "react";
import LoginForm from "./_component/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log("Login", user);
  };

  return (
    <div className="bg-[#F5F1FE] h-screen flex items-center justify-center">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-around gap-6">
        <LoginForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
        <LoginDescription />
      </div>
    </div>
  );
};

export default LoginPage;
