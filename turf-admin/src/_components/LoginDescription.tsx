import Image from "next/image";
import React from "react";

const LoginDescription = () => {
  const loginInfo = {
    title: "Come join us",
    items: [
      {
        icon: "/assets/icons/target.svg",
        description: "Manage Your Turf with Ease and Precision",
      },
      {
        icon: "/assets/icons/clock.svg",
        description: "Stay Ahead of the Game with Real-Time \nUpdates",
      },
      {
        icon: "/assets/icons/hand-shake.svg",
        description:
          "Connect with Teams, Schedule Matches,\nand Track Performance",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl">{loginInfo.title}</h1>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/curv-lines.svg"
            alt="curv-lines.svg"
            width={100}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {loginInfo.items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image src={item.icon} alt={item.icon} width={40} height={40} />
            <p className="text=[#171A1F]" style={{ whiteSpace: "pre-wrap" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginDescription;
