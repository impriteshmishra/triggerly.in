"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
    {
        name: "Products",
        href: "/products",
    },
    {
        name: "Solutions",
        href: "/solutions",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Resources",
        href: "/resources",
    },
];

export const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <div className="flex justify-between items-center h-16 z-100">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Triggerly</h1>
            </div>
            <div className="hidden lg:flex gap-8">
                {menuItems.map((item) => (
                    <Link href={item.href} key={item.name}>{item.name}</Link>
                ))}
            </div>
            <div className="hidden lg:flex gap-6">
                <Button variant="outline" className="bg-white text-black border-black">Login</Button>
                <Button>Get Started</Button>
            </div>


            {/* Mobile Menu Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className=" lg:hidden  "
            >
                {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </Button>



            {/* Mobile Menu */}
            <motion.nav
                initial={{ y: "-100%", opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className={`lg:hidden bg-white shadow-md fixed top-[4rem] left-0 w-full z-40 ${isOpen ? "block" : "hidden"}`}
            >
                <ul className="flex flex-col space-y-4 py-4 px-6">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/features" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </motion.nav>

        </div>
    )
}
