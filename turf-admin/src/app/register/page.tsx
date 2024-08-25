"use client";
import LoginDescription from "@/_components/LoginDescription";
import React, { useState } from "react";
import RegisterForm from "./_component/RegisterForm";

const RegisterPage = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log("Login", user);
  };

  return (
    <div className="bg-[#F5F1FE] h-screen flex items-center justify-center">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-around gap-6">
        <RegisterForm
          user={user}
          setUser={setUser}
          handleSubmit={handleSubmit}
        />
        <LoginDescription />
      </div>
    </div>
  );
};

export default RegisterPage;
