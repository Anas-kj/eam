"use client"
import { Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { navigationLinks } from "./Links";
import Image from "next/image";

type MobileDialogueProps = {
    showMobileMenu: boolean;
    setShowMobileMenu: (value: boolean) => void;
  };

const MobileDialogue = ({showMobileMenu,setShowMobileMenu}: MobileDialogueProps) => {
  return (
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
                  onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
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
  )
}

export default MobileDialogue
