import React from "react";
import { TurfDetails } from "../page";
import Image from "next/image";

const TufList = ({ turfDetails }: any) => {
  return (
    <div className="flex flex-col gap-2">
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
              <h2 className="text-xl font-bold">{turf.name}</h2>
              <hr className="w-10 my-2"/>
              <div className="block">
                {turf.turfType.map((type, index) => (
                  <span
                    key={index}
                    className="text-[#565D6D] font-semibold text-[12px]"
                  >
                    {type.label}
                    {index < turf.turfType.length - 1 && <span> • </span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="font-semibold text-md">₹{turf.turfPrice}</div>/hr
            </div>
          </div>
        </div>
        // <h1>{turf.name}</h1>
      ))}
    </div>
  );
};

export default TufList;
