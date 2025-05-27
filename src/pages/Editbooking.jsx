import { useEffect, useState } from "react";
import { FaPhoneAlt, FaUser, FaTshirt, FaMoneyBillWave, FaClock, FaCalculator, FaChevronLeft, FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import api from "../api/axios";
import Swal from "sweetalert2";

export default function EditBooking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
const name = localStorage.getItem("name");
  


  useEffect(() => {
    const fetchBooking = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/bookings/${id}`);
        if (res.data.status && res.data.data) {
          setBooking(res.data.data);
          setStatus(res.data.data.status);
          setError("");
        } else {
          setError(res.data.message || "Data tidak ditemukan");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [id]);

  const handleUpdateStatus = async () => {
    setIsSubmitting(true);
    try {
      await api.put(`/bookings/${id}/status`, { status });
      setBooking(prev => ({ ...prev, status }));
      Swal.fire("Berhasil", "Status booking berhasil diubah", "success");
    } catch (err) {
      Swal.fire("Gagal", err.response?.data?.message || "Gagal mengubah status", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <p>Memuat data...</p>
        </div>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-red-500">{error || "Data tidak ditemukan"}</p>
        </div>
      </div>
    );
  }

  const isCancelled = booking.status === "CANCELLED";
  const isConfirmed = booking.status === "CONFIRMED";

  return (
    <div className="flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, {name}</h2>
            <p className="text-sm text-gray-600">{new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <button className="bg-[#D48DB3] text-white rounded px-4 py-2 text-sm">Logout</button>
        </div>

        {/* White Box Full Width */}
        <div className="bg-white rounded-2xl shadow p-8 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-xl">Edit Booking</h3>
              <p className="text-sm text-gray-500">Ubah status booking</p>
            </div>
            <div className="text-sm">
              <span className="text-gray-700 font-medium">Status Pesanan: </span>
              {isCancelled ? (
                <span className="bg-red-200 text-red-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              ) : booking.status === "CONFIRMED" ? (
                <span className="bg-green-200 text-green-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              ) : (
                <span className="bg-yellow-300 text-gray-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {/* ID Booking and Nomor HP Pemesan */}
              <div>
                <label className="text-sm font-medium">Id Booking</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaCalculator className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.id}</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Nomor HP Pemesan</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaPhoneAlt className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.phone || "-"}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {/* Nama Pelanggan and Nama Item */}
              <div>
                <label className="text-sm font-medium">Nama Pelanggan</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.nameUser}</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Nama Item</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaTshirt className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.itemName}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Harga Item per Hari and Durasi */}
              <div>
                <label className="text-sm font-medium">Harga Item per Hari</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaMoneyBillWave className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">
                    {booking.pricePerDay?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Durasi</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.duration} hari</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Total Harga and Tanggal Mulai */}
              <div>
                <label className="text-sm font-medium">Total Harga</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaCalculator className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">
                    {booking.totalPrice?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Tanggal Mulai</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.startDate}</span>
                </div>
              </div>
            </div>

            {/* Status Edit */}
            <div>
              <label className="text-sm font-medium">Status Booking</label>
              <select
                className="border rounded px-4 py-3 w-full text-gray-700 bg-gray-50"
                value={status}
                onChange={e => setStatus(e.target.value)}
                disabled={isCancelled || isConfirmed || isSubmitting}
              >
                <option value="PENDING">Pending</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Tombol Kembali dan Ubah Status */}
          <div className="flex justify-center gap-8 mt-10">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
              disabled={isSubmitting}
            >
              <FaChevronLeft />
              Kembali
            </button>
            <button
              className="bg-[#F4A1B2] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
              onClick={handleUpdateStatus}
              disabled={isCancelled || isConfirmed || isSubmitting || status === booking.status}
            >
              <FaCheckCircle />
              Ubah Status
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}