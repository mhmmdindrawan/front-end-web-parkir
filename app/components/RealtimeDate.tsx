"use client";

import React, { useState, useEffect } from "react";

const RealtimeDate: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update setiap 1 detik

    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, []);

  return (
    <span className="text-xs font-medium text-gray-800">
      {time.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}{" "}
      - {time.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
    </span>
  );
};

export default RealtimeDate;
