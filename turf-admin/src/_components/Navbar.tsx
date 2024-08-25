"use client";

import Image from "next/image";
import { FiPlus, FiBell, FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";

export default function Navbar() {
  const router = useRouter();

  const addTurfDetails = () => {
    console.log('her');
    router.push("/sportbooker/turf/edit");
  };

  return (
    <div className="container mx-auto sticky top-0 left-0 w-full flex items-center justify-between py-4">
      <div className="logo cursor-pointer">
        <Image
          src="/assets/images/logo.svg"
          alt="profile"
          width={150}
          height={150}
        />
      </div>
      <div className="nav-items flex items-center justify-between gap-4">
        <FiBell className="cursor-pointer" size={24} />
        <button
          className="flex items-center gap-2 px-4 py-2 border-2 border-[#6D31ED] rounded-full bg-transparent text-[#6D31ED] font-semibold"
          onClick={addTurfDetails}
        >
          <span className="text-xl">
            <FiPlus size={24} />
          </span>
          Add Your Turf
        </button>
        <Avatar name="Sharmil" />
        <FiMenu className="cursor-pointer" size={24} />
      </div>
    </div>
  );
}
