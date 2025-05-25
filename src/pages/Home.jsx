import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../Components/Navbar";
import ButtonLink from "../Components/ButtonLink";
import foto from "../assets/Group 8.png";
import bentuk from "../assets/Vector 1.png";
import bentuk2 from "../assets/blob2.png";
import CosplayCard from "../Components/CosplayCard";
import Footer from "../Components/Footer";
import rijal from "../assets/rijal tidur.jpg";

export default function Home() {
  
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
    ]

  return (
  <>
    <Navbar />
    <img
      src={bentuk}
      className="absolute h-4xl top-0 right-0 -z-10"
      alt=""
    />
    
    <div className="my-50 mx-[5%] flex flex-row items-center justify-between mb-70 ">
      <div className="">
        <p className="text-8xl m-0 mb-5 text-[#C599B6] font-bold">
          Jadilah Apa Yang Kamu Inginkan!!!
        </p>
        <ButtonLink
          path="/Koleksi"
          nama="Sewa Sekarang"
          className="text-5xl text-[#FFF7F3] bg-[#C599B6] rounded-2xl w-100 text-center py-3 hover:bg-[#C899B6] transition ease-in-out duration-300 shadow-[0_0_10px_#C599B6] hover:shadow-[0_0_40px_#C899B6] hover:scale-105"
        />
      </div>
      <img src={foto} alt="" className="h-2xl" />
    </div>
    <p className="px-[5%] text-7xl text-[#C599B6] font-bold mt-50">Koleksi</p>
    <div className="grid grid-flow-col auto-cols-max gap-4 place-content-left md:auto-cols-min overflow-x-auto pt-15 mx-[5%] py-10">
      {card.map((cosplay) => (
        <CosplayCard key={cosplay.id} cosplay={cosplay} />
      ))}
    </div>
    {/* <img src={bentuk2} className="absolute bot-0 left-0 -z-1" alt="" /> */}
    <Footer />
    
  </>
);
}
