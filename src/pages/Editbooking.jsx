import { FaPhoneAlt, FaUser, FaTshirt, FaMoneyBillWave, FaClock, FaCalculator, FaChevronLeft, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";

export default function EditBooking() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#FFF8F5] font-sans text-sm">
      <>
      <Sidebar />
      </>
      {/* Sidebar */}
      {/* <aside className="w-64 bg-[#FBD7CF] p-6 flex flex-col text-black">
        <h1 className="text-[#D48DB3] font-bold text-xl mb-8 text-center">ChocoMintCos</h1>
        <div className="font-bold text-xs text-gray-600 uppercase mb-4">Dashboard</div>
        <nav className="space-y-4">
          <div className="flex items-center gap-2 text-black">
            <FaPhoneAlt className="w-4 h-4" />
            <span>Pending Booking</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaPhoneAlt className="w-4 h-4" />
            <span>Confirmed Booking</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaPhoneAlt className="w-4 h-4" />
            <span>Cancelled Booking</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaPhoneAlt className="w-4 h-4" />
            <span>Booking History</span>
          </div>
          <div className="mt-6 text-xs font-bold text-gray-600 uppercase">Master Data</div>
          <div className="flex items-center gap-2 text-black">
            <FaTshirt className="w-4 h-4" />
            <span>Item</span>
          </div>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, Raja Jawa</h2>
            <p className="text-sm text-gray-600">Selasa, 18 Mei 2025</p>
          </div>
          <button className="bg-[#D48DB3] text-white rounded px-4 py-2 text-sm">Logout</button>
        </div>

        {/* White Box Full Width */}
        <div className="bg-white rounded-2xl shadow p-8 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-xl">Detail Booking</h3>
              <p className="text-sm text-gray-500">Menampilkan Detail</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-700 font-medium">Status Pesanan: </span>
              <span className="bg-yellow-300 text-gray-800 rounded-full px-3 py-0.5 text-sm font-medium">
                Pending
              </span>
              {/* <select className="bg-yellow-300 text-gray-800 rounded-full px-6 py-2 text-sm font-medium w-full sm:w-auto">
                <option value="pending" selected>Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select> */}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {/* ID Booking and Nomor HP Pemesan */}
              <div>
                <label className="text-sm font-medium">Id Booking</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaPhoneAlt className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">2</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Nomor HP Pemesan</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaPhoneAlt className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">08245678452</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {/* Nama Pelanggan and Nama Item */}
              <div>
                <label className="text-sm font-medium">Nama Pelanggan</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">Iliga</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Nama Item</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaTshirt className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">Kostum Miku</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Harga Item per Hari and Durasi */}
              <div>
                <label className="text-sm font-medium">Harga Item per Hari</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaMoneyBillWave className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">3.000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Durasi</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">Berat cucian</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Total Harga and Status */}
              <div>
                <label className="text-sm font-medium">Total Harga</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaCalculator className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">4 x 3.000 = 12.000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Status</label>
                <div className="flex items-center border rounded px-4 py-3 w-full sm:w-auto">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Kembali dan Ubah Status */}
          <div className="flex justify-center gap-8 mt-10">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <FaChevronLeft />
              Kembali
            </button>
            <button className="bg-[#F4A1B2] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
              <FaCheckCircle />
              Ubah Status
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
