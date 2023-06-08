import React from "react";
import HeaderSection from "./HeaderSection";
import SelectedCountry from "./SelectedCountry";

function PackageContainer() {
  return (
    <div>
      <HeaderSection
        title={"Trips collection"}
        disce={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem? "
        }
      />
      <SelectedCountry />
    </div>
  );
}

export default PackageContainer;
