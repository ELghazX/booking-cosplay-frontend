// Koleksi.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Searching from "../Components/Searching";
import CosplayCard from "../Components/CosplayCard";
import api from "../api/axios";
import rijal from "/img/rijal tidur.jpg";
// Ganti dengan path fallback baru
import defaultProfile from "../assets/profile.png";

export default function Koleksi() {
  const [allItems, setAllItems] = useState([]); // Original items
  const [filteredItems, setFilteredItems] = useState([]); // Filtered items
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateImageUrl = (imageUrl) => {
    console.log("imageUrl dari database:", imageUrl);
    if (!imageUrl) return defaultProfile;
    if (/^https?:\/\//i.test(imageUrl)) {
      // Sudah berupa URL penuh
      return imageUrl;
    }
    const cloudinaryBase = "https://res.cloudinary.com/dqbfizrkk/image/upload/";
    const isValidFormat = /\.(jpe?g|png|webp)$/i.test(imageUrl);
    const url = isValidFormat ? `${cloudinaryBase}${imageUrl}` : defaultProfile;
    console.log("URL gambar yang dipakai:", url);
    return url;
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/items', {
          validateStatus: (status) => status === 200 || status === 404
        });

        if (response.status === 200) {
          const itemsData = response.data.data || [];
          setAllItems(itemsData);
          setFilteredItems(itemsData); // Initialize with all items
          setError(null);
        } else if (response.status === 404) {
          setAllItems([]);
          setFilteredItems([]);
          setError("Item masih kosong");
        }
      } catch (err) {
        // Error handling remains the same
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = ({ category, keyword }) => {
    let results = [...allItems];

    // Category filter
    if (category !== "All") {
      results = results.filter(item =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Keyword filter
    if (keyword.trim()) {
      const searchTerm = keyword.toLowerCase().trim();
      results = results.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredItems(results);
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
            {filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <p>Tidak ada item yang cocok dengan pencarian</p>
                <p className="text-sm text-gray-500">Silakan coba kata kunci atau kategori lain</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <CosplayCard
                  key={item.id}
                  cosplay={{
                    id: item.id,
                    kategori: item.category.toLowerCase(),
                    name: item.name,
                    harga: item.price,
                    url: validateImageUrl(item.imageUrl)
                  }}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}