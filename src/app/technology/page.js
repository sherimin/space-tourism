"use client";
import Header from "@/components/Header";
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

const technology = () => {
  const [term, setTerm] = useState(0);

  return (
    <div className="bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
      <Header />
      <div className="flex py-12 pl-[165px]">
        <div className="flex flex-col w-[1275px] h-[792px]">
          <div className="flex uppercase text-white text-[28px] tracking-[4px] leading-[1.336] font-barlowCondensed">
            <span className="text-white/40 font-bold mr-5">03</span>Space launch
            101
          </div>

          <div className="flex gap-8">
            <div className="w-[635px] flex justify-center items-center gap-16">
              {/* Buttons & Info */}
              <div className="text-white flex flex-col w-[80px] h-[304px] justify-between">
                <button
                  className="w-20 h-20 border-white/30 bg-primary border-[1px] rounded-full hover:border-2 hover:border-white"
                  onClick={() => setTerm(0)}
                >
                  1
                </button>
                <button
                  className="w-20 h-20 border-white/30 bg-primary border-[1px] rounded-full hover:border-2 hover:border-white"
                  onClick={() => setTerm(1)}
                >
                  2
                </button>
                <button
                  className="w-20 h-20 border-white/30 bg-primary border-[1px] rounded-full hover:border-2 hover:border-white"
                  onClick={() => setTerm(2)}
                >
                  3
                </button>
              </div>

              <div className="flex flex-col text-white w-[491px] h-[303px]">
                <div className="text-[32px] leading-[1.1367] font-bellefair tracking-normal text-white/50 uppercase">
                  the terminology...
                </div>
                <div className="text-white text-[56px] leading-[1.642] tracking-normal font-bellefair uppercase">
                  {techData[term].name}
                </div>
                <div className=" text-secondary text-[18px] leading-relaxed tracking-normal">
                  {techData[term].description}
                </div>
              </div>
            </div>

            <div className="w-[608px]">
              {/* Image */}
              {term === 0 && (
                <Image
                  src="/technology/image-launch-vehicle-portrait.jpg"
                  width={608}
                  height={600}
                  className="my-[67px]"
                />
              )}
              {term === 1 && (
                <Image
                  src="/technology/image-spaceport-portrait.jpg"
                  width={608}
                  height={600}
                  className="my-[67px]"
                />
              )}
              {term === 2 && (
                <Image
                  src="/technology/image-space-capsule-portrait.jpg"
                  width={608}
                  height={600}
                  className="my-[67px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default technology;
