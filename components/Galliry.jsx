import Image from "next/image";
import React from "react";
import image2 from "../public/assets/images/packageShortImage15942434345f06396a43f29.jpg";
import image3 from "../public/assets/images/packageShortImage15942667715f069493cca8d.jpg";
import image4 from "../public/assets/images/packageShortImage1653513053628e9b5da0a6c.jpg";
function Galliry() {
  return (
    <div className="container mx-auto pt-10 md:w-[80%]">
      <div className="flex flex-col gap-4 md:flex-row  md:flex-wrap md:justify-center">
        <div className=" relative overflow-hidden md:w-[48%]">
          <Image
            src={image2}
            alt="Gallery"
            width={700}
            height={500}
            loading="lazy"
            className="rounded-lg  "
          />
          <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-[98%] flex justify-center items-center rounded-lg">
            <button className="text-white text-xl font-Roboto capitalize px-14 py-2 border-[3px] border-white  rounded-2xl hover:scale-105">
              {" "}
              Latin America
            </button>
          </div>
        </div>
        <div className=" relative overflow-hidden md:w-[48%] ">
          <Image
            src={image2}
            alt="Gallery"
            width={700}
            height={500}
            loading="lazy"
            className="rounded-lg  "
          />
          <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-[98%] flex justify-center items-center rounded-lg">
            <button className="text-white text-xl font-Roboto capitalize px-14 py-2 border-[3px] border-white  rounded-2xl hover:scale-105">
              {" "}
              Multi DEstinations
            </button>
          </div>
        </div>
        <div className=" relative overflow-hidden md:w-[31%]  ">
          <Image
            src={image3}
            alt="Gallery"
            width={700}
            height={500}
            loading="lazy"
            className="rounded-lg  "
          />
          <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-[98%] flex justify-center items-center rounded-lg">
            <button className="text-white text-xl font-Roboto capitalize px-14 py-2 border-[3px] border-white  rounded-2xl hover:scale-105">
              {" "}
              Asia
            </button>
          </div>
        </div>
        <div className=" relative overflow-hidden md:w-[31%] ">
          <Image
            src={image4}
            alt="Gallery"
            width={700}
            height={500}
            loading="lazy"
            className="rounded-lg  "
          />
          <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-[98%] flex justify-center items-center rounded-lg">
            <button className="text-white text-xl font-Roboto capitalize px-14 py-2 border-[3px] border-white  rounded-2xl hover:scale-105">
              {" "}
              Europ
            </button>
          </div>
        </div>
        <div className=" relative overflow-hidden md:w-[31%] ">
          <Image
            src={image3}
            alt="Gallery"
            width={700}
            height={500}
            loading="lazy"
            className="rounded-lg  "
          />
          <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-[98%] flex justify-center items-center rounded-lg">
            <button className="text-white text-xl font-Roboto capitalize px-14 py-2 border-[3px] border-white  rounded-2xl hover:scale-105">
              {" "}
              Africa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galliry;
