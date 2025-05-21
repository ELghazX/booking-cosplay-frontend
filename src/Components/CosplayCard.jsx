function CosplayCard({ cosplay }) {
  const handleClick = () => {
    alert(`You clicked on ${cosplay.name}`);
  };

  

  return (
    <div className="cosplay-card">
      <div className="gambar-card"><img src={cosplay.url} alt={cosplay.name} /></div>
      <div className="deskripsi-card">
        <h3>{cosplay.name}</h3>
        <p>{cosplay.harga}</p>
        <p>{cosplay.ukuran}</p>
      </div>
    </div>
  );
}

export default CosplayCard