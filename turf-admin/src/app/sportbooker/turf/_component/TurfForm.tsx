import Link from "next/link";
import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { MultiSelect } from "react-multi-select-component";

const TurfForm = ({ handleSubmit, setTurf, turf }: any) => {
  const options = [
    { label: "Cricket", value: "cricket" },
    { label: "Football", value: "football" },
    { label: "Badminton", value: "badminton" },
  ];

  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="space-y-6 w-1/2 p-4 pt-0"
    >
      <div className="block">
        <label className="block text-sm font-semibold text-slate-700">
          Name
        </label>
        <input
          type="type"
          name="name"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1 peer"
          placeholder="Input turf name"
          onChange={(event: any) =>
            setTurf({ ...turf, name: event.target.value })
          }
          required
        />
      </div>

      <div className="block">
        <label className="block text-sm font-semibold text-slate-700">
          Turf Type
        </label>
        <MultiSelect
          className="mt-1 py-2 bg-white placeholder-slate-400 focus:outline-none focus:border-[#6D31ED] focus:ring-[#6D31ED] block w-full rounded-md sm:text-sm focus:ring-1 peer"
          options={options}
          value={turf.turfType}
          onChange={(selected: any) => {
            // const selectedValues = selected.map((option: any) => option.value);
            setTurf({ ...turf, turfType: selected });
          }}
          labelledBy="Select"
        />
      </div>
      <div className="flex gap-2">
        <div className="block w-1/2">
          <label className="block text-sm font-semibold text-slate-700">
            Open time
          </label>
          <DatePicker
            selected={turf.openTime}
            onChange={(date: any) => setTurf({ ...turf, openTime: date })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6D31ED] focus:ring-[#6D31ED] block w-full rounded-md sm:text-sm focus:ring-1 peer"
            placeholderText="Select open time"
          />
        </div>

        <div className="block w-1/2">
          <label className="block text-sm font-semibold text-slate-700">
            Close time
          </label>
          <DatePicker
            selected={turf.closeTime}
            onChange={(date: any) => setTurf({ ...turf, closeTime: date })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6D31ED] focus:ring-[#6D31ED] block w-full rounded-md sm:text-sm focus:ring-1 peer"
            placeholderText="Select close time"
          />
        </div>
      </div>

      <div className="block">
        <label className="block text-sm font-semibold text-slate-700">
          Price per hour
        </label>
        <input
          type="number"
          value={turf.pricePerHour}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6D31ED] focus:ring-[#6D31ED] block w-full rounded-md sm:text-sm focus:ring-1 peer"
          placeholder="Input price per hour"
          onChange={(event) =>
            setTurf({ ...turf, turfPrice: event.target.value })
          }
          required
        />
      </div>

      <div className="block">
        <label className="block text-sm font-semibold text-slate-700">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows={4}
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#[#6D31ED]] focus:ring-[#[#6D31ED]] block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Input turf address"
          onChange={(event: any) =>
            setTurf({ ...turf, turfLocation: event.target.value })
          }
          required
        ></textarea>
      </div>

      <div className="flex gap-4 items-center justify-end">
        <Link href="/sportbooker/home">Cancel</Link>
        <button
          className="px-8 py-2 text-white bg-[#6D31ED] rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TurfForm;
