import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import api from "../api/axios";
import rijal from "../assets/rijal tidur.jpg";
import defaultProfile from "../assets/profile.png";

// Fungsi validasi URL gambar (seperti di halaman lain)
const validateImageUrl = (imageUrl) => {
  if (!imageUrl) return defaultProfile;
  if (/^https?:\/\//i.test(imageUrl)) {
    return imageUrl;
  }
  const cloudinaryBase = "https://res.cloudinary.com/dqbfizrkk/image/upload/";
  const isValidFormat = /\.(jpe?g|png|webp)$/i.test(imageUrl);
  return isValidFormat ? `${cloudinaryBase}${imageUrl}` : defaultProfile;
};

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toTitleCase = (str) => {
    if (!str) return "";
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  };

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/items/${id}`);
        if (res.data.status && res.data.data) {
          setItem(res.data.data);
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
    fetchItem();
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

  if (error || !item) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-red-500">{error || "Data tidak ditemukan"}</p>
        </div>
      </div>
    );
  }

  const handleBack = () => navigate(-1);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center py-10">
        {item.category === "costume" ? (
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
            {/* Right Side - Info */}
            <div className="md:w-1/2 w-full p-6 space-y-6 flex flex-col">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Item</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-costume.png" alt="costume icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={toTitleCase(item.name)}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Harga Per Hari</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-harga.png" alt="harga icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pricePerDay)}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama Karakter</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-chara.png" alt="chara icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={toTitleCase(item.characterName)}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-tanggal.png" alt="gender icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={toTitleCase(item.gender)}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Ukuran</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-ukuran.png" alt="ukuran icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={item.size?.toUpperCase()}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex justify-center pt-4 mt-auto">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-[#C599B6] hover:bg-[#b487a3] text-white px-8 py-4 rounded-xl transition-all ease-in-out hover:scale-105 shadow-lg shadow-[#C599B6]/40 text-lg font-semibold"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        ) : item.category === "accessory" ? (
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
            {/* Right Side - Info */}
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
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Harga Per Hari</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src="/icon-harga.png" alt="harga icon" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pricePerDay)}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
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
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-lg pl-10 bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex justify-center pt-4 mt-auto">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-[#C599B6] hover:bg-[#b487a3] text-white px-8 py-4 rounded-xl transition-all ease-in-out hover:scale-105 shadow-lg shadow-[#C599B6]/40 text-lg font-semibold"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Kategori item tidak dikenali</div>
        )}
      </main>
    </div>
  );
}