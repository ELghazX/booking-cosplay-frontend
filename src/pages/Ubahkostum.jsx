import { useState, useEffect } from "react";
import {
  FaUser, FaTshirt, FaMoneyBillWave, FaImage
} from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import api from "../api/axios";
import Swal from "sweetalert2";

export default function Ubahkostum() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    pricePerDay: "",
    size: "",
    characterName: "",
    gender: "",
    image: null,
  });

  useEffect(() => {
    // Ambil data kostum berdasarkan id
    const fetchData = async () => {
      try {
        const res = await api.get(`/items//update-costume/${id}`);
        if (res.data.status) {
          setForm({
            name: res.data.data.name,
            pricePerDay: res.data.data.pricePerDay,
            size: res.data.data.size,
            characterName: res.data.data.characterName,
            gender: res.data.data.gender,
            image: null,
          });
          setPreview(res.data.data.imageUrl); // jika ada url gambar
        }
      } catch (err) {
        Swal.fire("Gagal!", "Gagal mengambil data kostum", "error");
      }
    };
    fetchData();
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setForm(f => ({ ...f, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("pricePerDay", form.pricePerDay);
      data.append("size", form.size);
      data.append("characterName", form.characterName);
      data.append("gender", form.gender);
      if (form.image) data.append("image", form.image);

      const res = await api.put(`/items/update-costume/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (res.data.status) {
        Swal.fire("Berhasil!", "Kostum berhasil diubah.", "success").then(() => {
          navigate("/item");
        });
      } else {
        Swal.fire("Gagal!", res.data.message || "Gagal mengubah kostum", "error");
      }
    } catch (err) {
      Swal.fire("Gagal!", err.response?.data?.message || "Gagal mengubah kostum", "error");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="text-sm font-medium">Nama Kostum</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaTshirt className="text-gray-400 mr-2" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama Kostum"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Harga per Hari</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaMoneyBillWave className="text-gray-400 mr-2" />
                  <input
                    name="pricePerDay"
                    value={form.pricePerDay}
                    onChange={handleChange}
                    placeholder="12000"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Ukuran</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <select
                    name="size"
                    value={form.size}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="">Pilih Ukuran</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Nama Karakter</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    name="characterName"
                    value={form.characterName}
                    onChange={handleChange}
                    placeholder="Nama Karakter"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Gender</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="">Pilih Gender</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Gambar</label>
                <div className="flex items-center border rounded px-4 py-3 gap-4">
                  <FaImage className="text-gray-400" />
                  <label className="inline-flex items-center px-4 py-1 bg-[#D48DB3] text-white rounded-md cursor-pointer text-sm">
                    Pilih Gambar
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {fileName && (
                    <p className="text-sm text-gray-600">{fileName}</p>
                  )}
                </div>
                {preview && (
                  <img src={preview} alt="Preview" className="mt-4 max-w-xs rounded-md shadow" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
            >
              Kembali
            </button>
            <button type="submit" className="bg-[#F4A1B2] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
              Ubah Kostum
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}