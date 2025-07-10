import { Routes, Route } from "react-router";
import { Navbar } from "../components/Navbar";

export function Initial() {
  return (
    <div className="w-screen h-screen bg-[#16181D]">
      <Navbar />
    </div>
  );
}
