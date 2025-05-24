import { useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Pencil,
  Trash2,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin/dashboard" },
    { label: "Tambah Kostum", icon: <PlusCircle size={20} />, path: "/admin/tambah" },
    { label: "Edit Kostum", icon: <Pencil size={20} />, path: "/admin/edit" },
    { label: "Hapus Kostum", icon: <Trash2 size={20} />, path: "/admin/hapus" },
  ];

  return (
    <div
      className={`h-screen bg-[#c598ad] text-white transition-all duration-300 flex flex-col ${
        isOpen ? "w-64" : "w-15"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/30">
        {isOpen && <span className="ml-3">Admin Menu</span>}
        <button onClick={toggleSidebar}>
          <MenuIcon size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center px-4 py-2 hover:bg-[#b2889b] transition-colors"
          >
            {item.icon}
            {isOpen && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/30 mt-auto">
        <button className="flex items-center w-full hover:bg-[#b2889b] px-4 py-2 transition-colors">
          <LogOut size={20} />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
