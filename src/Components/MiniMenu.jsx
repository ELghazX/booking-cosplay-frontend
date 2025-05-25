import { useNavigate } from "react-router-dom";
import {
  UserCircle,
  Clock3,
  Home,
  LayoutDashboard,
  Info,
  LogOut,
} from "lucide-react";

function MiniMenu() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";

  const menuItems = [
    { label: "Profile User", icon: <UserCircle size={20} />, path: "/profile" },
    { label: "Riwayat", icon: <Clock3 size={20} />, path: "/riwayat" },
    { label: "Beranda", icon: <Home size={20} />, path: "/" },
    { label: "Koleksi", icon: <LayoutDashboard size={20} />, path: "/koleksi" },
    { label: "About", icon: <Info size={20} />, path: "/about" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-[#fdf6f2] border border-[#c598ad] z-20">
      <div className="bg-[#c598ad] text-white text-lg font-bold px-4 py-2 rounded-t-xl">
        {userName}
      </div>
      <div className="flex flex-col gap-2 px-4 py-2 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(item.path)}
            className=" flex items-center text-[#b2889b] hover:text-[#a06a8c] transition-colors w-full text-left"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
        <button
          className="flex items-center text-red-500 hover:text-red-600 w-full mt-2"
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