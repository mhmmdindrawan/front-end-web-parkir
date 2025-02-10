"use client";
import React from "react";

const InfoBoxes = () => {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full">
      <div className="bg-white p-5 rounded-xl shadow-md h-60 flex items-center justify-center">
      <div className="bg-white/60 px-4 py-1 rounded-full flex items-center shadow-md text-xs font-medium">
      </div>
        <span className="text-3xl font-bold text-gray-400"></span>
      </div>
      <div className="bg-white p-5 rounded-xl shadow-md h-60 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-400"></span>
      </div>
    </div>
  );
};

export default InfoBoxes;
