"use client";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import React, { useState } from "react";

const techData = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = () => {
  const [term, setTerm] = useState(0);

  return (
    <PageTransition>
      <div className="bg-technology-mobile sm:bg-technology-tablet xl:bg-technology-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
        <Header />
        <div className="flex xl:py-12 xl:pl-[165px] md:py-10 py-6">
          <div className="flex flex-col w-full xl:w-[1275px] xl:h-[792px] items-center xl:items-stretch">
            <div className="flex uppercase text-white text-2xl md:text-[28px] tracking-[4px] leading-[1.336] font-barlowCondensed">
              <span className="text-white/40 font-bold mr-5 ml-6 md:ml-10 xl:ml-0">
                03
              </span>
              Space launch 101
            </div>

            <div className="flex gap-8 xl:flex-row flex-col-reverse">
              <div className="w-full xl:w-[635px] flex justify-center items-center gap-16 xl:flex-row flex-col">
                {/* Buttons & Info */}
                <div className="text-white flex flex-row xl:flex-col xl:w-[80px] xl:h-[304px] xl:justify-between gap-6">
                  <button
                    className={`w-16 h-16 md:w-20 md:h-20 text-xl xl:text-[32px] leading-[1.1367] font-bellefair tracking-normal border-white/30 bg-primary border-[1px] rounded-full duration-500 hover:border-white ${term === 0 ? "bg-white text-primary" : ""}`}
                    onClick={() => setTerm(0)}
                  >
                    1
                  </button>
                  <button
                    className={`w-16 h-16 md:w-20 md:h-20 text-xl xl:text-[32px] leading-[1.1367] font-bellefair tracking-normal border-white/30 bg-primary border-[1px] rounded-full duration-500 hover:border-white ${term === 1 ? "bg-white text-primary" : ""}`}
                    onClick={() => setTerm(1)}
                  >
                    2
                  </button>
                  <button
                    className={`w-16 h-16 md:w-20 md:h-20 text-xl xl:text-[32px] leading-[1.1367] font-bellefair tracking-normal border-white/30 bg-primary border-[1px] rounded-full duration-500 hover:border-white ${term === 2 ? "bg-white text-primary" : ""}`}
                    onClick={() => setTerm(2)}
                  >
                    3
                  </button>
                </div>

                <div className="flex flex-col text-white xl:w-[491px] xl:h-[303px] justify-center items-center xl:items-start mx-5 md:mx-20 xl:mx-0">
                  <div className="text-3xl xl:text-[32px] leading-[1.1367] font-bellefair tracking-normal text-white/50 uppercase">
                    the terminology...
                  </div>
                  <div className=" text-white text-5xl xl:text-[56px] leading-[1.642] tracking-normal font-bellefair uppercase text-center xl:text-start">
                    {techData[term].name}
                  </div>
                  <div className=" text-secondary text-[18px] leading-relaxed tracking-normal text-center font-barlow xl:text-start">
                    {techData[term].description}
                  </div>
                </div>
              </div>

              <div className="flex w-screen xl:w-[608px]justify-center items-center overflow-hidden mt-10 xl:mt-0">
                {/* Image */}
                {term === 0 && (
                  <Image
                    src="/technology/image-launch-vehicle-portrait.jpg"
                    alt="launch-vehicle-portrait"
                    width={608}
                    height={600}
                    className="object-cover xl:h-auto h-[45vh] md:h-[65vh] w-full"
                  />
                )}
                {term === 1 && (
                  <Image
                    src="/technology/image-spaceport-portrait.jpg"
                    alt="spaceport-portrait"
                    width={608}
                    height={600}
                    className="object-cover xl:h-auto h-[45vh] md:h-[65vh] w-full"
                  />
                )}
                {term === 2 && (
                  <Image
                    src="/technology/image-space-capsule-portrait.jpg"
                    alt="space-capsule-portrait"
                    width={608}
                    height={600}
                    className="object-cover xl:h-auto h-[45vh] md:h-[65vh] w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Technology;
