import "./input.css";
import React, { useState } from "react";

function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  value2,
  autoComplete,
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    if (!value2) {
      setFocused(false);
    }
  };

  return (
    <div className="relative w-full">
      <label
        className={`${focused ? "focused" : ""}  label text-[#ffffff6d]`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`${
          className ? className : ""
        } bg-[#0000009b] border-[1px] border-[#ffffff40] text-white rounded-[0.25rem]`}
        type={type}
       
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default Input;
