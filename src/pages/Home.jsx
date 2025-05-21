import Navbar from "../Components/Navbar";
import ButtonLink from "../Components/ButtonLink";
import foto from "../assets/Group 8.png";
import bentuk from "../assets/Vector 1.png";
import CosplayCard from "../Components/CosplayCard";
import Footer from "../Components/Footer";

export default function Home() {
  const card = [
    {id:1, name: "Naruto", harga: "Rp. 200.000", ukuran: "M", url: "https://example.com/naruto.jpg"},
    {id:2, name: "Sakura", harga: "Rp. 250.000", ukuran: "L", url: "https://example.com/sakura.jpg"},
    {id:3, name: "Sasuke", harga: "Rp. 300.000", ukuran: "XL", url: "https://example.com/sasuke.jpg"},
    {id:4, name: "Kakashi", harga: "Rp. 350.000", ukuran: "XXL", url: "https://example.com/kakashi.jpg"},
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
      <div className="grid-card">
        {card.map((cosplay) => (
          <CosplayCard key={cosplay.id} cosplay={cosplay} />
        ))}
      </div>
      <Footer/>
    </>
  );
}
