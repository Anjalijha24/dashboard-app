// app/page.tsx
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MapComponent from "@/components/MapComponent";
import WeatherInfoCard from "@/components/WeatherInfoCard";
import TimelineSlider from "@/components/TimelineSlider";

export default function HomePage() {
  const [selectedHour, setSelectedHour] = useState(12);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4">
        <TimelineSlider onHourChange={(hour) => setSelectedHour(hour)} />

        <MapComponent />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WeatherInfoCard city="Mumbai" temperature={30} condition="Sunny" />
          <WeatherInfoCard city="Delhi" temperature={28} condition="Cloudy" />
          <WeatherInfoCard city="Bengaluru" temperature={25} condition="Rainy" />
        </div>
      </div>
    </div>
  );
}
