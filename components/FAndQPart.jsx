"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";

const questions = [
  {
    id: 1,
    question: "Is it safe to visit Saudi ?",
    answer:
      "Overall The Rate Of Crime In Saudi Arabia Is Very Low And The Saudi Government Are Concerned To Secure All Tourists In The Country, There Is No Difference Between Women And Men As Tourists Regarding Safety. You Just Have To Abiding The Law And Follow The Common-Sense Rules And Respect The Local Customs",
  },
  {
    id: 2,
    question: "What should I avoid in Saudi Arabia?",
    answer:
      "Photographing In Government Buildings, Military Buildings, And Palaces Is Not Allowed. You Should Avoid Photographing Local People Specially Women. Binoculars Should Not Be Brought Into Saudi Arabia And May Be Confiscated At The Port Of Entry.",
  },
  {
    id: 3,
    question: "Can Americans travel to Saudi Arabia?",
    answer:
      "A Visa Is Required To Enter Saudi Arabia, And US Citizens Can Now Travel To Saudi Arabia For Tourism Purposes With An E Visa Obtained Online.",
  },
];
function FaQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 pb-5">
      <div className="mt-12">
        {questions?.map((q, index) => (
          <div key={q.id} className=" border mb-8 rounded shadow-lg py-5 px-3 ">
            <button
              className="flex  w-full items-center text-left   space-x-2  "
              onClick={() => handleClick(index)}
            >
              <div className="w-[20%] md:w-[10%] flex items-center justify-center">
                <div
                  className={` flex items-center justify-center w-10 h-10 rounded-full   text-2xl 
                 ${
                   activeIndex === index
                     ? "bg-[#051036] text-white "
                     : "bg-MainYeloow text-mainColor"
                 }
              `}
                >
                  <BiPlus
                    className={activeIndex === index ? "rotate-45 " : ""}
                  />
                </div>
              </div>
              <h2 className=" text-mainColor text-[15px] md:text-lg font-medium font-sans capitalize">
                {q.question}
              </h2>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-base text-gray-500">{q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaQSection;
