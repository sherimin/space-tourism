import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
        <Header />
        <main className="flex flex-col xl:flex-row gap-8 justify-between items-center sm:items-start p-5 text-white font-barlow px-10 xl:px-40 xl:py-32">
          <div className="flex flex-col xl:flex-row xl:pt-72 w-full">
            <div className="flex flex-col justify-start items-center xl:items-start xl:justify-end mr-8 w-full xl:w-[600px] pt-28">
              <p className="text-[28px] tracking-[4px] leading-[1.336] text-center text-secondary uppercase font-barlowCondensed">
                So, you want to travel to
              </p>
              <h1 className="text-[144px] tracking-normal uppercase text-center font-bellefair">
                Space
              </h1>

              <p className="text-center max-w-xl text-secondary text-[18px] leading-relaxed tracking-norma xl:text-left">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well, sit back, and relax because we'll give you a truly
                out-of-this-world experience!
              </p>
            </div>

            <div className="flex justify-center xl:justify-start xl:items-end xl:pl-64 ">
              <div className="relative flex justify-center items-center group">
                <div className="absolute w-[240px] h-[240px] md:w-[380px] md:h-[380px] xl:w-[450px] xl:h-[450px] rounded-full bg-white opacity-10 scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 my-36 md:mt-12 xl:mt-0"></div>
                <button className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] my-36  md:mt-12 xl:my-0 xl:w-[272px] xl:h-[272px] bg-white text-primary rounded-full font-bellefair text-xl lg:text-3xl uppercase relative z-10">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
