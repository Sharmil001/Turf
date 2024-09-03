"use client";
import React, { useState } from "react";
import TurfForm from "../_component/TurfForm";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import DragAndDropFiles from "../_component/DragAndDropFiles";
import { toast } from "react-toastify";
import axiosInstance from "@/helper/AxiosInterface";
import { useToastApi } from "@/app/_components/ToastMessage";
import { useRouter } from "next/navigation";

const AddTurfDetail = () => {
  const { toastPromise } = useToastApi();
  const router = useRouter();
  const [turf, setTurf] = useState({
    name: "",
    turfType: [],
    turfLocation: "",
    turfDescription: "",
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

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const addTurfApiCall = () => axiosInstance.post("/api/turf", turf);
    try {
      const response = await toastPromise(addTurfApiCall);
      console.log(response.data);
      if (response.data.success) {
        router.push("/sportbooker/home");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "An unexpected error occurred 🤯");
    }

    console.log("Submit", turf);
  };

  return (
    <div className="flex flex-col items-start gap-10 py-6">
      <div className="flex gap-8 w-full">
        <Link href="/sportbooker/home">
          <FiArrowLeft className="text-[#6D31ED] cursor-pointer" size={24} />
        </Link>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Add your turf details</h1>
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

export default AddTurfDetail;
