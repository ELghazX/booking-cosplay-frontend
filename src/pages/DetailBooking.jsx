import {
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHistory,
  FaBoxOpen,
  FaSignOutAlt,
  FaPhoneAlt,
  FaUser,
  FaTshirt,
  FaMoneyBillWave,
  FaCalculator,
  FaChevronLeft,
  FaBorderAll,
} from "react-icons/fa";
import { CgMenuBoxed, CgNotes } from "react-icons/cg";


export default function DetailBooking() {
  return (
    <div className="flex min-h-screen bg-[#FFF8F5] font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-60 bg-[#FBD7CF] p-5 flex flex-col text-black">
        <h1 className="text-[#D48DB3] font-bold text-xl mb-6 text-center">
          ChocoMintCos
        </h1>
        <div className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-600">
          Dashboard
        </div>
        <nav className="space-y-4">
          <div className="flex items-center gap-2">
            <CgNotes className="w-4 h-4" />
            <span>Pending Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="w-4 h-4" />
            <span>Confirmed Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTimesCircle className="w-4 h-4" />
            <span>Cancelled Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHistory className="w-4 h-4" />
            <span>Booking History</span>
          </div>

          <div className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-600">
            Master Data
          </div>
          <div className="flex items-center gap-2">
            <FaTshirt className="w-4 h-4" />
            <span>Item</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-md font-semibold">Selamat Datang, Raja Jawa</h2>
            <p className="text-sm text-gray-600">Selasa, 18 Mei 2025</p>
          </div>
          <button className="bg-[#D48DB3] text-white rounded px-4 py-1 text-sm">
            Logout
          </button>
        </div>

        {/* White Box Full Width */}
        <div className="bg-white rounded-2xl shadow p-8 w-full">
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg">Detail Booking</h3>
              <p className="text-sm text-gray-500">Menampilkan Detail</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-700 font-medium">Status Pesanan: </span>
              <span className="bg-yellow-300 text-gray-800 rounded-full px-3 py-0.5 text-sm font-medium">
                Pending
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Id Booking</label>
              <div className="flex items-center border rounded px-3 py-2">
                <CgMenuBoxed className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">2</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nomor HP Pemesan</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">08245678452</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nama Pelanggan</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">Iliga</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nama Item</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaTshirt className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">Kostum Miku</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Harga Item per Hari</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaMoneyBillWave className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">3.000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Durasi</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">Berat cucian</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Total Harga</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaCalculator className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">
                  4 x 3.000 = 12.000
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
              <FaChevronLeft />
              Kembali
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}