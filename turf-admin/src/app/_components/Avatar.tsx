import React from "react";

const Avatar = ({ name }: any) => {
  const initial = name ? name.charAt(0).toUpperCase() : "";

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold">
      {initial}
    </div>
  );
};

export default Avatar;
