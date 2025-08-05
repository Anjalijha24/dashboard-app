"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineSliderProps {
  onHourChange?: (hour: number) => void;
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({ onHourChange }) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hour = Number(e.target.value);
    onHourChange?.(hour);
  };

  return (
    <motion.div
      className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label
        htmlFor="timeline"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Select Hour: (0–23)
      </label>
      <input
        id="timeline"
        type="range"
        min="0"
        max="23"
        step="1"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleSliderChange}
      />
    </motion.div>
  );
};

export default TimelineSlider;
