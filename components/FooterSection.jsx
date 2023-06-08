import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mx-auto px-5  bg-[#333333]">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-1 py-16 md:w-[90%] md:mx-auto">
        {/* frist clo */}
        <div className="flex flex-col gap-3 ">
          <p className="relative">
            <span className="text-xl text-white font-Roboto font-semibold">
              Travelverse
            </span>
            <span className="absolute bottom-[-6px] left-0 w-9 h-[2px] bg-white"></span>
          </p>
          <p className="text-lg text-gray-400 font-Roboto capitalize ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus accusantium quia, et unde iusto, esse cumque
            necessitatibus fu
          </p>
        </div>
        {/* col tow */}
        <div className="flex flex-col gap-3 px-3 ">
          <p className="relative">
            <span className="text-xl text-white font-Roboto font-semibold">
              Our Info
            </span>
            <span className="absolute bottom-[-6px] left-0 w-9 h-[2px] bg-white"></span>
          </p>
          <ul className="flex flex-col gap-2  text-lg text-gray-400  capitalize font-Roboto">
            <li className="hover:text-white transition-all">
              <Link href={"/"}>About us</Link>
            </li>
            <li className="hover:text-white transition-all">
              <Link href={"/"}>FAQ</Link>
            </li>
            <li className="hover:text-white transition-all">
              <Link href={"/"}>Reviews</Link>
            </li>
            <li className="hover:text-white transition-all">
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li className="hover:text-white transition-all">
              <Link href={"/"}>Terms and Condition</Link>
            </li>
            <li className="hover:text-white transition-all">
              <Link href={"/"}>Contactus</Link>
            </li>
          </ul>
        </div>
        {/* col three  */}
        <div className="flex flex-col gap-3">
          <p className="relative">
            <span className="text-xl text-white font-Roboto font-semibold">
              Contact
            </span>
            <span className="absolute bottom-[-6px] left-0 w-9 h-[2px] bg-white"></span>
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-lg text-gray-400 capitalize font-Roboto">
              Sales@nilevruisevation.com
            </p>
            <p className="text-lg text-gray-400 capitalize font-mono">
              <span className="text-[20px] font-Roboto">Phone:</span>(020)
              8320-221
            </p>
            <p className="text-lg text-gray-400 capitalize font-mono">
              <span className="text-[20px] font-Roboto">Fax:</span>(020)
              8320-221
            </p>
          </div>
          <div className="flex gap-5">
            <FaFacebook className="cursor-pointer" size={30} color="#777" />
            <FaTwitter className="cursor-pointer" size={30} color="#777" />
            <FaInstagram className="cursor-pointer" size={30} color="#777" />
          </div>
        </div>
        {/* col four */}
        <div className="flex flex-col gap-4">
          <p className="relative">
            <span className="text-xl text-white font-Roboto font-semibold">
              Newslatters
            </span>
            <span className="absolute bottom-[-6px] left-0 w-9 h-[2px] bg-white"></span>
          </p>
          <p className="text-lg text-gray-400 font-Roboto capitalize ">
            Get updated by subScribe Our Weeky Newsletter
          </p>
          <div className="flex w-full flex-col md:flex-row gap-1">
            <input
              className=" w-full h-12 py-3 px-4 mb-1 text-[#777]  rounded-2xl"
              placeholder="email Address"
              type="text"
              name="email"
            />
            <div className="  group flex justify-center items-center  md:justify-start ">
              <button
                style={{ background: "#00AEFF" }}
                className=" wrapper w-full ring-2 shadow-md ring-[#ffffff1a] ring-inset group-hover:text-white  px-5 py-3 rounded-2xl z-10 text-white overflow-hidden  "
              >
                <span className="absolute w-0 top-0 left-0 b-b-width bg-gray-400 -z-10 h-full"></span>
                subscrbe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copy right */}
      <div className=" container mx-auto border-t-2 border-gray-400 md:w-[90%] "></div>
      <div className="flex flex-col md:flex-row md:justify-between items-center py-4 md:w-[90%] md:mx-auto">
        <p className="text-lg text-gray-400 font-Roboto capitalize ">
          Copyright &#169; travel verse 2020.all right reserved{" "}
        </p>
        <ul className="flex gap-3 text-lg text-gray-400 font-Roboto capitalize ">
          <li className="hover:text-white cursor-pointer">condition</li>
          <li className="hover:text-white cursor-pointer">Peivacy Policy</li>
          <li className="hover:text-white cursor-pointer">Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
