"use client";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import React, { useState } from "react";

const planetsData = {
  moon: {
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    estTravelTime: "3 days",
  },
  mars: {
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest! ",
    avgDistance: "225 mil. km",
    estTravelTime: "9 months",
  },
  europa: {
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 mil. km",
    estTravelTime: "3 years",
  },
  titan: {
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 bil. km",
    estTravelTime: "7 years",
  },
};

const Destination = () => {
  const [destination, setDestination] = useState("moon");

  return (
    <PageTransition>
      <div className="bg-destination-mobile sm:bg-destination-tablet xl:bg-destination-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen font-barlow ">
        <Header />
        <div className="flex p-6 md:p-10 xl:px-[165px] xl:py-12 items-center justify-center">
          <div className="flex flex-col md:border-white xl:border-blue-500 w-full items-center md:items-start">
            <div className="flex uppercase text-white text-2xl md:text-[28px] tracking-[4px] leading-[1.336] font-barlowCondensed">
              <span className="text-white/40 font-bold mr-5">01</span> Pick your
              destination
            </div>
            <div className="flex flex-col xl:flex-row text-white w-full items-center md:mr-8 mt-10 xl:mt-0">
              <div className="flex">
                {destination === "moon" && (
                  <Image
                    src="/destination/image-moon.png"
                    alt="moon"
                    width={480}
                    height={480}
                    className="mx-2 my-8 md:mx-4 md:my-16 xl:mx-8 xl:my-32 max-h-[150px] max-w-[150px] md:max-w-[300px] md:max-h-[300px] xl:max-h-[480px] xl:max-w-[480px]"
                  />
                )}
                {destination === "mars" && (
                  <Image
                    src="/destination/image-mars.png"
                    alt="mars"
                    width={480}
                    height={480}
                    className="mx-2 my-8 md:mx-4 md:my-16 xl:mx-8 xl:my-32 max-h-[150px] max-w-[150px] md:max-w-[300px] md:max-h-[300px] xl:max-h-[480px] xl:max-w-[480px]"
                  />
                )}
                {destination === "europa" && (
                  <Image
                    src="/destination/image-europa.png"
                    alt="europa"
                    width={480}
                    height={480}
                    className="mx-2 my-8 md:mx-4 md:my-16 xl:mx-8 xl:my-32 max-h-[150px] max-w-[150px] md:max-w-[300px] md:max-h-[300px] xl:max-h-[480px] xl:max-w-[480px]"
                  />
                )}
                {destination === "titan" && (
                  <Image
                    src="/destination/image-titan.png"
                    alt="titan"
                    width={480}
                    height={480}
                    className="mx-2 my-8 md:mx-4 md:my-16 xl:mx-8 xl:my-32 max-h-[150px] max-w-[150px] md:max-w-[300px] md:max-h-[300px] xl:max-h-[480px] xl:max-w-[480px]"
                  />
                )}
              </div>

              <div className="flex flex-col w-full xl:ml-8 xl:w-1/2 xl:py-[133px] xl:px-12 text-center xl:text-left">
                <div className="mb-10 text-xl flex space-x-8 font-barlowCondensed justify-center xl:justify-start">
                  {Object.keys(planetsData).map((planetName) => (
                    <button
                      key={planetName}
                      onClick={() => setDestination(planetName)}
                      className={`uppercase hover:underline hover:underline-offset-8 ${planetName === destination ? "underline underline-offset-8" : ""}`}
                    >
                      {planetName}
                    </button>
                  ))}
                </div>

                <div className="text-5xl md:text-7xl xl:text-8xl font-bellefair uppercase mb-10">
                  {destination}
                </div>

                <div className="flex justify-center">
                  <p className="text-[16px] xl:text-[18px] leading-relaxed tracking-normal text-secondary max-w-xl md:max-w-lg xl:max-w-md">
                    {planetsData[destination].description}
                  </p>
                </div>

                <hr className="border-[0.5px] mx-10 border-white/25 flex-grow mt-10 xl:mx-0" />

                <div className="flex flex-col mt-5 md:mt-10 md:flex-row">
                  <div className="flex flex-col uppercase md:w-1/2 w-full">
                    <div className="font-barlowCondensed text-sm leading-[1.168] tracking-[2px] text-secondary">
                      Avg. distance
                    </div>
                    <div className="font-bellefair text-xl md:text-2xl xl:text-3xl">
                      {planetsData[destination].avgDistance}
                    </div>
                  </div>

                  <div className="flex flex-col uppercase mt-5 md:mt-0 md:ml-28 md:w-1/2 w-full">
                    <div className="font-barlowCondensed text-sm leading-[1.168] tracking-[2px] text-secondary">
                      Est. travel time
                    </div>
                    <div className="font-bellefair text-xl md:text-2xl  xl:text-3xl">
                      {planetsData[destination].estTravelTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Destination;
