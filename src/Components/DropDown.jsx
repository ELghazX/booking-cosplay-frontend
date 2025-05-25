function DropDown({ value, onChange, options = [] }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-md px-4 py-2 bg-[#c598ad] text-white text-sm focus:outline-none"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default DropDown;