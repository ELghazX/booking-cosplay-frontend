// Searching.jsx (Add auto-search on input/select change)
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import DropDown from "./DropDown";

function Searching({ onSearch }) {
  const [category, setCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  const categoryOptions = [
    { value: "All", label: "All" },
    { value: "Accessory", label: "Accessories" },
    { value: "Costume", label: "Costumes" },
  ];

  // Trigger search when either input changes
  useEffect(() => {
    if (onSearch) onSearch({ category, keyword });
  }, [category, keyword]); // Remove this if you prefer manual search

  return (
    <div className="p-4 flex items-center gap-2 bg-[#fdf6f2] sticky top-25 z-0 shadow-[0_0_8px_#C599B6] rounded-md">
      <DropDown
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categoryOptions}
      />

      <input
        type="text"
        placeholder="Cari kostum..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 rounded-md px-4 py-2 border border-[#c598ad] focus:outline-none focus:ring-2 focus:ring-[#c598ad]"
      />
    </div>
  );
}

export default Searching;