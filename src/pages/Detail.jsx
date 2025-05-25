import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import api from "../api/axios";

import rijal from "../assets/rijal tidur.jpg";

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

    if (item && item.category === "accessory") {
        return (
        <>
        <Navbar />
            <div className="p-8 min-h-screen">
                {isLoading ? (
                <p className="text-center">Memuat detail item...</p>
                ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
                ) : item ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Image Section */}
                            <div className="md:w-1/2">
                                <img
                                src={(`/img/${item.imageUrl}`)}
                                alt={item.name}
                                className="w-full rounded-lg shadow-lg"
                                onError={(e) => {
                                    e.target.src = rijal; // Fallback to local image if URL fails
                                }}
                                />
                            </div>
                        
                        {/* Details Section */}
                            <div className="md:w-1/2 space-y-4">
                                <h1 className="text-3xl font-bold">{item.name}</h1>
                                
                                <div className="space-y-2">
                                    <p className="text-lg">
                                        <span className="font-semibold">Kategori:</span>{" "}
                                        {item.category}
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-semibold">Harga per Hari:</span>{" "}
                                        {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        }).format(item.pricePerDay)}
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-semibold">Tipe:</span> {item.type}
                                    </p>
                                    {item.deleted && (
                                        <p className="text-red-500">Item ini telah dihapus</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                <p className="text-center">Data tidak ditemukan</p>
                )}
            </div>
        </>
        );
    }

    else {
        return (
            <>
                <Navbar />
                <div className="p-8 min-h-screen">
                    {isLoading ? (
                        <p className="text-center">Memuat detail item...</p>
                    ) : error ? (
                        <p className="text-red-500 text-center">{error}</p>
                    ) : item ? (
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Image Section */}
                                <div className="md:w-1/2">
                                    <img
                                        src={(`/img/${item.imageUrl}`)}
                                        alt={item.name}
                                        className="w-full rounded-lg shadow-lg"
                                        onError={(e) => {
                                            e.target.src = rijal; // Fallback to local image if URL fails
                                        }}
                                    />
                                </div>

                                {/* Details Section */}
                                <div className="md:w-1/2 space-y-4">
                                    <h1 className="text-3xl font-bold">{item.name}</h1>

                                    <div className="space-y-2">
                                        <p className="text-lg">
                                            <span className="font-semibold">Kategori:</span>{" "}
                                            {item.category}
                                        </p>
                                        <p className="text-lg">
                                            <span className="font-semibold">Harga per Hari:</span>{" "}
                                            {new Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            }).format(item.pricePerDay)}
                                        </p>
                                        <p className="text-lg">
                                            <span className="font-semibold">Size:</span> {item.size}
                                        </p>
                                        <p className="text-lg">
                                            <span className="font-semibold">Character:</span> {item.characterName}
                                        </p>
                                        <p className="text-lg">
                                            <span className="font-semibold">Gender:</span> {item.gender}
                                        </p>
                                        {item.deleted && (
                                            <p className="text-red-500">Item ini telah dihapus</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center">Data tidak ditemukan</p>
                    )}
                </div>
            </>
        );
    }
}