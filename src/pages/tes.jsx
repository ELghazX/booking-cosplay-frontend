import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Tes() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/items")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Terjadi error saat mengambil data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Items</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="list-disc pl-5">
          {items.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}