"use client";

import React from "react";
import Header from "./components/Header";
import ParkingForm from "./components/ParkingForm";
import InfoBoxes from "./components/InfoBoxes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background.05c4765b.png')",
      }}
    >
      {/* Header */}
      <Header />

      {/* Konten Utama */}
      <div className="flex flex-grow px-6">
        {/* Form Parkir (2/3 Layar) */}
        <div className="w-2/3 flex justify-center items-center">
          <ParkingForm />
        </div>

        {/* Info Boxes (1/3 Layar) */}
        <div className="w-1/3 flex flex-col gap-6">
          <InfoBoxes />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
