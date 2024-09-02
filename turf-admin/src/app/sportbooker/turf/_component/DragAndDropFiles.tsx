import React from "react";
import { FiArrowUp } from "react-icons/fi";

const DragAndDropFiles = () => {
  return (
    <div className="w-1/2 shadow-lg bg-white p-6 rounded-md flex flex-col justify-center items-center text-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-[#F1F8FD] h-[120px] w-[120px]">
        <FiArrowUp className="bg-[#379AE6] text-white rounded-full" size={50} />
      </div>
      <div className="block">
        <h1 className="text-xl font-bold">
          <span className="text-[#379AE6]">Click to choose file</span> or drag
          and drop
        </h1>
        <p className="font-normal text-sm">
          Your ideas will be private until you publish them
        </p>
      </div>
    </div>
  );
};

export default DragAndDropFiles;
