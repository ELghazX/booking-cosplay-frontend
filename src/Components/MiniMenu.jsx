import { useState } from "react";
import {
  UserCircle,
  Clock3,
  Home,
  LayoutDashboard,
  Info,
  LogOut,
} from "lucide-react";

function MiniMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Profile User", icon: <UserCircle size={20} />, path: "/profile" },
    { label: "Riwayat", icon: <Clock3 size={20} />, path: "/riwayat" },
    { label: "Beranda", icon: <Home size={20} />, path: "/" },
    { label: "Koleksi", icon: <LayoutDashboard size={20} />, path: "/koleksi" },
    { label: "About", icon: <Info size={20} />, path: "/about" },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Trigger (Foto Profil / Ikon) */}
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full bg-[#c598ad] flex items-center justify-center text-white"
      >
        U
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-[#fdf6f2] border border-[#c598ad] z-50">
          <div className="bg-[#c598ad] text-white text-lg font-bold px-4 py-2 rounded-t-xl">
            Nama Akun
          </div>

          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center text-[#b2889b] hover:text-[#a06a8c] transition-colors"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </a>
            ))}

            {/* Logout */}
            <button className="flex items-center text-red-500 hover:text-red-600 w-full mt-2">
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniMenu;
