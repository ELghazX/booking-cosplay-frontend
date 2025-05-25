import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import api from "../api/axios";
import DetailAccessory from "../Components/DetailAccessory";
import DetailCostume from "../Components/DetailCostume";

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
        }
      } catch (err) {
        setError(err.response?.data?.message || "Terjadi kesalahan");
        setItem(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="p-8 min-h-screen">
        {isLoading ? (
          <p className="text-center">Memuat detail item...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : item ? (
          item.category === "accessory" ? (
            <DetailAccessory item={item} />
          ) : (
            <DetailCostume item={item} />
          )
        ) : (
          <p className="text-center">Data tidak ditemukan</p>
        )}
      </div>
    </>
  );
}