import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col justify-center items-center text-center gap-4">
      <Image
        src="/assets/images/turf-no-found.svg"
        alt="turf-no-found.svg"
        width={300}
        height={300}
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-2xl">No turf added</h2>
        <p>It looks like there are no turfs added yet.</p>
      </div>

      <Link href="/sportbooker/turf/add">
        <button className="bg-[#F5F1FE] text-[#6D31ED] py-2 px-6 font-semibold rounded-md">
          Add Turf Details
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
