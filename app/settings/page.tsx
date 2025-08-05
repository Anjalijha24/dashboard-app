"use client";

import React, { useState } from "react";
import TimelineSlider from "@/components/TimelineSlider";

export default function SettingsPage() {
  const [selectedHour, setSelectedHour] = useState(12);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <TimelineSlider onHourChange={(hour) => setSelectedHour(hour)} />
      <p className="mt-4 text-gray-700">
        Currently selected hour: <strong>{selectedHour}:00</strong>
      </p>
    </main>
  );
}
