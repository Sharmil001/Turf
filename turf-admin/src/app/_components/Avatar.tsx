"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Avatar = ({ userDetails }: any) => {
  // const user = JSON.parse(userDetails);

  const initial = userDetails?.fullName
    ? userDetails?.fullName.split(" ")[0].charAt(0).toUpperCase()
    : "";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeDropdown);
    } else {
      document.removeEventListener("mousedown", closeDropdown);
    }

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  const logout = (event: any) => {
    event.preventDefault();
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold cursor-pointer"
        onClick={toggleDropdown}
      >
        {initial}
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <div className="block px-4 py-2">
              <span
                className="block font-bold text-mg text-black mb-1"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {userDetails?.fullName},
              </span>
              <div className="text-[12px] text-gray-600 italic">
                {userDetails?.email}
              </div>
              <div className="text-[12px] text-gray-600 italic">
                Owns <b>{userDetails?.turfCount || 4} turf's </b>
              </div>
            </div>

            <Link
              href="/sportbooker/payments"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-4"
              onClick={toggleDropdown}
            >
              <b>💸 Payment Details</b>
            </Link>
            <Link
              href="/sportbooker/tenants"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-5"
              onClick={toggleDropdown}
            >
              <b>🟫 Tenants</b>
            </Link>
          </div>
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              id="menu-item-6"
              onClick={logout}
            >
              <b className="flex gap-2 text-center">
                <AiOutlineLogout size={24} />
                Logout
              </b>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
