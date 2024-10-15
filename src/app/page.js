import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
      <Header />
      <main className="flex gap-8 justify-between items-center sm:items-start p-5 text-white font-barlow pl-10 pr-10 pt-32 pb-32 lg:pl-40 lg:pr-40 lg:pt-32 lg:pb-32">
        <div className="flex w-[1110px] h-[632px] pt-72">
          <div className="flex flex-col items-start justify-end mr-8 w-[600px]">
            <p className="text-[28px] tracking-[4px] leading-[1.336] text-center sm:text-left text-secondary uppercase font-barlowCondensed">
              So, you want to travel to
            </p>
            <h1 className="text-[144px] tracking-normal uppercase text-center sm:text-left font-bellefair">
              Space
            </h1>

            <p className="text-center sm:text-left max-w-xl text-secondary text-[18px] leading-relaxed tracking-normal">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we'll give you a truly
              out-of-this-world experience!
            </p>
          </div>

          <div className="flex justify-start items-end pl-64">
            <button className="w-[272px] h-[272px] bg-white text-primary rounded-full font-bellefair text-3xl uppercase">
              Explore
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
