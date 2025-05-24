import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../Components/Navbar";
import ButtonLink from "../Components/ButtonLink";
import foto from "../assets/Group 8.png";
import bentuk from "../assets/Vector 1.png";
import CosplayCard from "../Components/CosplayCard";
import Footer from "../Components/Footer";
import rijal from "../assets/rijal tidur.jpg";

export default function Home() {
  const [category, setKategori] = useState("action");
  
  const card = [
    {id:1, kategori:category, name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: rijal},
    {id:2, kategori:category, name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:3, kategori:category, name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:4, kategori:category, name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},
  ]

  return (
    <>
      <Navbar/>
      <img src={bentuk} className="bentuk" />
      <div className="section1">
        <div className="sec1_text">
          <h1>Jadilah Apa Yang Kamu Inginkan!!!</h1>
          <ButtonLink/>
        </div>
        <img src={foto} alt="" />
      </div>
      <div className="but">
        <button className="btn-action" onClick={() => setKategori("action")}>Size</button>
        <button className="btn-other" onClick={() => setKategori("other")}>Harga</button>
      </div>
      <div className="grid-card">
        {card.map((cosplay) => (
          <CosplayCard key={cosplay.id} cosplay={cosplay} />
        ))}
      </div>
      <Footer/>
    </>
  );
}
