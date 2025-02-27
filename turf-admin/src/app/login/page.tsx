"use client";
import React, { useState } from "react";
import LoginForm from "./_component/LoginForm";
import LoginDescription from "../_components/LoginDescription";
import { useToastApi } from "../_components/ToastMessage";
import { useRouter } from "next/navigation";
import axiosInstance from "@/helper/AxiosInterface";

const LoginPage = () => {
  const { toastPromise } = useToastApi();
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const registerApiCall = () => axiosInstance.post(`/api/login`, user);
    try {
      const response = await toastPromise(registerApiCall);
      if (response.data.success) {
        const { jwtToken, tokenObject } = response?.data?.data;
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem('userDetails', JSON.stringify(tokenObject));
        router.push("/sportbooker/home");
      }
    } catch (error: any) {}
  }

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
