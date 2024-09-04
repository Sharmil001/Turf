"use client";

import axiosInstance from "@/helper/AxiosInterface";
import { useState, useEffect } from "react";
import NotFound from "./_component/NotFound";
import TufList from "./_component/TufList";
import { toast } from "react-toastify";
import { useToastApi } from "@/app/_components/ToastMessage";

interface Dropdown {
  label: string;
  value: string;
}

export interface TurfDetails {
  _id: string;
  name: string;
  turfType: Dropdown[];
  turfLocation: string;
  turfDescription: string;
  turfPrice: number;
  turfAvailability: boolean;
}

const HomePage = () => {
  const { toastPromise } = useToastApi();
  const [turfDetails, setTurfDetails] = useState<TurfDetails[] | []>([]);

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

  const deleteTurf = async (turf: TurfDetails) => {
    const delteTurfApiCall = () =>
      axiosInstance.delete(`/api/turf?id=${turf._id}`);

    try {
      const response = await toastPromise(delteTurfApiCall);
      if (response.data.success) {
        setTurfDetails(
          turfDetails?.filter((t) => t._id !== response.data.data._id)
        );
      }
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred 🤯");
    }
  };

  return turfDetails && turfDetails.length == 0 ? (
    <NotFound />
  ) : (
    <TufList turfDetails={turfDetails} deleteTurf={deleteTurf} />
  );
};

export default HomePage;
