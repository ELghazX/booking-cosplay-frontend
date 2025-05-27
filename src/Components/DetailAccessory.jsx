import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import rijal from "../assets/rijal tidur.jpg";
import defaultProfile from "../assets/profile.png";
import Swal from "sweetalert2";

export default function DetailAccessory({ item }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: "",
    duration: 1,
  });

  const handleBack = () => {
    navigate("/koleksi");
  };

  const handleBooking = async () => {
    try {
      if (!form.date) {
        Swal.fire("Gagal!", "Harap pilih tanggal sewa", "error");
        return;
      }

      if (form.duration < 1) {
        Swal.fire("Gagal!", "Durasi harus minimal 1 hari", "error");
        return;
      }
      const userId = localStorage.getItem("id");

      if (!userId) {
        Swal.fire("Gagal!", "Anda harus login terlebih dahulu!", "error");
        return;
      }

      const bookingData = {
        itemId: item.id,
        userId: userId,
        startDate: form.date,
        duration: parseInt(form.duration, 10)
      };

      const response = await api.post("/bookings", bookingData, 
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.status) {
        Swal.fire("Berhasil!", "Booking berhasil!", "success").then(() => {
          navigate("/koleksi");
        });
      } else {
        Swal.fire("Gagal!", response.data.message || "Booking gagal!", "error");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      Swal.fire("Gagal!", error.response?.data?.message || "Terjadi kesalahan saat melakukan booking. Silakan coba lagi.", "error");
    }
  };

  const toTitleCase = (str) => {
    if (!str) return "";
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Fungsi validasi URL gambar
  const validateImageUrl = (imageUrl) => {
    if (!imageUrl) return defaultProfile;
    if (/^https?:\/\//i.test(imageUrl)) {
      return imageUrl;
    }
    const cloudinaryBase = "https://res.cloudinary.com/dqbfizrkk/image/upload/";
    const isValidFormat = /\.(jpe?g|png|webp)$/i.test(imageUrl);
    return isValidFormat ? `${cloudinaryBase}${imageUrl}` : defaultProfile;
  };

  if (item.deleted) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center text-center">
        <p className="text-2xl font-semibold text-red-500">
          This listing has been deleted
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-screen-xl w-full flex flex-col md:flex-row overflow-hidden mx-auto min-h-[calc(100vh-160px)]">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="relative">
          <img
            src={validateImageUrl(item.imageUrl)}
            alt={item.name}
            onError={(e) => (e.target.src = defaultProfile)}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full p-6 space-y-6 flex flex-col">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Item</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/icon-accessory.png" alt="accessory icon" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={toTitleCase(item.name)}
              disabled
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 py-2 text-lg pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Harga Per Hari</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/icon-harga.png" alt="accessory icon" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.pricePerDay)}
              disabled
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 py-2 text-lg pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipe Aksesoris</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/icon-tipe.png" alt="type icon" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={toTitleCase(item.type)}
              disabled
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 py-2 text-lg pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal Sewa (YYYY-MM-DD)</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/icon-tanggal.png" alt="date icon" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 py-2 text-lg pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Durasi Sewa (Hari)</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/icon-duration.png" alt="duration icon" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              name="duration"
              value={form.duration}
              min="1"
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 py-2 text-lg pl-10"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4 pt-4 mt-auto">
          <button type="button" onClick={handleBack} className="bg-[#C599B6] hover:bg-[#b487a3] text-white px-8 py-4 rounded-xl transition-all ease-in-out duration-300 hover:scale-105 shadow-lg hover:shadow-xl shadow-[#C599B6]/40 text-lg font-semibold">
            Kembali
          </button>
          <button type="button" onClick={handleBooking} className="bg-[#FAD0C4] hover:bg-[#e6bcb1] text-white px-8 py-4 rounded-xl transition-all ease-in-out duration-300 hover:scale-105 shadow-lg hover:shadow-xl shadow-[#FAD0C4]/40 text-lg font-semibold">
            Buat Booking
          </button>
        </div>
      </div>
    </div>
  );
}