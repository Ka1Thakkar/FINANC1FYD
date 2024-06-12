import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="w-full flex-col flex items-center justify-center p-10 bg-neutral-800 gap-5">
                <p className="text-white text-center text-2xl md:text-3xl font-semibold uppercase">
                    Experience the exceptional at FINANC1FYD
                </p>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-10 items-start justify-between p-10 bg-black">
                <div className="flex flex-col items-start sm:w-1/2 justify-center gap-5 font-medium">
                    <p className="text-white text-2xl font-semibold">OUR HOURS</p>
                    <div className="grid grid-cols-2 gap-y-4">
                        <p className="text-white font-medium">
                            Monday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 8:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Tuesday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 8:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Wednesday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 8:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Thursday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 8:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Friday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 6:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Saturday
                        </p>
                        <p className="text-white font-medium">
                            9:00 AM to 6:00 PM
                        </p>
                        <p className="text-white font-medium">
                            Sunday
                        </p>
                        <p className="text-white font-medium">
                            BY APPOINTMENT
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-1/2 justify-center gap-4 font-medium">
                    <p className="text-white text-2xl font-semibold">CONNECT WITH US</p>
                    <div className="flex items-center gap-5 mt-2">
                        <Phone weight="duotone" size={28} className="text-orange-500" />
                        <p className="text-white">Call us at 705-770-3546</p>
                    </div>
                    {/* <div className="flex items-start gap-5">
                        <EnvelopeSimple weight="fill" size={24} className="text-red-500" />
                        <p className="text-white">Email us at info@financ1fyd.com</p>
                    </div> */}
                    <Link href={'https://www.instagram.com/financ1fyd/'}>
                        <div className="flex items-center gap-5">
                            <InstagramLogo weight="duotone" size={28} className="text-orange-500" />
                            <p className="text-white">Follow us on Instagram</p>
                        </div>
                    </Link>
                    <Link href={'https://wa.me/message/AIWQV7NM6B4IA1'}>
                        <div className="flex items-center gap-5">
                            <WhatsappLogo weight="duotone" size={28} className="text-orange-500" />
                            <p className="text-white">Contact us on WhatsApp</p>
                        </div>
                    </Link>
                    <p className="text-white text-2xl font-semibold mt-5">
                        For updates:
                    </p>
                    <div className="flex gap-5 mt-2">
                        <Link href={'https://www.facebook.com/share/B9cBA7bNdWBWwGhU/?mibextid=qi2Omg'}>
                            <div className="flex items-center gap-5">
                                <FacebookLogo weight="duotone" size={28} className="text-orange-500" />
                                <p className="text-white">Facebook</p>
                            </div>
                        </Link>
                        <Link href={'https://wa.me/message/AIWQV7NM6B4IA1'}>
                            <div className="flex items-center gap-5">
                                <TiktokLogo weight="duotone" size={28} className="text-orange-500" />
                                <p className="text-white">TikTok</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div></>
    );
}

export default Footer;