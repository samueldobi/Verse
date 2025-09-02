// import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Hero from "./ui/home/hero";
import Features from "./ui/home/features";

export default function Home() {
  return (
     <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar/>
      {/* Hero Section */}
      <Hero/>
      {/* Feature Highlights */}
      <Features/>
    </div>
  );
}
