import { useState } from "react";
import { Search } from "lucide-react"; // pakai ikon dari lucide-react
import DropDown from "./DropDown";

function Searching({ onSearch }) {
  const [category, setCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  // Tentukan option dropdown di sini
  const categoryOptions = [
    { value: "All", label: "Category" },
    { value: "All", label: "All" },
    { value: "Accessories", label: "Accessories" },
    { value: "Items", label: "Items" },
  ];

  const handleSearch = () => {
    if (onSearch) onSearch({ category, keyword });
  };

  return (
    <div className="p-4 flex items-center gap-2 bg-[#fdf6f2] sticky top-25 z-0 shadow-[0_0_8px_#C599B6] rounded-md">
      <DropDown
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categoryOptions}
      />

      <input
        type="text"
        placeholder="place holder"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 rounded-md px-4 py-2 border border-[#c598ad] focus:outline-none focus:ring-2 focus:ring-[#c598ad] hover:outline-none hover:ring-2 hover:ring-[#c598ad]"
      />

      <button
        onClick={handleSearch}
        className="flex flex-row gap-2 bg-[#c598ad] text-white p-2 rounded-md hover:bg-[#b2889b] font-bold items-center transition-colors duration-200"
      >
        Search <Search size={16} />
      </button>
    </div>
  );
}

export default Searching;
