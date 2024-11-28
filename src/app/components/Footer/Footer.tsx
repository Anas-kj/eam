"use client"

import Image from "next/image"
import logo from "../../../../public/logo.png"
import { FaFaceDizzy, FaLinkedin } from "react-icons/fa6";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0da3b0] text-gray-300 py-10 relative lg:flex lg:items-center">

        <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path className="block w-[calc(100% + 1.3px)] h-16 shape-fill fill-[#fff]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 mt-24">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-8 lg:mb-0">
                <div className="flex items-center mb-4">
                <Image src={logo} alt="logo" width={100} height={100} />
                </div>
                <p className="text-sm mb-4 max-w-xs">
                Making the world a better place.
                </p>
                <div className="flex space-x-4 text-white">
                <a href="#" className="hover:text-white">
                    <FaLinkedin className="hover:scale-100 hover:text-gray-400 w-5 h-5"/>
                </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full lg:w-auto text-sm mx-auto">
                <div>
                <h5 className="text-gray-600 font-semibold mb-4 uppercase">Company</h5>
                <ul>
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">About us</a></li>
                    <li><a href="#" className="hover:text-white">Services</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
                </div>

                <div>
                <h5 className="text-gray-600 font-semibold mx-auto mb-4 uppercase ">Get in Touch</h5>
                <ul>
                    <li><Link href="#" className="hover:text-white">Contact</Link></li>
                    <li><Link href="#" className="hover:text-white">contact@eam.com</Link></li>
                    <li><Link href="#" className="hover:text-white">+216 39 494 949</Link></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="mt-8 border-t border-white pt-4 text-sm text-white text-center lg:text-left">
            © 2025 EAM, Inc. All rights reserved.
            </div>
        </div>
    </footer>

    
  )
}
