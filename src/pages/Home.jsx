import { useState, useEffect } from "react";
import api from "../api/axios"; // Make sure you have this import
import Navbar from "../Components/Navbar";
import ButtonLink from "../Components/ButtonLink";
import foto from "../assets/Group 8.png";
import bentuk from "../assets/Vector 1.png";
import bentuk2 from "../assets/blob2.png";
import CosplayCard from "../Components/CosplayCard";
import Footer from "../Components/Footer";
import rijal from "../assets/rijal tidur.jpg";

export default function Home() {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateImageUrl = (imageUrl) => {
    if (!imageUrl) return rijal;
    const isValidFormat = /\.(jpe?g|png|webp)$/i.test(imageUrl);
    return isValidFormat ? `/img/${imageUrl}` : rijal;
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/items');
        if (response.data.status) {
          const itemsData = response.data.data || [];
          setCard(itemsData);
          setError(null);
        } else {
          setCard([]);
          setError(response.data.message || "Item masih kosong");
        }
      } catch (err) {
        setError(err.response?.data?.message || "Terjadi kesalahan");
        setCard([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
  <>
    <Navbar />
    <img
      src={bentuk}
      className="absolute h-4xl top-0 right-0 -z-10"
      alt=""
    />
    <img src={bentuk2} className="absolute h-4xl top-189 left-0 -z-10" alt="" />
    <div className="my-50 mx-[5%] flex flex-row items-center justify-between mb-70 ">
      <div className="">
        <p className="text-8xl m-0 mb-5 text-[#C599B6] font-bold">
          Jadilah Apa Yang Kamu Inginkan!!!
        </p>
        <ButtonLink
          path="/koleksi"
          nama="Sewa Sekarang"
          className="text-5xl text-[#FFF7F3] bg-[#C599B6] rounded-2xl w-100 text-center py-3 hover:bg-[#C899B6] transition ease-in-out duration-300 shadow-[0_0_10px_#C599B6] hover:shadow-[0_0_40px_#C899B6] hover:scale-105"
        />
      </div>
      <img src={foto} alt="" className="h-2xl" />
    </div>
    <p className="px-[5%] text-7xl text-[#C599B6] font-bold mt-50">Koleksi</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%] py-10">
        {isLoading ? (
          <p className="text-center text-3xl text-[#C599B6]">Loading...</p>
        ) : error ? (
          <p className="text-center text-3xl text-red-500">{error}</p>
        ) : card.length > 0 ? (
          card.map((item) => (
            <CosplayCard
              key={item.id}
              cosplay={{
                ...item,
                url: validateImageUrl(item.imageUrl),
                harga: item.price,
                kategori: item.category
              }}
            />
          ))
        ) : (
          <p className="text-center text-3xl text-[#C599B6]">Tidak ada item tersedia</p>
        )}
      </div>
    <Footer />
  </>
);
}
