"use client";

import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const CustomTab = ({ href, number, label, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} relative group text-white uppercase`}
    >
      <span className="font-bold mr-2">{number}</span>
      {label}

      <span
        className={`h-[2px] inline-block w-0 bg-white
            absolute left-0 bottom-0 md:-bottom-9
            group-hover:w-full transition-[width] ease duration-300
            ${isActive ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return isAboveMediumScreens ? (
    <>
      <div className="flex w-full h-36 text-white font-barlowCondensed justify-between items-center">
        {/* Logo and HR Line */}
        <div className="flex items-center md:w-1/4 lg:w-1/2">
          <div className="md:ml-4 lg:ml-16">
            <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          </div>
          <hr className="border-[0.5px] border-white/25 flex-grow md:ml-4 lg:ml-12 -mr-10 z-10" />
        </div>

        {/* Nav Bar */}
        <div className="flex bg-gradient-to-r from-primary/10 to to-secondary/10 items-center justify-center md:w-3/4 lg:w-1/2 p-4 h-24 backdrop-blur-md backdrop-filter">
          <CustomTab href="/" number="00" label="Home" className="mr-5" />
          <CustomTab
            href="/destination"
            number="01"
            label="Destination"
            className="mx-5"
          />
          <CustomTab href="/crew" number="02" label="Crew" className="mx-5" />
          <CustomTab
            href="/technology"
            number="03"
            label="Technology"
            className="ml-5"
          />
        </div>
      </div>
    </>
  ) : (
    <>
      {/* Mobile Toggle Menu */}
      <div className="bg-transparent w-full h-[88px] justify-between items-center flex">
        <div className="ml-6">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        <div className="mr-6">
          {!isMenuToggled && (
            <Image
              src="/icon-hamburger.svg"
              alt="menu"
              width={24}
              height={21}
              className="hover:cursor-pointer"
              onClick={() => setIsMenuToggled(true)}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div 
        className="fixed right-0 bottom-0 z-20 h-full w-[260px] bg-primary bg-opacity-25 font-barlowCondensed tracking-wider backdrop-filter backdrop-blur-md"
        initial={{ x: '100vw' }}
        animate={{ x: '0' }}
        exit={{ x: '100vw' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }} 
      >
          {/* Close Icon */}
          <div className="flex justify-end pt-8 pr-6">
            <Image
              src="/icon-close.svg"
              alt="menu"
              width={24}
              height={21}
              className="hover:cursor-pointer"
              onClick={() => setIsMenuToggled(false)}
            />
          </div>

          {/* Menu Links */}
          <div className="ml-[12%] mt-[35%] flex flex-col gap-10 text-xl">
            <CustomTab href="/" number="00" label="Home" className="" />
            <CustomTab
              href="/destination"
              number="01"
              label="Destination"
              className=""
            />
            <CustomTab href="/crew" number="02" label="Crew" className="" />
            <CustomTab
              href="/technology"
              number="03"
              label="Technology"
              className=""
            />
          </div>
          
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Header;
