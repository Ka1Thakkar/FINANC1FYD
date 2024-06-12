'use client'

import { Car, CarProfile, CarSimple, Envelope, EnvelopeSimple, InstagramLogo, Phone, User } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className=" flex flex-col items-center justify-start min-h-screen">
      <Navbar />
      <div className="relative w-[100vw]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent flex flex-col p-10 items-center justify-start gap-5 h-[350px]">
          <h1 className="text-white text-2xl font-semibold">
            Welcome to FINANC1FYD
          </h1>
          <p className="text-white text-sm uppercase text-center">
            Looking for a Car? Experience the exceptional at FINANC1FYD
          </p>
        </div>
        <video src="/carsquad2.mp4" autoPlay loop muted playsInline className="w-[100vw] object-cover h-[700px]"></video>
      </div>
      <div className="w-full flex-col flex items-center justify-center p-10 bg-black gap-5">
        <p className="text-white text-center text-2xl md:text-3xl font-semibold">
          Come visit us today, and drive your dream car home!
        </p>
        <button onClick={() => {router.push('/finacning')}} className="bg-orange-500 text-white text-lg px-5 py-2 rounded-md">
          Apply for Financing!
        </button>
      </div>
      <Footer />
    </main>
  );
}
