import React from "react";

function Inputan({ label, type = "text", name, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        className="border rounded px-3 py-2 w-full"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Inputan;