"use client";

import { useEffect } from "react";

export const DbAwake = () => {
  useEffect(() => {
    // Only run this in development mode (localhost)
    if (process.env.NODE_ENV === "development") {
      
      const ping = () => {
        fetch("/api/wake-up").catch(err => console.error("Ping failed", err));
      };

      // 1. Ping immediately when the app loads
      ping();

      // 2. Ping every 4 minutes (240,000 ms) to beat the 5-minute sleep timer
      const interval = setInterval(ping, 240000);

      return () => clearInterval(interval);
    }
  }, []);

  return null; // It renders nothing visible
};