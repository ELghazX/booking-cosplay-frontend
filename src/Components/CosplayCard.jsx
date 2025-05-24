function CosplayCard({ cosplay }) {
  const handleClick = () => {
    alert(`You clicked on ${cosplay.name}`);
  };

  if (cosplay.kategori === "action") {
    return (
      <div className="flex flex-col h-xl w-xs bg-[#C599B6] rounded-[1.5vw] hover:shadow-xl shadow-pink-200/100" onClick={handleClick}>
        <div className="h-2/3"><img src={cosplay.url} alt={cosplay.name} className="w-full h-full object-cover rounded-t-[1.5vw]"/></div>
        <div className="h-1/3">
          <h3>{cosplay.name}</h3>
          <p>{cosplay.ukuran}</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="cosplay-card-else" onClick={handleClick}>
        <div className="gambar-card"><img src={cosplay.url} alt={cosplay.name} /></div>
        <div className="deskripsi-card">
          <h3>{cosplay.name}</h3>
          <p>{cosplay.harga}</p>
        </div>
      </div>
    );
  }
}

export default CosplayCard