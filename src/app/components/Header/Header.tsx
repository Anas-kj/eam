'use client'
import Link from "next/link";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import MobileDialogue from "./MobileDialogue";
import { navigationLinks } from "./Links";



const Header = () => {


  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
      <header className="sticky top-0 z-10 text-gray-800 shadow-md bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
          <nav 
            className="flex items-center mx-auto max-w-7xl p-4"
          >
            
              <div className="flex flex-1">
                  <Link 
                    href="/" 
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:brightness-110" 
                    aria-label="eam.com"
                  >
                    <Image 
                        src={logo} 
                        alt="eam logo" 
                        className="w-32 lg:w-36" 
                    />

                  </Link>
              </div>

              <div className="lg:hidden">
                  <button 
                    onClick={() => setShowMobileMenu(prev =>!prev)}
                    className='p-2'
                    aria-label='Open Main Menu'
                  >
                      <MenuIcon 
                          className='h-6 w-6' 
                          aria-label='Menu Icon' 
                          aria-hidden="true"
                      />
                  </button>
              </div >

              <ul className="hidden lg:flex items-center lg:gap-x-12">
                  {navigationLinks.map((link) => (
                      <Link 
                        key={link.link}
                        href={link.href}
                        className='text-sm font-semibold 
                        leading-6 relative text-gray-800 
                        group hover:text-blue-500 transition-all 
                        duration-300 hover:-translate-y-1'
                      >
                        {link.link}
                        <span 
                            className="absolute left-0 bottom-0 w-full 
                            h-[2px] bg-blue-500 scale-x-0 
                            transition-transform duration-300 
                            origin-left group-hover:scale-x-100"
                        >
                        </span>
                      </Link>
                  ))}
              </ul>
              <MobileDialogue showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>

          </nav>
    
      </header>
  )
}

export default Header
