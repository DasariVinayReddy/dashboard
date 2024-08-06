import React from "react";
import StarRating from "./rating";
import person2 from "../assets/person2.jpg";

export default function Feedback() {
  return (
    <>
      <div className="text-xl font-bold p-3 text-white ml-[-14px]">
        Customer's Feedback
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-1">
        {/* Item that spans two rows */}
        <div className="grid grid-cols-2 grid-rows-1 gap-1 ">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-full w-full rounded-full"
              src={person2}
              alt="Profile"
            />
          </div>
          <div className="ml-[-130px]">
            <p className="whitespace-nowrap text-white mr-3">Jenny Wilson</p>
          </div>
          <div className="row-span-2 mt-[-1.25rem]">
            <StarRating />
          </div>
        </div>
        {/* Second item (can be any other content) */}
        <div className="text-white p-4 mt-[-10px] mr-[-28px]">
          <p className="text-[12px] ml-[-10px]">
            The Food was Excellent and so was the serive.I had the Musjroom
            ristto with scallps was awesome.I had A burger over greens which was
            also very good .They was Very Concientious about givetes avergies
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 mb-3"></div>
      <div className="grid grid-cols-2 grid-rows-1 gap-1 ">
        <div className="h-10 w-10 flex-shrink-0">
          <img
            className="h-full w-full rounded-full"
            src={person2}
            alt="Profile"
          />
        </div>
        <div className="ml-[-130px]">
          <p className="whitespace-nowrap text-white mr-3">Jenny Wilson</p>
        </div>
        <div className="row-span-2 ">
          <StarRating />
        </div>
      </div>

      {/* Second item (can be any other content) */}
      <div className="text-white p-4  mr-[-28px]">
        <p className="text-[12px] ml-[-10px]">
          The Food was Excellent and so was the serive.I had the Musjroom ristto
          with scallps was awesome.I had A burger over greens which was also
          very good .They was Very Concientious about givetes avergies
        </p>
      </div>
      <div className="w-full h-[1px] bg-gray-500 mb-3"></div>
      <div className="grid grid-cols-2 grid-rows-1 gap-1 ">
        <div className="h-10 w-10 flex-shrink-0">
          <img
            className="h-full w-full rounded-full"
            src={person2}
            alt="Profile"
          />
        </div>
        <div className="ml-[-130px]">
          <p className="whitespace-nowrap text-white mr-3">Jenny Wilson</p>
        </div>
        <div className="row-span-2 ">
          <StarRating />
        </div>
      </div>

      {/* Second item (can be any other content) */}
      <div className="text-white p-4  mr-[-28px]">
        <p className="text-[12px] ml-[-10px]">
          The Food was Excellent and so was the serive.I had the Musjroom ristto
          with scallps was awesome.I had A burger over greens which was also
          very good .They was Very Concientious about givetes avergies
        </p>
      </div>
    </>
  );
}
