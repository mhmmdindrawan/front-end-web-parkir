"use client";
import React, { useState } from "react";
import Image from "next/image";

const ParkingForm = () => {
  const [ticketCode, setTicketCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicketCode(e.target.value);
    setIsLoading(e.target.value.length > 0);
  };
  

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
      {/* Header */}
      <h2 className="text-gray-700 font-semibold">Kode Tiket/Karcis Parkir</h2>
      <div className="relative flex items-center mt-2 border border-gray-300 rounded-lg p-2">
        <input
          type="text"
          placeholder="Silakan scan tiket/karcis parkir"
          className="w-full outline-none text-lg px-2"
          value={ticketCode}
          onChange={handleInputChange}
        />
        <Image
          src="/Ellipse2.png"
          alt="Scan"
          width={40}
          height={40}
          className="ml-2 cursor-pointer"
        />

      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <p className="text-gray-500 text-sm mt-2">Loading...</p>
      )}

      {/* Parking Details */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
        <div>
          <p>Waktu Masuk</p>
          <p className="font-bold">-</p>
        </div>
        <div>
          <p>Waktu Keluar</p>
          <p className="font-bold">-</p>
        </div>
        <div>
          <p>Jenis Kendaraan</p>
          <p className="font-bold">-</p>
        </div>
        <div>
          <p>Durasi Parkir</p>
          <p className="font-bold">-</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-4">
        <p className="text-gray-500">Metode Pembayaran</p>
        <p className="font-semibold text-blue-600">Uang Elektronik (UNIK)</p>
      </div>

      {/* Total Fee */}
      <div className="mt-4 bg-blue-100 p-4 rounded-lg flex justify-between items-center">
        <p className="text-gray-500">Total Tarif Parkir</p>
        <p className="text-2xl font-bold text-blue-600">Rp 0</p>
      </div>

      {/* Payment Logos */}
      <div className="mt-4 flex justify-center gap-5">
      <Image src="/Frame8.png" alt="TapCash" width={550} height={405} />
      </div>
    </div>
  );
};

export default ParkingForm;
