import Link from "next/link";
import React from "react";
import bg from "../public/assets/images/tailor.f986f967.webp";

function DellorYourTrips() {
  return (
    <div className="pt-10">
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="bg-no-repeat  bg-cover "
      >
        <div className="flex flex-col justify-center items-center w-full h-full gap-2  py-12 bg-[#003979c7]">
          <h1 className="text-2xl font-semibold font-Roboto text-white capitalize">
            Personalize Your Trip
          </h1>
          <p className=" md:text-lg text-[15px] text-white font-Roboto capitalize text-center  md:px-36">
            Personalize your trip now! We&apos;ve prepared a selection of the
            best travel destinations all across the world to pick from.
            You&apos;ll find the best packages to Egypt, Jordan, Dubai, Morocco,
            Turkey, Greece, Kenya, Mexico, Peru, India, and many more suiting
            all tastes.
          </p>
          <div className="  group w-full md:mt-7  flex justify-center items-center  ">
            <Link href={`/`}>
              <button className=" wrapper  group-hover:text-white md:text-xl md:py-1 bg-[#00AEFF] px-4 py-3 rounded-2xl z-10 text-white overflow-hidden  ">
                <span className="absolute w-0 top-0 left-0 b-b-width bg-blue-700 -z-10 h-full"></span>
                Your Trip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DellorYourTrips;
