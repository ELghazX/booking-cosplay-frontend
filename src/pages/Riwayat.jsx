import React, { useState, useEffect } from "react";
import api from "../api/axios";
import Navbar from "../Components/Navbar";
import RiwayatItem from "../Components/RiwayatItem";

export default function Riwayat() {
    const [riwayat, setRiwayat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchRiwayat = async () => {
            try {
                const response = await api.get(`/bookings/user/${userId}`);
                const data = response.data;

                if (data.status) {
                    setRiwayat(data.data);
                    setError(null);
                } else {
                    setError(data.message || "Tidak ada riwayat ditemukan");
                    setRiwayat([]);
                }
            } catch (err) {
                setError(err.response?.data?.message || "Terjadi kesalahan");
                setRiwayat([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRiwayat();
    }, [userId]);

    const handleCancelBooking = async (bookingId) => {
        try {
          const response = await api.put(`/bookings/${bookingId}/status`, {
            status: "CANCELLED"
          });
    
          if (response.data.status) {
            setRiwayat(prev => prev.map(item => 
              item.id === bookingId ? {...item, status: "CANCELLED"} : item
            ));
          }

          return response.data;
        } catch (error) {
          console.error("Cancel failed:", error);
          throw error;
        }
      };    

    return (
        <>
          <Navbar />
          <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Riwayat Sewa</h1>
            {isLoading ? (
              <p className="text-center">Memuat riwayat sewa...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : riwayat.length > 0 ? (
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#C599B6]">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[25%]">
                            Nama Item
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[15%]">
                            Tanggal Mulai
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[10%]">
                            Durasi
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[20%]">
                            Total Harga
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[15%]">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-[15%]">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {riwayat.map((item) => (
                          <RiwayatItem key={item.id} item={item} onCancel={handleCancelBooking} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) :        (
              <p className="text-center">Tidak ada riwayat ditemukan</p>
            )}
          </div>
        </>
      );
}