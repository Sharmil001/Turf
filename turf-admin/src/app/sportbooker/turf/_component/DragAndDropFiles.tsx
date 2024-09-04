import React, { useState } from "react";
import { FiArrowUp, FiTrash, FiImage } from "react-icons/fi";
import { CiImageOn } from "react-icons/ci";

const DragAndDropFiles = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useState([]);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files: any) => {
    const fileArray = Array.from(files).slice(0, 10 - images.length);
    const updatedImages: any = [...images, ...fileArray];

    setImages(updatedImages);
  };

  const handleRemoveImage = (index: any) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleFileInputChange = (e: any) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => formData.append("files", image));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Files uploaded successfully!");
      } else {
        alert("Failed to upload files.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="w-1/2">
      <input
        type="file"
        multiple
        className="hidden"
        id="fileInput"
        onChange={handleFileInputChange}
      />
      <label
        htmlFor="fileInput"
        className={`shadow-lg bg-white p-6 rounded-md flex flex-col justify-center items-center text-center gap-4 border-2 cursor-pointer ${
          isDragging ? "border-blue-500" : "border-transparent"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-center rounded-full bg-[#F1F8FD] h-[100px] w-[100px]">
          {/* <FiArrowUp
            className="bg-[#379AE6] text-white rounded-full"
            size={44}
          /> */}
          <CiImageOn
            className="bg-[#379AE6] text-white rounded-full p-2"
            size={50}
          />
        </div>
        <div className="block">
          <h1 className="text-md font-bold">
            <span className="text-[#379AE6]">
              Drop your images here or Browse
            </span>
          </h1>
        </div>

        {/* <label
          htmlFor="fileInput"
          className="text-blue-500 cursor-pointer mt-4"
        >
          {images.length < 10 ? "Add more files" : "Maximum 10 files allowed"}
        </label> */}
      </label>

      {/* Selected Images List */}
      <div className="mt-4">
        {images.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-24 h-24 bg-gray-200 rounded-md"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-neutral-600 hover:bg-neutral-900 text-white p-[5px] rounded-full"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FiTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropFiles;
