import { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus, FaHatCowboy, FaTshirt } from 'react-icons/fa';
import Sidebar from "../Components/Sidebar";

export default function Item() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const bookings = [
    {
      no: 6,
      id: 24,
      item: 'Kostum Miku',
      harga: 50000,
      kategori: 'Costume',
    },
    {
      no: 6,
      id: 24,
      item: 'Kostum Miku',
      harga: 50000,
      kategori: 'Costume',
    },
    {
      no: 6,
      id: 24,
      item: 'Kostum Miku',
      harga: 50000,
      kategori: 'Costume',
    },
    {
      no: 6,
      id: 24,
      item: 'Kostum Miku',
      harga: 50000,
      kategori: 'Costume',
    },
    // ... tambahkan data lain jika perlu
  ];

  return (
    <div className="flex min-h-screen bg-[#FFF5F2] font-sans text-sm">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, Raja Jawa</h2>
            <p className="text-sm text-gray-600">Selasa, 18 Mei 2025</p>
          </div>
          <button className="bg-[#D48DB3] text-white px-4 py-2 rounded">Logout</button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow p-6 relative">
          {/* Tombol Tambah */}
          <div className="absolute right-6 top-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#C48DB3] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#B47DA3]"
              >
                <FaPlus /> Tambah
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-[#FFD9CF] border border-pink-300 rounded-md shadow-md z-10 w-40">
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#F5CFC3]">
                    <FaHatCowboy /> Accessory
                  </button>
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#F5CFC3] border-t border-pink-300">
                    <FaTshirt /> Costume
                  </button>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-base font-semibold mb-1">List Pending Booking</h3>
          <p className="text-sm text-gray-500 mb-4">
            Menampilkan Pending Booking di Sistem ChocomintCos
          </p>

          {/* Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Urut berdasarkan</label>
              <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option>Yang terlama</option>
                <option>Yang terbaru</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Jenis Paket</label>
              <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option>Express</option>
                <option>Biasa</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Status</label>
              <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option>Selesai</option>
                <option>Belum</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Cari</label>
              <input
                type="text"
                placeholder="Cari pesanan..."
                className="border px-3 py-2 w-full rounded text-sm"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="bg-[#F7F7F7] text-gray-700 font-medium">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Id Item</th>
                  <th className="py-3 px-4">Nama Item</th>
                  <th className="py-3 px-4">Harga per hari</th>
                  <th className="py-3 px-4">Kategori</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{item.no}</td>
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.item}</td>
                    <td className="py-2 px-4">{item.harga.toLocaleString()}</td>
                    <td className="py-2 px-4">{item.kategori}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="bg-sky-400 text-white p-2 rounded"><FaEye /></button>
                      <button className="bg-blue-600 text-white p-2 rounded"><FaEdit /></button>
                      <button className="bg-red-600 text-white p-2 rounded"><FaTrash /></button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <div>Tampilan 5 dari 100 data</div>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border rounded">Awal</button>
              <button className="px-3 py-1 border rounded">&lt;</button>
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 bg-[#D48DB3] text-white rounded">2</button>
              <button className="px-3 py-1 border rounded">3</button>
              <button className="px-3 py-1 border rounded">&gt;</button>
              <button className="px-3 py-1 border rounded">Akhir</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
