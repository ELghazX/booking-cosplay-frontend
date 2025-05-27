import {
  FaClock,
  FaCalculator,
  FaChevronLeft,
  FaPhoneAlt,
  FaUser,
  FaTshirt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import Sidebar from "../Components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function DetailBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/bookings/${id}`);
        if (res.data.status && res.data.data) {
          setBooking(res.data.data);
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

  return (
    <div className="flex ">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-md font-semibold">Selamat Datang, Raja Jawa</h2>
            <p className="text-sm text-gray-600">
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
              {booking.status === "CONFIRMED" ? (
                <span className="bg-green-200 text-green-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              ) : booking.status === "CANCELLED" ? (
                <span className="bg-red-200 text-red-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              ) : (
                <span className="bg-yellow-300 text-gray-800 rounded-full px-3 py-0.5 text-sm font-medium">
                  {booking.status}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Id Booking</label>
              <div className="flex items-center border rounded px-3 py-2">
                <CgMenuBoxed className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">{booking.id}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nomor HP Pemesan</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">{booking.phone || "-"}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nama Pelanggan</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">{booking.nameUser}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Nama Item</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaTshirt className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">{booking.itemName}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Harga Item per Hari</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaMoneyBillWave className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">
                    {booking.pricePerDay?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Durasi</label>
                <div className="flex items-center border rounded px-3 py-2">
                  <FaClock className="text-gray-400 mr-2" />
                  <span className="text-gray-700 text-sm">{booking.duration} hari</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Tanggal Mulai</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaClock className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">{booking.startDate}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Total Harga</label>
              <div className="flex items-center border rounded px-3 py-2">
                <FaCalculator className="text-gray-400 mr-2" />
                <span className="text-gray-700 text-sm">
                  {booking.totalPrice?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
              onClick={() => navigate(-1)}
            >
              <FaChevronLeft />
              Kembali
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}