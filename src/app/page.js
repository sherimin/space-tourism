import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export default function Home() {

  return (
    <PageTransition>
      <div className="bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop bg-cover bg-center bg-fixed bg-no-repeat w-full min-h-screen">
        <Header />
        <main className="flex flex-col xl:flex-row gap-8 justify-between items-center sm:items-start p-5 text-white font-barlow px-10 xl:px-40 xl:pb-32">
          <div className="flex flex-col xl:flex-row xl:pt-12 w-full">
            <div className="flex flex-col justify-start items-center xl:items-start xl:justify-end mr-8 w-full xl:w-[600px] pt-12 md:pt-28">
              <p className="text-[20px] md:text-[28px] tracking-[4px] leading-[1.336] text-center text-secondary uppercase font-barlowCondensed xl:pt-24">
                So, you want to travel to
              </p>
              <h1 className="text-8xl my-6 md:text-9xl xl:text-[144px] tracking-normal uppercase text-center font-bellefair">
                Space
              </h1>

              <p className="text-center max-w-xl text-secondary text-[18px] leading-relaxed tracking-norma xl:text-left">
                Let&apos;s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well, sit back, and relax because we&apos;ll give you a truly
                out-of-this-world experience!
              </p>
            </div>

            <div className="flex justify-center xl:justify-start xl:items-end xl:pl-64 ">
              <div className="relative flex justify-center items-center group">
                <div className="absolute w-[240px] h-[240px] md:w-[380px] md:h-[380px] xl:w-[450px] xl:h-[450px] rounded-full bg-white opacity-10 scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 my-0 md:-mt-24 xl:mt-0"></div>
                <a href="/destination"
                  type="button" 
                  className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] my-36  md:mt-12 xl:my-0 xl:w-[272px] xl:h-[272px] bg-white text-primary rounded-full font-bellefair text-xl md:text-2xl lg:text-3xl uppercase relative z-10 flex items-center justify-center text-center">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
