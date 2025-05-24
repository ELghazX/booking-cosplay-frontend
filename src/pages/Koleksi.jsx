import React, { useState } from "react";
import rijal from "../assets/rijal tidur.jpg";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";
import Searching from "../Components/Searching";
import CosplayCard from "../Components/CosplayCard";
import api from "../api/axios";

export default function Koleksi() {
  const handleSearch = ({ category, keyword }) => {
    console.log("Kategori:", category);
    console.log("Kata kunci:", keyword);
    // bisa lanjut fetch API berdasarkan input ini
  };
  
  const card = [
    {id:1, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:2, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:3, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:4, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:5, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:6, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:7, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:8, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:9, kategori:"item", name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:10, kategori:"accessories", name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:11, kategori:"item", name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},
    {id:12, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:22, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:13, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:14, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:15, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:16, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:17, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:18, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:19, kategori:"item", name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:20, kategori:"accessories", name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:21, kategori:"item", name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"}, 
    {id:22, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:23, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:24, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:25, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:26, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:27, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:28, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:29, kategori:"item", name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:30, kategori:"accessories", name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:31, kategori:"item", name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},
    {id:32, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:32, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:33, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:34, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:35, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:36, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:37, kategori:"item", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:38, kategori:"accessories", name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:39, kategori:"item", name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:40, kategori:"accessories", name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:41, kategori:"item", name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},   
  ]

  return (
    <>
      <Navbar />
      
      {/* <Searching /> */}
      <div className="px-[5%] py-15">
        <Searching onSearch={handleSearch}/>
        <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
          {card.map((cosplay) => (
            <CosplayCard key={cosplay.id} cosplay={cosplay} />
          ))}
        </div>
      </div>
    </>
  );
}