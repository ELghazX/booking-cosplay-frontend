import {
  CircleCheckBig,
  ClipboardList,
  CircleX,
  History,
  Shirt,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky top-0 w-80 h-screen bg-[#F7CDBD] flex flex-col px-7 py-8">
      <p className="text-3xl font-black text-[#B287B6] mb-10 text-center">ChocoMintCos</p>

      <nav className="flex flex-col gap-3 px-2">
        {/* DASHBOARD */}
        <p className="text-xl font-semibold text-black-600 uppercase mb-2">Dashboard</p>

        <NavLink
          to="/pending-booking"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <ClipboardList size={20} />
          Pending Booking
        </NavLink>

        <NavLink
          to="/confirmed-booking"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <CircleCheckBig size={20} />
          Confirmed Booking
        </NavLink>

        <NavLink
          to="/cancelled-booking"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <CircleX size={20} />
          Cancelled Booking
        </NavLink>

        <NavLink
          to="/booking-history"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <History size={20} />
          Booking History
        </NavLink>

        {/* MASTER DATA */}
        <p className="text-xl font-semibold text-black-600 uppercase mt-6 mb-2">Master Data</p>

        <NavLink
          to="/item"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <Shirt size={20} />
          Item
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
