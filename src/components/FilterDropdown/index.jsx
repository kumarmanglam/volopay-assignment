import React, { useState } from "react";

function FilterDropdown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FilterDropdown;
