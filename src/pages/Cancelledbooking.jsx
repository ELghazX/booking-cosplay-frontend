import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from "../Components/Sidebar";
import api from "../api/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Bookinghistory() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const DATA_PER_PAGE = 10;

  useEffect(() => {
    if (role !== "ADMIN") {
      Swal.fire({
        title: "Akses Ditolak",
        text: "Anda tidak memiliki izin untuk mengakses halaman admin.",
        icon: "error"
      }).then(() => {
        navigate("/");
      });
    }
  }, [role, navigate]);

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Logout?",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal"
    });
    if (confirm.isConfirmed) {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      navigate("/");
    }
  };

  // Fetch bookings from API
  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        // Ganti status sesuai kebutuhan: pending, confirmed, cancelled, dsb
        const res = await api.get(`/bookings/status/CANCELLED`);
        if (res.data.status) {
          setBookings(res.data.data);
          setTotalData(res.data.data.length);
          setError("");
        } else {
          setBookings([]);
          setTotalData(0);
          setError(res.data.message || "Tidak ada data");
        }
      } catch (err) {
        setBookings([]);
        setTotalData(0);
        setError(err.response?.data?.message || "Terjadi kesalahan");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(totalData / DATA_PER_PAGE);
  const paginatedBookings = bookings.slice(
    (currentPage - 1) * DATA_PER_PAGE,
    currentPage * DATA_PER_PAGE
  );

  // Aksi handlers
  const handleView = (id) => {
    navigate(`/detail-booking/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-booking/${id}`);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Batalkan Booking?",
      text: "Status booking akan diubah menjadi CANCELLED.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, batalkan!",
      cancelButtonText: "Batal"
    });
    if (confirm.isConfirmed) {
      try {
        await api.patch(`/bookings/${id}`, { status: "CANCELLED" });
        setBookings(prev =>
          prev.map(item =>
            item.id === id ? { ...item, status: "CANCELLED" } : item
          )
        );
        Swal.fire("Dibatalkan!", "Status booking telah diubah.", "success");
      } catch (err) {
        Swal.fire("Gagal!", err.response?.data?.message || "Gagal membatalkan booking", "error");
      }
    }
  };

  // Pagination button handler
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 px-10 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, {name}</h2>
            <p className="text-sm text-gray-600">{new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <button className="bg-[#D48DB3] text-white px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-base font-semibold mb-1">Booking History</h3>
          <p className="text-sm text-gray-500 mb-4">
            Menampilkan Booking History di Sistem ChocomintCos
          </p>

          {/* Table */}
          {isLoading ? (
            <div className="text-center py-8">Memuat data...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : paginatedBookings.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Tidak ada data</div>
          ) : (
            <>
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
                    {paginatedBookings.map((item, idx) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{(currentPage - 1) * DATA_PER_PAGE + idx + 1}</td>
                        <td className="py-2 px-4">{item.id}</td>
                        <td className="py-2 px-4">{item.nameUser}</td>
                        <td className="py-2 px-4">{item.nameItem}</td>
                        <td className="py-2 px-4">{item.duration}</td>
                        <td className="py-2 px-4">
                          {item.status === 'CANCELLED' ? (
                            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {item.status}
                            </span>
                          ) : item.status === 'CONFIRMED' ? (
                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {item.status}
                            </span>
                          ) : (
                            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {item.status}
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-4">{item.totalPrice?.toLocaleString()}</td>
                        <td className="py-2 px-4">{item.startDate}</td>
                        <td className="py-2 px-4 flex gap-2">
                          <button className="bg-sky-400 text-white p-2 rounded" onClick={() => handleView(item.id)}><FaEye /></button>
                          <button className="bg-blue-600 text-white p-2 rounded" onClick={() => handleEdit(item.id)}><FaEdit /></button>
                          {item.status !== 'CANCELLED' && (
                            <button className="bg-red-600 text-white p-2 rounded" onClick={() => handleDelete(item.id)}><FaTrash /></button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div>
                  Tampilan {paginatedBookings.length} dari {totalData} data
                </div>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(1)} disabled={currentPage === 1}>Awal</button>
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-[#D48DB3] text-white" : ""}`}
                      onClick={() => goToPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>Akhir</button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}