import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center p-10 space-y-8">
        <Image src="/airbird.png" alt="AirBird Logo" width={250} height={250} />
        <h1 className="text-5xl font-extrabold">We provide AI Agents for your business</h1>
        <p className="text-xl">Our product is coming soon.</p>
      </div>
    </div>
  );
}