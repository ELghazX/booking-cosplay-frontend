function CosplayCard({ cosplay }) {
  return (
    <div className="cosplay-card">
      <img src={cosplay.url} alt={cosplay.name} />
      <h3>{cosplay.name}</h3>
      <p>{cosplay.description}</p>
    </div>
  );
}

export default CosplayCard