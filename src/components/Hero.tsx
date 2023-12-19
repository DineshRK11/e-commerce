import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container relative pt-16 px-5">
      <Image
        className="w-[100%] h-auto"
        src="/hero.png"
        width={1500}
        height={900}
        alt="Hero Image"
      />

      <div className="hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-
      [-50%] bg-white w-[250px] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] 
      xl:h-[300px] p-6 xl:space-y-8">
        <h2 className="text-[22px] lg:text:[30px] xl:text-[40px] leading-tight"> New Lipsticks for you girl</h2>
        <p className="text-gray-600 text-[14px] xl:text-[16px]">
            Lorem ipsum dolor sit amet.
        </p>
        <button className="bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8
        rounded-md hover:bg-[red]">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
