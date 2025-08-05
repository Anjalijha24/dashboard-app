"use client";

import React from "react";
import { motion } from "framer-motion";

interface WeatherInfoCardProps {
  city: string;
  temperature: number;
  condition: string;
}

const WeatherInfoCard: React.FC<WeatherInfoCardProps> = ({
  city,
  temperature,
  condition,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow rounded-xl p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        {city}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {temperature}°C - {condition}
      </p>
    </motion.div>
  );
};

export default WeatherInfoCard;
