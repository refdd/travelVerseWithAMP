import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../public/assets/images/packageShortImage15942667715f069493cca8d.jpg";
import FAndQPart from "./FAndQPart";
function FAQ() {
  return (
    <div className="container mx-auto md:w-[90%] pt-10 pb-5 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
        {/* image */}
        <div className=" w-full h-[400px] md:h-[590px] relative md:col-span-2 cursor-pointer ">
          <Image
            src={image1}
            fill
            alt="FAQ"
            className="rounded-lg hover:scale-[.99] md:object-cover"
          />
        </div>
        {/* Faq */}
        <div className=" md:col-span-3">
          <h3 className="text-xl text-gray-900 font-Roboto capitalize text-center font-semibold my-7 ">
            Frequently Questions
          </h3>
          <FAndQPart />
          <div className="  group w-full pt-10  md:pt-7 flex  items-center  ">
            <Link href={`/`}>
              <button className=" wrapper  group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
