import React, { useState } from "react";
import rijal from "../assets/rijal tidur.jpg";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";
import Searching from "../Components/Searching";
import CosplayCard from "../Components/CosplayCard";

export default function Koleksi() {
  const [category, setKategori] = useState("action");
  
  const card = [
    {id:1, kategori:category, name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:2, kategori:category, name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:3, kategori:category, name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:4, kategori:category, name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},
  ]

  return (
    <>
      <Navbar />
      {/* <Searching /> */}
      <div className="">
        <div className="but">
          <button className="btn-action" onClick={() => setKategori("action")}>Size</button>
          <button className="btn-other" onClick={() => setKategori("other")}>Harga</button>
        </div>
        <div className="grid grid-flow-col  gap-4 p-4">
          {card.map((cosplay) => (
            <CosplayCard key={cosplay.id} cosplay={cosplay} />
          ))}
        </div>
      </div>
    </>
  );
}