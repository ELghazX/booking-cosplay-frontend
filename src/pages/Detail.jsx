import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import api from "../api/axios";
import DetailAccessory from "../Components/DetailAccessory";
import DetailCostume from "../Components/DetailCostume";
import Swal from "sweetalert2"; // Tambahkan import ini
import defaultProfile from "../assets/profile.png";

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await api.get(`/items/${id}`);
        const data = response.data;

        if (data.status) {
          setItem(data.data);
          setError(null);
        } else {
          setError(data.message || "Item tidak ditemukan");
          setItem(null);
          Swal.fire("Gagal!", data.message || "Item tidak ditemukan", "error");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Terjadi kesalahan");
        setItem(null);
        Swal.fire("Gagal!", err.response?.data?.message || "Terjadi kesalahan", "error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

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

  return (
    <>
      <Navbar />
      <div className="p-8 flex items-center justify-center">
        {isLoading ? (
          <p className="text-center">Memuat detail item...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : item ? (
          item.category === "accessory" ? (
            <DetailAccessory item={{ ...item, imageUrl: validateImageUrl(item.imageUrl) }} />
          ) : (
            <DetailCostume item={{ ...item, imageUrl: validateImageUrl(item.imageUrl) }} />
          )
        ) : (
          <p className="text-center">Data tidak ditemukan</p>
        )}
      </div>
    </>
  );
}