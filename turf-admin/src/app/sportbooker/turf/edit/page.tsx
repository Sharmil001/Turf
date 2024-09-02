"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import DragAndDropFiles from "../_component/DragAndDropFiles";
import TurfForm from "../_component/TurfForm";

const EditTurfDetail = () => {
  const [turf, setTurf] = useState({
    name: "",
    turfType: "",
    openTime: new Date(),
    closeTime: new Date(),
    pricePerHour: "",
    address: "",
  });

  const handleSubmit = () => {};

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
