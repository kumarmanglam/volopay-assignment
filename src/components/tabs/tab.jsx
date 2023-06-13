import React from "react";

function Tab({ isactive, label }) {
  return (
    <div
      className={`p-10 f-weight-600 f-size-lg tab-width tab ${
        isactive ? "tab-active" : ""
      }`}
    >
      {label}
    </div>
  );
}

export default Tab;
