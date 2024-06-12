import { CarProfile, HandCoins, Phone, User } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/logo.jpg'

const Navbar = () => {
    return (
        <>
            <div className="py-7 flex items-center gap-5 w-full justify-center lg:justify-between px-10 border-b-2 border-neutral-300">
                <Link href={'/'} className="flex gap-5 items-center">
                    {/* <div className="flex items-center gap-5">
                        <CarProfile style={{ transform: "scaleX(-1)" }} weight="bold" size={65} className="text-red-500" />
                    </div> */}
                    <Image src={logo} alt="Logo" quality={100} loading="lazy" className="h-[75px] w-fit" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-4xl">FINANC1FYD</h1>
                        <p className="text-sm">Let's Drive!</p>
                    </div>
                </Link>
                <div className="lg:flex hidden items-center gap-10 text-xl">
                    <Link href={'/about'} className="text-black font-medium">About</Link>
                    <Link href={'/financing'} className="text-black font-medium">Apply For Financing</Link>
                </div>
            </div>
            <div className="flex flex-row-reverse lg:hidden w-full">
                <Link href={'/financing'} className="w-1/2">
                    <div className="flex flex-col items-center justify-center gap-5 bg-black py-2 border border-gray-400">
                        <HandCoins weight="duotone" size={24} className="text-gray-200" />
                    </div>
                </Link>
                <Link href={'/about'} className="w-1/2">
                    <div className="flex flex-col items-center justify-center gap-5 bg-black py-2 border border-gray-400">
                        <User weight="duotone" size={24} className="text-gray-200" />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Navbar;