"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import DragAndDropFiles from "../../_component/DragAndDropFiles";
import TurfForm from "../../_component/TurfForm";
import axiosInstance from "@/helper/AxiosInterface";
import { toast } from "react-toastify";
import { useToastApi } from "@/app/_components/ToastMessage";
import { useRouter } from "next/navigation";


const EditTurfDetail = ({ params }: any) => {
  const { toastPromise } = useToastApi();
  const router = useRouter();
  const [turf, setTurf] = useState({
    name: "",
    turfType: [],
    turfLocation: "",
    turfDescription: "",
    openTime: "",
    closeTime: "",
    // turfImages: [],
    turfPrice: 0,
    // turfDuration: 0,
    turfAvailability: true,
    // turfCapacity: 0,
    // turfDistance: 0,
    // turfRating: 0,
    // turfFeedback: 0,
    // turfReviews: 0,
  });

  useEffect(() => {
    getTufDetails();
  }, []);

  const getTufDetails = async () => {
    try {
      const response = await axiosInstance.get(`/api/turf?id=${params.id}`);
      if (response.data.success) {
        const turf = response.data.data;
        setTurf({
          ...turf,
          name: turf.name,
          turfType: turf.turfType,
          turfLocation: turf.turfLocation,
          turfDescription: turf.turfDescription,
          turfPrice: turf.turfPrice,
          turfAvailability: turf.turfAvailability,
          openTime: new Date(turf.openTime),
          closeTime: new Date(turf.closeTime),
        });
      }
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred 🤯");
    }
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const addTurfApiCall = () => axiosInstance.put(`/api/turf?id=${params.id}`, turf);
    try {
      const response = await toastPromise(addTurfApiCall);

      if (response.data.success) {
        router.push("/sportbooker/home");
      }
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred 🤯");
    }
  };

  return (
    <div className="flex flex-col items-start gap-10 py-6">
      <div className="flex gap-8 w-full">
        <Link href="/sportbooker/home">
          <FiArrowLeft className="text-[#6D31ED] cursor-pointer" size={24} />
        </Link>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Edit your turf details</h1>
            <span className="text-sm">You can add up to 20 images</span>
          </div>
          <div className="flex gap-4 w-full">
            <DragAndDropFiles />
            <TurfForm
              turf={turf}
              setTurf={setTurf}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTurfDetail;
