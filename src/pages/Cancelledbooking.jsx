import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from "../Components/Sidebar";

export default function Confirmedbooking() {
  const bookings = [
    {
      no: 6,
      id: 24,
      nama: 'Mahmud',
      item: 'Kostum Miku',
      durasi: 2,
      status: 'Cancelled',
      harga: 50000,
      tanggal: '20 Mei 2025',
    },
    {
      no: 6,
      id: 25,
      nama: 'Mahmud',
      item: 'Kostum Miku',
      durasi: 2,
      status: 'Cancelled',
      harga: 50000,
      tanggal: '20 Mei 2025',
    },
    {
      no: 6,
      id: 26,
      nama: 'Mahmud',
      item: 'Kostum Miku',
      durasi: 2,
      status: 'Cancelled',
      harga: 50000,
      tanggal: '20 Mei 2025',
    },
    {
      no: 6,
      id: 24,
      nama: 'Mahmud',
      item: 'Kostum Miku',
      durasi: 2,
      status: 'Cancelled',
      harga: 50000,
      tanggal: '20 Mei 2025',
    },
    {
      no: 6,
      id: 24,
      nama: 'Mahmud',
      item: 'Kostum Miku',
      durasi: 2,
      status: 'Cancelled',
      harga: 50000,
      tanggal: '20 Mei 2025',
    },
    // ulangi dummy data sesuai kebutuhan...
  ];

  return (
    <div className="flex min-h-screen bg-[#FFF5F2] font-sans text-sm">
      {/* Sidebar */}
      <>
      <Sidebar />
      </>
      {/* <aside className="w-64 bg-[#FBD7CF] p-6 text-black flex flex-col">
        <h1 className="text-[#D48DB3] font-bold text-xl mb-10 text-center">ChocoMintCos</h1>
        <nav className="space-y-4">
          <div className="text-xs text-gray-500 font-semibold uppercase">Dashboard</div>
          <div className="bg-[#D48DB3] text-white px-3 py-2 rounded flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            Pending Booking
          </div>
          <div className="text-black">Confirmed Booking</div>
          <div className="text-black">Cancelled Booking</div>
          <div className="text-black">Booking History</div>
        </nav>
        <div className="mt-10 text-xs text-gray-500 font-semibold uppercase">Master Data</div>
        <div className="text-black mt-2">Item</div>
      </aside> */}

      {/* Main Content */}
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
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-base font-semibold mb-1">List Pending Booking</h3>
          <p className="text-sm text-gray-500 mb-4">
            Menampilkan Pending Booking di Sistem ChocomintCos
          </p>

          {/* Filter */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div>
                <label className="block text-gray-700 text-sm mb-1">Urut berdasarkan</label>
                <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option selected>Yang terlama</option>
                <option>Yang terbaru</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 text-sm mb-1">Jenis Paket</label>
                <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option selected>Express</option>
                <option>Biasa</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 text-sm mb-1">Status</label>
                <select className="border rounded px-3 py-2 w-full text-sm text-gray-700">
                <option selected>Selesai</option>
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
                  <th className="py-3 px-4">Id Booking</th>
                  <th className="py-3 px-4">Nama User</th>
                  <th className="py-3 px-4">Nama Item</th>
                  <th className="py-3 px-4">Durasi</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Total Harga</th>
                  <th className="py-3 px-4">Tanggal Sewa</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{item.no}</td>
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.nama}</td>
                    <td className="py-2 px-4">{item.item}</td>
                    <td className="py-2 px-4">{item.durasi}</td>
                    <td className="py-2 px-4">
                      <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{item.harga.toLocaleString()}</td>
                    <td className="py-2 px-4">{item.tanggal}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="bg-sky-400 text-white p-2 rounded"><FaEye /></button>
                      <button className="bg-blue-600 text-white p-2 rounded"><FaEdit /></button>
                      {item.status !== 'Cancelled' && (
                        <button className="bg-red-600 text-white p-2 rounded"><FaTrash /></button>
                      )}
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
