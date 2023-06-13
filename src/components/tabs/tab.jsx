import React from "react";
import { Link } from "react-router-dom";

function Tab({ isactive, label, tabPath = "" }) {
  return (
    <Link to={tabPath}>
      <div
        className={`p-10 f-weight-600 f-size-lg tab-width tab ${
          isactive ? "tab-active" : ""
        }`}
      >
        {label}
      </div>
    </Link>
  );
}

export default Tab;
