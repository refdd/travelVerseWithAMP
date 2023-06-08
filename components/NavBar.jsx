"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/images/setting163264951061504126eaf41.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);
  function toggleScroll() {
    const body = document.querySelector("body");

    if (disableScroll) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }

    setDisableScroll(!disableScroll);
  }
  const isAmp = useAmp();
  const router = useRouter();
  return (
    <div className=" relative bg-white ">
      <div className=" container md:w-[90%] mx-auto ">
        <div className="flex items-center justify-between py-3 ">
          {/* image */}
          <div>
            <Image
              src={logo}
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              alt="logo"
              style={{ width: "180px", height: "35px" }}
              priority={true}
            />
          </div>
          {/* icon */}
          <div className="md:hidden cursor-pointer ">
            <FiMenu
              onClick={() => {
                setShowMenu(!showMenu);
                toggleScroll();
              }}
              className="cursor-pointer"
              size={30}
            />
          </div>
          {/* links */}
          <ul className=" gap-7 items-center hidden md:flex ">
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              <Link href={"/Destaintion"}>home</Link>
            </li>
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              <Link href={"/"}>destination</Link>
            </li>
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              <Link href={"/"}>About Us</Link>
            </li>
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              <Link href={"/"}>Contect Us</Link>
            </li>
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
              {/* <p>
                <Link href={isAmp ? "/" : "/?amp=1"}>
                  {isAmp ? "View Non-AMP" : "View AMP"} Version
                </Link>
              </p> */}
            </li>
          </ul>
          {/*login and Register  */}
          <div className=" gap-4  hidden md:flex">
            <button className="py-1 px-4  font-Roboto bg-[#00AEFF] rounded-lg  text-white ">
              Login
            </button>
            <button className="py-1 px-4  font-Roboto bg-white rounded-lg border">
              Register
            </button>
          </div>
        </div>
        {/* menu bar  */}
        {/* menu links  */}
        <ul
          className={` ${
            showMenu ? "flex" : "hidden"
          }  md:hidden flex-col p-6 bg-white border-y overflow-y-auto h-screen pb-40 `}
        >
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link legacyBehavior href={"/"}>
              Home
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/packages"}>Destination</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/activities"}> Activities</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/umrah"}> About Us</Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/LandMarks"}>
              <span>Contect Us</span>
            </Link>
          </li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer"></li>
          <li className=" text-lg text-[#051036]  font-semibold font-sans py-4  hover:text-[#3554d1] hover:bg-[#3554d10d] px-2 cursor-pointer">
            <Link href={"/list_blog"}>Blog</Link>
          </li>
          <li className="text-lg font-Roboto capitalize hover:text-[#00AEFF] ">
            {/* <p>
              <Link href={isAmp ? "/" : "/?amp=1"}>
                {isAmp ? "View Non-AMP" : "View AMP"} Version
              </Link>
            </p> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
