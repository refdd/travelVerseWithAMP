import Image from "next/image";
import React from "react";
import imagesettin from "../public/assets/images/setting.png";
import Link from "next/link";

function ChooseUs() {
  return (
    <div className="pt-5 container px-4  md:w-[90%]  mx-auto md:pt-20 ">
      <Link href="/aboute">View AMP Version</Link>
      <div className="flex flex-col gap-5 md:flex-row ">
        <div className=" wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg">
          {/* lauput hover */}
          <div className=" PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10"></div>
          {/* image  */}
          <div>
            <Image
              src={imagesettin}
              width={60}
              height={60}
              loading="lazy"
              className="rounded-full z-20"
              alt="setting"
            />
          </div>
          {/* content */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl  md:text-[20px]  z-20   text-gray-900 font-bold md:font-normal font-Roboto capitalize">
              Free Cancelation
            </h1>
            <p className="text-lg md:text-[16px]  z-20 text-[#777]  font-medium md:font-normal font-Roboto capitalize">
              cencel any time and receve a full refund
            </p>
          </div>
        </div>
        <div className=" wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg">
          {/* lauput hover */}
          <div className=" PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10"></div>
          {/* image  */}
          <div>
            <Image
              src={imagesettin}
              width={60}
              height={60}
              alt="setting"
              loading="lazy"
              className="rounded-full z-20"
            />
          </div>
          {/* content */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl  md:text-[20px]  z-20   text-gray-900 font-bold md:font-normal font-Roboto capitalize">
              Experienced Agents
            </h1>
            <p className="text-lg md:text-[16px]  z-20 text-[#777]  font-medium md:font-normal font-Roboto capitalize">
              We pick the best local travel agent for you
            </p>
          </div>
        </div>
        <div className=" wrapper group flex gap-3 items-center py-3 px-3 border shadow-lg rounded-lg">
          {/* lauput hover */}
          <div className=" PrefectCard absolute bottom-0 right-0 w-full  bg-[#00397994] rounded-lg z-10"></div>
          {/* image  */}
          <div>
            <Image
              src={imagesettin}
              width={60}
              height={60}
              alt="setting"
              loading="lazy"
              className="rounded-full z-20"
            />
          </div>
          {/* content */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl  md:text-[20px]  z-20   text-gray-900 font-bold md:font-normal font-Roboto capitalize">
              Customizable Tours
            </h1>
            <p className="text-lg md:text-[16px]  z-20 text-[#777]  font-medium md:font-normal font-Roboto capitalize">
              Mix between destinations and tailor-make your own trip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
