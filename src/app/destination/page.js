"use client";

import Header from "@/components/Header";
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

const destination = () => {
  const [destination, setDestination] = useState("moon");

  return (
    <div className="bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen font-barlow">
      <Header />
      <div className="flex px-[165px] py-12 items-center justify-center border-yellow-500 border-2">
        <div className="flex flex-col border-orange-500 border-2">
          <div className="flex uppercase text-white text-2xl mb-5">
            01 Pick your destination
          </div>
          <div className="flex text-white w-full items-center border-green-500 border-2 mr-8">
            <div className="flex">
              {destination === "moon" && (
                <Image
                  src="/destination/image-moon.png"
                  width={480}
                  height={480}
                  className="mx-8 my-32"
                />
              )}
              {destination === "mars" && (
                <Image
                  src="/destination/image-mars.png"
                  width={480}
                  height={480}
                  className="mx-8 my-32"
                />
              )}
              {destination === "europa" && (
                <Image
                  src="/destination/image-europa.png"
                  width={480}
                  height={480}
                  className="mx-8 my-32"
                />
              )}
              {destination === "titan" && (
                <Image
                  src="/destination/image-titan.png"
                  width={480}
                  height={480}
                  className="mx-8 my-32"
                />
              )}
            </div>

            <div className="flex flex-col ml-8 w-1/2 py-[133px] px-12 border-purple-500 border-2">
              <div className="mb-10 text-xl flex space-x-8">
                {Object.keys(planetsData).map((planetName) => (
                  <button
                    key={planetName}
                    onClick={() => setDestination(planetName)}
                    className="uppercase hover:underline hover:underline-offset-8"
                  >
                    {planetName}
                  </button>
                ))}
              </div>

              <div className="text-8xl font-bellefair uppercase mb-10">
                {destination}
              </div>

              <div>
                <p className="text-xl">
                  {planetsData[destination].description}
                </p>
              </div>

              <hr className="border-[0.5px] border-white/25 flex-grow mt-10" />

              <div className="flex mt-10">
                <div className="flex flex-col uppercase">
                  <div>Avg. distance</div>
                  <div className="font-bellefair text-3xl">
                    {planetsData[destination].avgDistance}
                  </div>
                </div>

                <div className="flex flex-col uppercase ml-28">
                  <div>Est. travel time</div>
                  <div className="font-bellefair text-3xl">
                    {planetsData[destination].estTravelTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default destination;
