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
                <div className="sm:px-24 px-5 lg:px-0 py-10 flex flex-col lg:flex-row gap-5">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-medium">
                            About Us
                        </h1>
                        <p className="mt-10 font-medium">
                            Welcome to the Carsquad website, a fast and convenient way to research and find a vehicle that is right for you. Whether you are looking for a new or used car, truck, or SUV you will find it here. We have helped many customers in or near Mississauga, Brampton, Vaughan, Toronto and North York find the of their dreams!
                            <br />
                            <br />
                            We know that prospective customers are extremely well educated when researching their next vehicle. Carsquad has made it easy to get all the available vehicle information so you can spend less time researching and more time enjoying your purchase. Check out our new specials and used specials for additional savings on your next vehicle.
                            <br />
                            <br />
                            As a premier dealer, we have a huge selection of new and used vehicles from which to choose. Carsquad online and offline customers enjoy vehicle specials every day. We offer service & parts, an online inventory, and outstanding financing options, making Carsquad a preferred dealer serving Mississauga, Brampton, Vaughan, Toronto and North York area buyers. Ready to set up a test drive? Visit our Brampton area dealership in Mississauga, ON today!
                        </p>
                    </div>
                    <Image src={AboutImage} alt="About Us" className="mt-10 w-full lg:w-1/2 h-fit" />
                </div>
                <div className="sm:px-16 px-2 lg:px-0 py-10 w-full">
                    <div className="flex items-center justify-center gap-5 w-full bg-red-700 py-4">
                        <Headphones weight="fill" size={32} className="text-white" />
                        <h1 className="text-3xl font-semibold text-white">
                            Contact Us
                        </h1>
                    </div>
                    <div className="flex bg-stone-200/50 items-center justify-start gap-5 lg:px-5 px-20 py-5 border-b-[1px] border-stone-300">
                        <p className="text-stone-500 font-medium">Sales : <span className="font-semibold text-black">+1 (905) 888-8888</span></p>
                    </div>
                    <div className="flex flex-col bg-stone-200/50 items-start justify-center gap-5 px-20 lg:px-5 py-5 border-b-[1px] border-stone-300">
                        <p className="text-black text-2xl font-bold">Visit Us</p>
                        <p className="text-stone-500 font-medium">
                            2206 Dundas St. E.,<br />
                            Mississauga, ON<br />
                            L4X 1L9
                            <br />
                            <br />
                            357 Guelph St.,<br />
                            Georgetown, ON<br />
                            L7G 4B6
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