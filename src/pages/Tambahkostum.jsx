import { useState } from "react";
import {
  FaPhoneAlt, FaUser, FaTshirt, FaMoneyBillWave,
  FaImage
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Swal from "sweetalert2";
import api from "../api/axios";

export default function Tambahkostum() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [form, setForm] = useState({
    nama: "",
    harga: "",
    karakter: "",
    gambar: null,
  });
  const name = localStorage.getItem("name");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setForm(f => ({ ...f, gambar: file }));
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

  const hargaInt = parseInt(form.harga, 10);
  if (isNaN(hargaInt)) {
    Swal.fire("Gagal!", "Harga harus berupa angka!", "error");
    return;
  }

  if (
    !form.nama ||
    !form.harga ||
    !selectedSize ||
    !selectedGender ||
    !form.karakter ||
    !form.gambar
  ) {
    Swal.fire("Gagal!", "Semua field wajib diisi!", "error");
    return;
  }

  try {
    // Upload gambar ke Cloudinary
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", form.gambar);
    cloudinaryData.append("upload_preset", "unsigned_preset"); 

    const uploadRes = await fetch("https://api.cloudinary.com/v1_1/dqbfizrkk/image/upload", {
      method: "POST",
      body: cloudinaryData
    });

    const uploadResult = await uploadRes.json();
    if (!uploadResult.secure_url) {
      throw new Error("Gagal upload gambar ke Cloudinary");
    }

    // Kirim data ke backend
    const data = {
      name: form.nama,
      pricePerDay: hargaInt,
      size: selectedSize,
      gender: selectedGender,
      characterName: form.karakter,
      imageUrl: uploadResult.secure_url
    };

    const res = await api.post("/items/create-costume", data);

    if (res.data.status) {
      Swal.fire("Berhasil!", res.data.message, "success").then(() => {
        navigate("/item");
      });
    } else {
      Swal.fire("Gagal!", res.data.message || "Gagal menambah kostum", "error");
    }
  } catch (err) {
    Swal.fire("Gagal!", err.message || "Gagal menambah kostum", "error");
  }
};

  return (
    <div className="flex ">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, {name}</h2>
            <p className="text-sm text-gray-600">{new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <button className="bg-[#D48DB3] text-white rounded px-4 py-2 text-sm">Logout</button>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-xl">Tambah Kostum</h3>
              <p className="text-sm text-gray-500">Menampilkan Detail</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-sm font-medium">Nama item</label>
                  <div className="flex items-center border rounded px-4 py-3">
                    <FaTshirt className="text-gray-400 mr-2" />
                    <input
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      placeholder="Kostum Walid"
                      className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Harga item perhari</label>
                  <div className="flex items-center border rounded px-4 py-3">
                    <FaMoneyBillWave className="text-gray-400 mr-2" />
                    <input
                      name="harga"
                      value={form.harga}
                      onChange={handleChange}
                      placeholder="20000"
                      className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Dropdown Size */}
                <div>
                  <label className="text-sm font-medium">Size</label>
                  <div className="flex items-center border rounded px-4 py-3">
                    <FaUser className="text-gray-400 mr-2" />
                    <select
                      value={selectedSize}
                      onChange={e => setSelectedSize(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm text-gray-700"
                    >
                      <option value="">Pilih Ukuran</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Nama Karakter</label>
                  <div className="flex items-center border rounded px-4 py-3">
                    <FaTshirt className="text-gray-400 mr-2" />
                    <input
                      name="karakter"
                      value={form.karakter}
                      onChange={handleChange}
                      placeholder="Walid"
                      className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Dropdown Gender */}
                <div>
                  <label className="text-sm font-medium">Gender</label>
                  <div className="flex items-center border rounded px-4 py-3">
                    <FaMoneyBillWave className="text-gray-400 mr-2" />
                    <select
                      value={selectedGender}
                      onChange={e => setSelectedGender(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm text-gray-700"
                    >
                      <option value="">Pilih Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                {/* Upload Gambar */}
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
                onClick={() => navigate("/item")}
                className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
                Kembali
              </button>
              <button
                type="submit"
                className="bg-[#F4A1B2] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
                Tambah Item
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}