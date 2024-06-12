'use client'
import { CarProfile, EnvelopeSimple, Headphones, InstagramLogo, Phone, User } from "@phosphor-icons/react";
import Link from "next/link";
import AboutImage from '@/public/about-us-980x653.jpg'
import Image from "next/image";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col xl:flex-row gap-10 px-2 sm:px-10">
                <div className="sm:px-24 px-5 lg:px-0 py-10 w-full flex flex-col justify-between lg:flex-row gap-20">
                    <div className="">
                        <h1 className="text-3xl font-medium">
                            About Us
                        </h1>
                        <p className="mt-10 font-medium">
                            Established with a commitment to revolutionize the car-buying experience, FINANC1FYD Dealership stands as a beacon of reliability and excellence in Toronto's automotive industry. Our journey began with a simple yet profound vision: to provide customers with unparalleled access to the finest vehicles coupled with the most competitive financing options available. With this guiding principle at our core, we've meticulously curated a comprehensive inventory of top-quality cars, ensuring there's something for every taste and preference. Whether you're seeking a compact commuter, a family-friendly SUV, or a luxurious sedan, we've got you covered. At FINANC1FYD, we understand that purchasing a car is more than just a transaction – it's an investment in your lifestyle and future. That's why we prioritize transparency, integrity, and customer satisfaction in every interaction, striving to exceed expectations at every turn.<br /><br />

                            What sets FINANC1FYD apart from the rest is our unwavering commitment to making the car-buying process as seamless and stress-free as possible. With access to a network of trusted financial institutions and partnerships with leading banks, we offer our customers exclusive access to the lowest interest rates on the market. Our team of seasoned professionals understands the intricacies of automotive financing and works tirelessly to tailor solutions that fit your unique needs and budget constraints. Whether you have impeccable credit or are facing financial challenges, we believe that everyone deserves the opportunity to drive their dream car. At FINANC1FYD, we go above and beyond to turn your automotive aspirations into reality, guiding you through every step of the process with personalized attention and expertise.<br /><br />

                            At the heart of FINANC1FYD Dealership lies a deep-rooted passion for empowering our customers and enriching their lives through exceptional vehicles and unparalleled service. We take pride in fostering long-lasting relationships built on trust, reliability, and mutual respect. Our commitment to excellence extends beyond the showroom floor – it's ingrained in everything we do. From our meticulously maintained inventory to our dedicated team of automotive enthusiasts, every aspect of the FINANC1FYD experience is designed to exceed your expectations. Whether you're a first-time buyer or a seasoned car enthusiast, we welcome you to join the FINANC1FYD family and embark on a journey of automotive excellence like never before. Discover the difference that quality, integrity, and passion can make – visit FINANC1FYD Dealership today and experience the future of car buying.
                        </p>
                    </div>
                    <Image src={AboutImage} alt="About Us" className="mt-10 w-full lg:w-5/12 h-fit" />
                </div>
                <div className="sm:px-16 px-2 lg:w-4/12 lg:px-0 py-10 w-full">
                    <div className="flex items-center justify-center gap-5 w-full bg-red-700 py-4">
                        <Headphones weight="fill" size={32} className="text-white" />
                        <h1 className="text-3xl font-semibold text-white">
                            Contact Us
                        </h1>
                    </div>
                    <div className="flex bg-stone-200/50 items-center justify-start gap-5 lg:px-5 px-20 py-5 border-b-[1px] border-stone-300">
                        <p className="text-stone-500 font-medium">Sales : <span className="font-semibold text-black">+1 705-770-3546</span></p>
                    </div>
                    <div className="flex flex-col bg-stone-200/50 items-start justify-center gap-5 px-20 lg:px-5 py-5 border-b-[1px] border-stone-300">
                        <p className="text-black text-2xl font-bold">Visit Us</p>
                        <p className="text-stone-500 font-medium capitalize">
                            1205 Finch Avenue West<br />North York<br />Toronto<br />M3J 2E8
                        </p>
                    </div>
                    <div className="flex flex-col bg-stone-200/50 items-start justify-center gap-5 lg:px-5 px-20 py-5">
                        <p className="text-black text-2xl font-bold">Hours of Operation</p>
                        <div className="grid grid-cols-2 gap-y-1">
                            <p className="text-stone-500 font-medium">
                                Monday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 8:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Tuesday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 8:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Wednesday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 8:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Thursday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 8:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Friday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 6:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Saturday
                            </p>
                            <p className="text-stone-500 font-medium">
                                9:00 AM to 6:00 PM
                            </p>
                            <p className="text-stone-500 font-medium">
                                Sunday
                            </p>
                            <p className="text-stone-500 font-medium">
                                BY APPOINTMENT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;