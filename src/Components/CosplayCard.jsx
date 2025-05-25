import { useNavigate } from "react-router-dom";

function CosplayCard({ cosplay }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail-kostum/${cosplay.id}`);
  };

  if (cosplay.kategori === "accessory") {
    return (
      <div className="flex flex-col h-[250px] w-[175px] bg-[#C599B6] rounded-3xl shadow-[0_0_10px_#C599B6] transition ease-in-out duration-350 hover:shadow-[0_0_40px_#C899B6] hover:scale-105" onClick={handleClick}>
        <div className="h-2/3"><img src={cosplay.url} alt={cosplay.name} className="w-full h-full object-cover rounded-t-3xl"/></div>
        <div className="h-1/3 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-white mb-2 ">{cosplay.name}</h3>
          <h4 className="text-2xl font-semibold text-white mb-2">{cosplay.kategori}</h4>
          <p className="text-sm text-[#FFF7F3]">{cosplay.harga}</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="flex flex-col h-[250px] w-[175px] bg-[#C599c1] rounded-3xl shadow-[0_0_10px_#C599B6] transition ease-in-out duration-350 hover:shadow-[0_0_40px_#C899B6] hover:scale-105" onClick={handleClick}>
        <div className="h-2/3"><img src={cosplay.url} alt={cosplay.name} className="w-full h-full object-cover rounded-t-3xl"/></div>
        <div className="h-1/3 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-white mb-2">{cosplay.name}</h3>
          <h4 className="text-2xl font-semibold text-white mb-2">{cosplay.kategori}</h4>
          <p className="text-sm text-[#FFF7F3]">{cosplay.ukuran}</p>
          <p className="text-sm text-[#FFF7F3]">{cosplay.harga}</p>
        </div>
      </div>
    );
  }
}

export default CosplayCard