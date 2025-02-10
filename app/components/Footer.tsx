"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full px-6 py-2 rounded-full mt-6 mb-6">
      {/* Copyright */}
      <span className="text-xs text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
        Copyright BCT 2024
      </span>

      {/* Center Buttons */}
      <div className="flex gap-3">
        <button className="bg-green-500 text-white text-xs px-4 py-1 rounded-full shadow-md">
          Gate Controller
        </button>
        <button className="bg-pink-500 text-white text-xs px-4 py-1 rounded-full shadow-md">
          Payment
        </button>
      </div>

      {/* BSS Parking */}
      <span className="text-xs text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
        BSS Parking
      </span>
    </footer>
  );
}
