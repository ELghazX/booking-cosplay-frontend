import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHistory, FaBox } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-[#F7CDBD] flex flex-col px-7 py-8">
      <h1 className="text-2xl font-black text-[#B287B6] mb-10 text-center">ChocoMintCos</h1>

      <nav className="flex flex-col gap-3 px-2">
        {/* DASHBOARD */}
        <p className="text-xl font-semibold text-black-600 uppercase mb-2">Dashboard</p>

        <NavLink
          to="/admin/pending"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <FaClipboardList />
          Pending Booking
        </NavLink>

        <NavLink
          to="/admin/confirmed"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <FaCheckCircle />
          Confirmed Booking
        </NavLink>

        <NavLink
          to="/admin/cancelled"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <FaTimesCircle />
          Cancelled Booking
        </NavLink>

        <NavLink
          to="/admin/history"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <FaHistory />
          Booking History
        </NavLink>

        {/* MASTER DATA */}
        <p className="text-xl font-semibold text-black-600 uppercase mt-6 mb-2">Master Data</p>

        <NavLink
          to="/admin/item"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-md text-lg font-medium hover:scale-105 ${
              isActive ? "bg-[#D5A8C3] text-white" : "text-black-700 hover:bg-[#f0bfb0]"
            }`
          }
        >
          <FaBox />
          Item
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
