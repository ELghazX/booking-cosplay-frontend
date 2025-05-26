import { useNavigate } from "react-router-dom";
import {
  UserCircle,
  Clock3,
  History,
  Home,
  LayoutDashboard,
  Info,
  LogOut,
} from "lucide-react";

function MiniMenu() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name") || "User";

  const menuItems = [
    { label: "Riwayat Bookings", icon: <History size={20} />, path: "/riwayat" },
    { label: "Beranda", icon: <Home size={20} />, path: "/" },
    { label: "Koleksi", icon: <LayoutDashboard size={20} />, path: "/koleksi" },
    { label: "About", icon: <Info size={20} />, path: "/about" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    navigate("/");
  };

  return (
    <div className="absolute right-0 mt-2 w-55 rounded-2xl shadow-lg bg-[#fdf6f2] border border-[#c598ad] z-20">
      <div className="bg-[#c598ad] text-white text-lg font-bold px-4 py-2 rounded-t-xl">
        {userName}
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 space-y-2 mb-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(item.path)}
            className=" flex items-center text-[#b2889b] hover:text-[#a06a8c] transition-colors w-full text-left hover:scale-105"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
        <button
          className="flex items-center text-red-500 hover:text-red-600 w-full mt-2 hover:scale-105"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default MiniMenu;