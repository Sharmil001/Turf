"use client";

import axiosInstance from "@/helper/AxiosInterface";
import { useState, useEffect } from "react";
import NotFound from "./_component/NotFound";
import TufList from "./_component/TufList";
import { toast } from "react-toastify";

interface Dropdown {
  label: string;
  value: string;
}

export interface TurfDetails {
  name: string;
  turfType: Dropdown[];
  turfLocation: string;
  turfDescription: string;
  turfPrice: number;
  turfAvailability: boolean;
}

const HomePage = () => {
  const [turfDetails, setTurfDetails] = useState<TurfDetails | null>(null);

  const getTufDetails = async () => {
    try {
      const response = await axiosInstance.get("/api/turf");
      if (response.data.success) {
        setTurfDetails(response.data.data);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "An unexpected error occurred 🤯");
    }
  };

  useEffect(() => {
    getTufDetails();
  }, []);

  return !turfDetails ? <NotFound /> : <TufList turfDetails={turfDetails} />;
};

export default HomePage;
