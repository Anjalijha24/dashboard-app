"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-full w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Weather Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/map" className="hover:underline">
            Map
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/settings" className="hover:underline">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
