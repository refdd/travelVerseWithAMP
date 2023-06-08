import React from "react";

function FormSearch() {
  return (
    <div className="container mx-auto px-4   pt-5 md:w-[80%] md:pt-0 md:relative">
      <div className="border-2 px-4 py-3 rounded-lg border-gray-400 md:absolute md:top-[-73px] md:w-full md:border-none md:bg-[#fff] z-50 shadow-xl">
        <h4 className="mb-4 text-lg font-Roboto font-medium capitalize">
          find the place it suits you best
        </h4>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Search Your Tips"
              required
            />
          </div>
          <button
            type="button"
            className="w-[127px] text-white bg-[#00AEFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSearch;
