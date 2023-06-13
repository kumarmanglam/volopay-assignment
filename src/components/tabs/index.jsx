import React, { useEffect, useState } from "react";
import Tab from "./tab";
import { TAB_LIST } from "../../common/constants";
import { useLocation } from "react-router-dom";

function Tabs() {
  // current location
  const location = useLocation().pathname;

  return (
    <div className="flex pi-10 bg-white tabs">
      {TAB_LIST.map((item) => (
        <Tab
          key={item.label}
          label={item.label}
          isactive={item.path === location}
          tabPath={item.path}
        ></Tab>
      ))}
    </div>
  );
}

export default Tabs;
