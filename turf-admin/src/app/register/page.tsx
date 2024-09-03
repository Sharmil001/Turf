"use client";
import React, { useState } from "react";
import RegisterForm from "./_component/RegisterForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoginDescription from "../_components/LoginDescription";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useToastApi } from "../_components/ToastMessage";
import axiosInstance from "@/helper/AxiosInterface";

enum APISTATE {
  PENDING = 0,
  SUCCESS = 1,
  ERROR = 2,
}

const RegisterPage = () => {
  const router = useRouter();
  const { toastPromise } = useToastApi();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const registerApiCall = () => axiosInstance.post("/api/register", user);

    try {
      const response = await toastPromise(registerApiCall);
      if (response.data.success) {
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error?.message || "An unexpected error occurred 🤯");
    }
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
