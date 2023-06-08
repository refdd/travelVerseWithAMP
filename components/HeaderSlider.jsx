import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import image1 from "../public/assets/images/1.webp";
import image2 from "../public/assets/images/3.a983ecec.webp";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };
function HeaderSlider() {
  const isAmp = useAmp();
  console.log(isAmp);
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className=" relative w-full h-[300px] md:h-[690px]">
            {isAmp ? (
              <amp-img
                width="300"
                height="300"
                src="https://amp.dev/static/inline-examples/images/mountains.jpg"
                alt="a cool image"
                layout="responsive"
              />
            ) : (
              <Image
                src={image1}
                priority={true}
                alt="lsider"
                fill
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            )}

            <div className="absolute top-0 left-0 h-full w-full bg-[#0000003b] z-20"></div>
            <div className="flex flex-col md:justify-center md:items-center gap-5 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className=" text-center text-2xl md:text-6xl text-white font-Roboto  capitalize  ">
                Bast Travel Agent{" "}
              </h1>
              <p className="text-white text-lg md:text-xl font-Roboto  capitalize text-center">
                Discaver And bool Amazing Things to bo al Exclusive Prices
              </p>
              <button className="text-white uppercase text-2xl font-Roboto  py-1 px-7 rounded-2xl hover:scale-95 bg-[#0039797a]">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full h-[300px] md:h-[690px]">
            {isAmp ? (
              <amp-img
                width="300"
                height="300"
                src="https://amp.dev/static/inline-examples/images/mountains.jpg"
                alt="a cool image"
                layout="responsive"
              />
            ) : (
              <Image
                src={image2}
                priority={true}
                alt="lsider"
                fill
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            )}

            <div className="absolute top-0 left-0 h-full w-full bg-[#0000003b] z-20"></div>
            <div className="flex flex-col md:justify-center md:items-center gap-5 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className=" text-center text-2xl md:text-6xl text-white font-Roboto  capitalize  ">
                Bast Travel Agent{" "}
              </h1>
              <p className="text-white text-lg md:text-xl font-Roboto  capitalize text-center">
                Discaver And bool Amazing Things to bo al Exclusive Prices
              </p>
              <button className="text-white uppercase text-2xl font-Roboto  py-1 px-7 rounded-2xl hover:scale-95 bg-[#0039797a]">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative w-full h-[300px] md:h-[690px]">
            {isAmp ? (
              <amp-img
                width="300"
                height="300"
                src="https://amp.dev/static/inline-examples/images/mountains.jpg"
                alt="a cool image"
                layout="responsive"
              />
            ) : (
              <Image
                src={image1}
                priority={true}
                alt="lsider"
                fill
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            )}
            <div className="absolute top-0 left-0 h-full w-full bg-[#0000003b] z-20"></div>
            <div className="flex flex-col md:justify-center md:items-center gap-5 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h1 className=" text-center text-2xl md:text-6xl text-white font-Roboto  capitalize  ">
                Bast Travel Agent{" "}
              </h1>
              <p className="text-white text-lg md:text-xl font-Roboto  capitalize text-center">
                Discaver And bool Amazing Things to bo al Exclusive Prices
              </p>
              <button className="text-white uppercase text-2xl font-Roboto  py-1 px-7 rounded-2xl hover:scale-95 bg-[#0039797a]">
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          {" "}
          <div className=" w-full h-[300px]">
            <Image
              src={image1}
              priority={true}
              alt="lsider"
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full h-[300px]">
            <Image
              src={image1}
              priority={true}
              alt="lsider"
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full h-[300px]">
            <Image
              src={image1}
              priority={true}
              alt="lsider"
              fill
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default HeaderSlider;
