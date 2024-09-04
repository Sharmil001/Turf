import React from "react";
import { TurfDetails } from "../page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiTrash } from "react-icons/fi";
import axiosInstance from "@/helper/AxiosInterface";
import { toast } from "react-toastify";
import { useToastApi } from "@/app/_components/ToastMessage";

const TufList = ({ turfDetails, deleteTurf }: any) => {
  const router = useRouter();
  const getTurfDetails = (turf: TurfDetails) => {
    router.push(`/sportbooker/turf/edit/${turf._id}`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl mt-4">Turf's Details</h1>
      {turfDetails.map((turf: TurfDetails, index: number) => (
        <div className="flex gap-10 w-full border-b-2 py-6" key={index}>
          <div className="block">
            <Image
              src="/assets/images/field.png"
              alt="field.png"
              width={400}
              height={260}
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[#565D6D] text-[12px]">
                {turf.turfLocation}
              </span>
              <h2
                className="text-xl font-bold hover:text-[#6D31ED] cursor-pointer w-fit"
                onClick={() => getTurfDetails(turf)}
              >
                {turf.name}
              </h2>
              <hr className="w-10 my-2" />
              <div className="block">
                {turf.turfType.map((type, index) => (
                  <span
                    key={index}
                    className="text-[#565D6D] font-semibold text-[12px]"
                  >
                    {type.label}
                    {index < turf.turfType.length - 1 && (
                      <span> &nbsp; • &nbsp;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-md">₹{turf.turfPrice}</span>
                /hr
              </div>
              <button
                className="px-2 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
                type="submit"
                onClick={() => deleteTurf(turf)}
              >
                <FiTrash size={14} />
              </button>
            </div>
          </div>
        </div>
        // <h1>{turf.name}</h1>
      ))}
    </div>
  );
};

export default TufList;
