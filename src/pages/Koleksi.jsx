import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Searching from "../Components/Searching";
import CosplayCard from "../Components/CosplayCard";
import api from "../api/axios";
import rijal from "/img/rijal tidur.jpg";

export default function Koleksi() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateImageUrl = (imageUrl) => {
    // First check if imageUrl exists
    if (!imageUrl) return rijal;
    
    // Then check if it has a valid image extension
    const isValidFormat = /\.(jpe?g|png)$/i.test(imageUrl);
    
    // Return formatted path or fallback
    return isValidFormat ? `/img/${imageUrl}` : rijal;
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/items', {
          validateStatus: (status) => status === 200 || status === 404
        });

        if (response.status === 200) {
          setItems(response.data.data || []);
          setError(null);
        } else if (response.status === 404) {
          setItems([]);
          setError("Item masih kosong");
        }
        
      } catch (err) {
        if (err.response) {
          // Handle other error statuses
          setError(`Error: ${err.response.status} - ${err.response.data.message}`);
        } else if (err.request) {
          setError("Tidak bisa terhubung ke server");
        } else {
          setError("Terjadi kesalahan");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = ({ category, keyword }) => {
    console.log("Kategori:", category);
    console.log("Kata kunci:", keyword);


  };

  return (
    <>
      <Navbar />
      
      <div className="px-[5%] py-15">
        <Searching onSearch={handleSearch} />
        
        {isLoading ? (
          <div className="text-center py-8">Memuat data...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            {error === "Item masih kosong" ? (
              <div>
                <p>Tidak ada item yang ditemukan</p>
                <p className="text-sm text-gray-500">Silakan coba lagi nanti</p>
              </div>
            ) : (
              error
            )}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
            {items.map((item) => (
              <CosplayCard
                key={item.id}
                cosplay={{
                  id: item.id,
                  kategori: item.category.toLowerCase(),
                  name: item.name,
                  harga: item.price,
                  url: validateImageUrl(item.imageUrl) // fallback to rijal if imageUrl is missing
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}