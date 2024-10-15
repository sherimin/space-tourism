import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full h-36 text-white font-barlowCondensed justify-between items-center">
      {/* Logo and HR Line */}
      <div className="flex items-center w-1/2">
        <div className="ml-16">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
        </div>
        <hr className="border-[0.5px] border-white/25 flex-grow ml-12 -mr-10 z-10" />
      </div>

      {/* Nav Bar */}
      <div className="flex bg-gradient-to-r from-primary/10 to to-secondary/10 items-center justify-center w-1/2 p-4 h-24 backdrop-blur-md">
        <a
          href="/"
          className="mr-5 uppercase hover:underline hover:underline-offset-8"
        >
          <span className="font-bold mr-2">00</span> Home
        </a>
        <a href="/destination" className="mx-5 uppercase">
          <span className="font-bold mr-2">01</span> Destination
        </a>
        <a href="/crew" className="mx-5 uppercase">
          <span className="font-bold mr-2">02</span> Crew
        </a>
        <a href="/technology" className="ml-5 uppercase">
          <span className="font-bold mr-2">03</span> Technology
        </a>
      </div>
    </div>
  );
};

export default Header;
