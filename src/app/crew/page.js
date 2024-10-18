"use client";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import React, { useState } from "react";

const crewData = [
  {
    position: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    position: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
  const [crew, setCrew] = useState(0);

  return (
    <PageTransition>
      <div className="bg-crew-mobile sm:bg-crew-tablet xl:bg-crew-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
        <Header />
        <div className="flex p-6 md:p-10 xl:px-[165px] xl:py-12 items-center justify-center ">
          <div className="flex flex-col">
            <div className="flex uppercase text-white text-[28px] tracking-[4px] leading-[1.336] font-barlowCondensed">
              <span className="text-white/40 font-bold mr-5">02</span>Meet your
              crew
            </div>

            <div className="h-[734px] flex flex-col xl:flex-row gap-8 mt-14 xl:mt-6">
              <div className="w-full xl:w-1/2 flex flex-col text-center xl:text-start">
                <div className="flex flex-col justify-center xl:h-[631px]">
                  {/* Crew details */}
                  <div className="text-[32px] leading-[1.1367] font-bellefair tracking-normal text-white/50 uppercase">
                    {crewData[crew].position}
                  </div>

                  <div className="text-white text-[56px] leading-tight tracking-normal font-bellefair uppercase my-3">
                    {crewData[crew].name}
                  </div>

                  <div className=" text-secondary text-[18px] leading-relaxed tracking-normal font-barlow">
                    {crewData[crew].description}
                  </div>
                </div>

                <div className="flex xl:mt-10 mt-5 justify-center xl:justify-start">
                  {/* four dots small pagination */}
                  <div className="flex space-x-8">
                    {crewData.map((_, index) => (
                      <span
                        key={index}
                        onClick={() => setCrew(index)}
                        className={`cursor-pointer w-4 h-4 rounded-full ${
                          crew === index ? "bg-white" : "bg-white/30"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-full xl:w-1/2 xl:h-full h-full overflow-hidden">
                <div className="flex justify-center items-center">
                  {crew === 0 && (
                    <Image
                      src="/crew/image-douglas-hurley.png"
                      alt="douglas-hurley"
                      width={539.28}
                      height={676}
                      className="max-h-[340px] md:max-h-[560px] xl:max-h-[734px] xl:py-7 object-contain"
                    />
                  )}
                  {crew === 1 && (
                    <Image
                      src="/crew/image-mark-shuttleworth.png"
                      alt="mark-shuttleworth"
                      width={520}
                      height={676}
                      className="max-h-[340px] md:max-h-[560px] xl:max-h-[734px] xl:py-7 object-contain "
                    />
                  )}
                  {crew === 2 && (
                    <Image
                      src="/crew/image-victor-glover.png"
                      alt="victor-glover"
                      width={539.28}
                      height={662.12}
                      className="max-h-[340px] md:max-h-[560px] xl:max-h-[734px] xl:py-7 object-contain "
                    />
                  )}
                  {crew === 3 && (
                    <Image
                      src="/crew/image-anousheh-ansari.png"
                      alt="anousheh-ansari"
                      width={539.28}
                      height={676}
                      className="max-h-[340px] md:max-h-[560px] xl:max-h-[734px] xl:py-7 object-contain "
                    />
                  )}

                  <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-primary to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Crew;
