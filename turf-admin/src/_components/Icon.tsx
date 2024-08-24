import React from "react";
import { IconType } from "react-icons";
import { FaHome, FaUser, FaSearch } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

interface IconProps {
  name: string;
  size?: string | number;
  color?: string;
}

const icons: { [key: string]: IconType } = {
  home: FaHome,
  user: FaUser,
  search: FaSearch,
  settings: MdSettings,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
};

export default Icon;
