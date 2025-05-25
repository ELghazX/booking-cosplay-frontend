import rijal from "../assets/rijal tidur.jpg";

const DetailAccessory = ({ item }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={`/img/${item.imageUrl}`}
            alt={item.name}
            className="w-full rounded-lg shadow-lg"
            onError={(e) => {
              e.target.src = rijal;
            }}
          />
        </div>
        
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Kategori:</span> {item.category}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Harga per Hari:</span>{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.pricePerDay)}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Tipe:</span> {item.type}
            </p>
            {item.deleted && (
              <p className="text-red-500">Item ini telah dihapus</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccessory;