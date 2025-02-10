"use client";

import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import RealtimeDate from "@/app/components/RealtimeDate";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full p-2 ">
      {/* Waktu */}
      <div className="bg-white/60 px-4 py-1 rounded-full flex items-center shadow-md text-xs font-medium">
        <RealtimeDate />
      </div>

      {/* Nama Lokasi */}
      <div className="flex items-center gap-2 bg-white/90 px-2 rounded-full shadow-md">
      <Image src="/Frame3.png" alt="TapCash" width={165} height={150} />
      </div>

      {/* Tombol Aksi */}
      <div className="flex items-center gap-3">
        <button className="bg-white/60 p-2 rounded-full shadow-md">
          <Settings size={16} className="text-gray-700" />
        </button>
        <button className="p-2 bg-red-500 rounded-full text-white shadow-md hover:bg-red-600 transition">
          <IoClose size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
