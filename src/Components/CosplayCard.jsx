import { useNavigate } from "react-router-dom";

function CosplayCard({ cosplay }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail-kostum/${cosplay.id}`);
  };

  return (
    <div className="flex flex-col h-[250px] w-[175px] bg-[#C599B6] rounded-3xl shadow-[0_0_10px_#C599B6] transition ease-in-out duration-350 hover:shadow-[0_0_40px_#C899B6] hover:scale-105" onClick={handleClick}>
      <div className="h-2/3"><img src={cosplay.url} alt={cosplay.name} className="w-full h-full object-cover rounded-t-3xl"/></div>
      <div className="h-1/3 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-white mb-2 ">{cosplay.name}</p>
        <p className="text-lg text-[#FFF7F3]">{cosplay.harga}</p>
      </div>
    </div>
  );
}

export default CosplayCard