'use client'
import Link from "next/link";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";


const Header = () => {

  const navigationLinks = [
    {link:"Home",href:"/"},
    {link:"About us",href:"/about"},
    {link:"Services",href:"/services"},
    {link:"Contact",href:"/contact"}
  ]

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
      <header>
          <nav 
            className="flex items-center mx-auto max-w-7xl p-6 lg:px-8 shadow-lg"
          >
              <div className="flex flex-1">
                  <Link href="/" className="p-1.5" aria-label="eam.com">
                    <Image src={logo} alt="eam logo" className="w-36 lg:w-40" />
                  </Link>
              </div>

            <div className="lg:hidden">
                <button 
                  onClick={() => setShowMobileMenu(prev =>!prev)}
                  className='p-2'
                  aria-label='Open Main Menu'
                >
                    <MenuIcon className='h-6 w-6' aria-label='Menu Icon' aria-hidden="true"/>
                </button>
            </div >

            <ul className="hidden lg:flex items-center lg:gap-x-12">
                {navigationLinks.map((link) => (
                    <Link 
                      key={link.link}
                      href={link.href}
                      className='text-sm font-semibold leading-6'
                    >
                      {link.link}
                    </Link>
                  ))}
            </ul>

        <Dialog 
            as="div" 
            className="lg:hidden" 
            open={showMobileMenu} 
            onClose={setShowMobileMenu}
        >
          <div className='fixed inset-0 z-10'/>

          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full
          overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1
          sm:right-gray-900/10"
          >
            <div className="flex items-center justify-between">
                <Link 
                  href="#"
                  className='p-1.5 -m-1.5'
                  aria-label='eam.com'
                >
                  <Image 
                    src={logo}
                    className='w-28'
                    alt='eam logo'
                  />
                </Link>
                <button
                  type='button'
                  onClick={() => setShowMobileMenu(false)}
                  className='p-2.5 rounded-md -m-2.5'
                  aria-label='Close Main Menu'
                >
                  <XMarkIcon className='h-6 w-6' aria-hidden="true"/>
                </button>
            </div>
            <div className='mt-6 '>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className="space-y-2 py-6">
                    {navigationLinks.map((link) => (
                      <Link 
                        key={link.link}
                        href={link.href}
                        className='block py-2 pl-3 text-md font-semibold leading-7 hover:bg-green-300 rounded-lg'
                      >
                        {link.link}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
                     
            

          </nav>
        
      </header>
  )
}

export default Header
