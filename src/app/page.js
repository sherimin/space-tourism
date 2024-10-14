import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
      <Header />
      <main className="flex gap-8 justify-between items-center sm:items-start p-5 text-white font-barlow pl-10 pr-10 pt-32 pb-32 lg:pl-40 lg:pr-40 lg:pt-32 lg:pb-32">
        <div className="flex w-[1110p] h-[632px] border-transparent border-2">
          <div className="flex flex-col border-transparent border-2 items-start justify-end">
            <p className="text-4xl text-center sm:text-left mt-10 mb-10 text-blue-300 uppercase">
              So, you want to travel to
            </p>
            <h1 className="text-9xl uppercase text-center sm:text-left font-bellefair">
              Space
            </h1>

            <p className="text-center mt-10 sm:mt-20 sm:text-left max-w-lg text-blue-300 text-xl">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we'll give you a truly
              out-of-this-world experience!
            </p>
          </div>

          <div className="border-transparent border-2 flex justify-start items-end ml-8 pl-72">
            <button className="w-[272px] h-[272px] bg-white text-blue-900 font-bold rounded-full font-bellefair text-3xl uppercase">
              Explore
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
