import React from "react";

function HeaderSection({ title, disce }) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-2xl text-gray-900 font-Roboto font-bold text-center capitalize">
        {" "}
        {title}{" "}
      </h1>
      <p className="text-xl text-[#777] font-Roboto font-medium text-center px-3 ">
        {" "}
        {disce}{" "}
      </p>
    </div>
  );
}

export default HeaderSection;
