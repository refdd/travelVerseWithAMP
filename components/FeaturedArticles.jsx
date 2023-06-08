import Image from "next/image";
import React from "react";
import image1 from "../public/assets/images/Featured.d16dd923.webp";
import image2 from "../public/assets/images/packageShortImage15942006035f05921b2d1cd.jpg";
import image4 from "../public/assets/images/packageShortImage15942434345f06396a43f29.jpg";
import image5 from "../public/assets/images/packageShortImage15942667715f069493cca8d.jpg";
function FeaturedArticles() {
  return (
    <div className="pt-10 cursor-pointer">
      <div
        style={{ backgroundImage: `url(${image1.src})` }}
        className="bg-no-repeat bg-auto"
      >
        <div className="py-12 bg-[#00000040]">
          <h1 className="text-xl font-Roboto font-semibold capitalize text-white text-center  ">
            Featured Articles
          </h1>
          <p className="text-center text-white text-[14px] font-Roboto my-5 ">
            Discover Our Featured Articles
          </p>
          <div className=" container md:w-[90%] mx-auto flex flex-col gap-4 md:flex-row ">
            <div className="flex flex-col  w-full  md:w-[282px] ">
              {/* image and countary*/}
              <div className=" w-full h-52 relative bg-white rounded-t-lg">
                <Image
                  src={image2}
                  fill
                  alt="imgae card"
                  loading={"lazy"}
                  className={"rounded-lg  "}
                />
                <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-full  rounded-lg"></div>

                <div className="absolute bottom-[16px] left-[22px] w-36 h-autp bg-[#00b1ff99] transition-all hover:scale-90  py-1">
                  <p className="text-white text-[16px] font-Roboto capitalize text-center my-auto">
                    Family Travel
                  </p>
                </div>
              </div>
              {/* content */}
              <div className="container flex flex-col gap-2 bg-white rounded-b-lg px-2">
                <h1 className="text-lg text-gray-800 font-Roboto font-medium capitalize transition-all hover:text-[#00b1ff99] ">
                  The must See Attraction of Argentina
                </h1>
                <p className="text-[16px] pb-4 text-gray-700 font-Roboto flex gap-3 items-center font-medium capitalize">
                  George Steven{" "}
                  <span className="text-sm text-gray-500">June 26,2017 </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col  w-full  md:w-[282px] ">
              {/* image and countary*/}
              <div className=" w-full h-52 relative bg-white rounded-t-lg">
                <Image
                  src={image4}
                  fill
                  alt="imgae card"
                  loading={"lazy"}
                  className={"rounded-lg  "}
                />
                <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-full rounded-lg"></div>

                <div className="absolute bottom-[16px] left-[22px] w-36 h-autp bg-[#00b1ff99] transition-all hover:scale-90  py-1">
                  <p className="text-white text-[16px] font-Roboto capitalize text-center my-auto">
                    Family Travel
                  </p>
                </div>
              </div>
              {/* content */}
              <div className="container flex flex-col gap-2 bg-white rounded-b-lg px-2">
                <h1 className="text-lg text-gray-800 font-Roboto font-medium capitalize transition-all hover:text-[#00b1ff99] ">
                  The must See Attraction of Argentina
                </h1>
                <p className="text-[16px] pb-4 text-gray-700 font-Roboto flex gap-3 items-center font-medium capitalize">
                  George Steven{" "}
                  <span className="text-sm text-gray-500">June 26,2017 </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col  w-full  md:w-[282px] ">
              {/* image and countary*/}
              <div className=" w-full h-52 relative bg-white rounded-t-lg">
                <Image
                  src={image5}
                  fill
                  alt="imgae card"
                  loading={"lazy"}
                  className={"rounded-lg  "}
                />
                <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-full  rounded-lg"></div>

                <div className="absolute bottom-[16px] left-[22px] w-36 h-autp bg-[#00b1ff99] transition-all hover:scale-90  py-1">
                  <p className="text-white text-[16px] font-Roboto capitalize text-center my-auto">
                    Family Travel
                  </p>
                </div>
              </div>
              {/* content */}
              <div className="container flex flex-col gap-2 bg-white rounded-b-lg px-2">
                <h1 className="text-lg text-gray-800 font-Roboto font-medium capitalize transition-all hover:text-[#00b1ff99] ">
                  The must See Attraction of Argentina
                </h1>
                <p className="text-[16px] pb-4 text-gray-700 font-Roboto flex gap-3 items-center font-medium capitalize">
                  George Steven{" "}
                  <span className="text-sm text-gray-500">June 26,2017 </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col  w-full  md:w-[282px] ">
              {/* image and countary*/}
              <div className=" w-full h-52 relative bg-white rounded-t-lg">
                <Image
                  src={image2}
                  fill
                  alt="imgae card"
                  loading={"lazy"}
                  className={"rounded-lg  "}
                />
                <div className="absolute cursor-pointer top-0 left-0 bg-[#00000052] w-full h-full rounded-lg"></div>

                <div className="absolute bottom-[16px] left-[22px] w-36 h-autp bg-[#00b1ff99] transition-all hover:scale-90  py-1">
                  <p className="text-white text-[16px] font-Roboto capitalize text-center my-auto">
                    Family Travel
                  </p>
                </div>
              </div>
              {/* content */}
              <div className="container flex flex-col gap-2 bg-white rounded-b-lg px-2">
                <h1 className="text-lg text-gray-800 font-Roboto font-medium capitalize transition-all hover:text-[#00b1ff99] ">
                  The must See Attraction of Argentina
                </h1>
                <p className="text-[16px] pb-4 text-gray-700 font-Roboto flex gap-3 items-center font-medium capitalize">
                  George Steven{" "}
                  <span className="text-sm text-gray-500">June 26,2017 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticles;
