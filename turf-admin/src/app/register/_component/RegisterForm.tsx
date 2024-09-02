import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterForm = ({ setUser, user, handleSubmit }: any) => {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Begin your journey</h1>
      <form action="submit" onSubmit={handleSubmit} className="space-y-6">
        <div className="block">
          <label className="block text-sm font-semibold text-slate-700">
            Full name
          </label>
          <input
            type="type"
            name="fullname"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1 peer"
            placeholder="Input full name"
            onChange={(event: any) =>
              setUser({ ...user, fullname: event.target.value })
            }
            required
          />
        </div>

        <div className="block">
          <label className="block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1 peer"
            placeholder="example.email@gmail.com"
            onChange={(event: any) =>
              setUser({ ...user, email: event.target.value })
            }
            required
          />
        </div>

        <div className="block">
          <label className="block text-sm font-semibold text-slate-700">
            Phone
          </label>
          <input
            type="number"
            name="fullname"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1 peer"
            placeholder="1234567890"
            onChange={(event: any) =>
              setUser({ ...user, phone: event.target.value })
            }
            maxLength={10}
            required
          />
        </div>

        <div className="block">
          <label className="block text-sm font-semibold text-slate-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter at least 8+ characters "
            onChange={(event: any) =>
              setUser({ ...user, password: event.target.value })
            }
            required
          />
        </div>

        <button
          className="w-full px-8 py-2 text-white bg-[#6D31ED] rounded"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/assets/icons/google.svg"
            alt="google.svg"
            width={40}
            height={40}
          />
          <Image
            src="/assets/icons/facebook.svg"
            alt="facebook.svg"
            width={40}
            height={40}
          />
        </div>
        <div className="block font-normal text-center">
          Returning user?{" "}
          <span className="text-[#6D31ED] cursor-pointer font-bold">
            <Link href="/login">Login in here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
