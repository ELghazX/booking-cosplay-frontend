import { useState } from "react";
import { Search } from "lucide-react"; // pakai ikon dari lucide-react

function Searching({ onSearch }) {
  const [category, setCategory] = useState("All");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch({ category, keyword });
  };

  return (
    <div className="p-4 flex items-center gap-2 bg-[#fdf6f2] sticky top-25 z-10 shadow-[0_0_8px_#C599B6] rounded-md">
      {/* Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-md px-4 py-2 bg-[#c598ad] text-white text-sm focus:outline-none"
      >
        <option value="All">Category</option>
        <option value="All">All</option>
        <option value="Accessories">Accessories</option>
        <option value="Items">Items</option>
      </select>

      {/* Input */}
      <input
        type="text"
        placeholder="place holder"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 rounded-md px-4 py-2 border border-[#c598ad] focus:outline-none focus:ring-2 focus:ring-[#c598ad] hover:outline-none hover:ring-2 hover:ring-[#c598ad]"
      />

      {/* Button */}
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
