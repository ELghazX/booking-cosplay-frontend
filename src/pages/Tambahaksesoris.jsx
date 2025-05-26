import { useState } from "react";
import {
  FaPhoneAlt, FaUser, FaTshirt, FaMoneyBillWave,
  FaImage
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Tambahaksesoris() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FFF8F5] font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-64 bg-[#FBD7CF] p-6 flex flex-col text-black">
        <h1 className="text-[#D48DB3] font-bold text-xl mb-8 text-center">ChocoMintCos</h1>
        <div className="font-bold text-xs text-gray-600 uppercase mb-4">Dashboard</div>
        <nav className="space-y-4">
          <div className="flex items-center gap-2 text-black"><FaPhoneAlt className="w-4 h-4" /><span>Pending Booking</span></div>
          <div className="flex items-center gap-2 text-black"><FaPhoneAlt className="w-4 h-4" /><span>Confirmed Booking</span></div>
          <div className="flex items-center gap-2 text-black"><FaPhoneAlt className="w-4 h-4" /><span>Cancelled Booking</span></div>
          <div className="flex items-center gap-2 text-black"><FaPhoneAlt className="w-4 h-4" /><span>Booking History</span></div>
          <div className="mt-6 text-xs font-bold text-gray-600 uppercase">Master Data</div>
          <div className="flex items-center gap-2 text-black"><FaTshirt className="w-4 h-4" /><span>Item</span></div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, Raja Jawa</h2>
            <p className="text-sm text-gray-600">Selasa, 18 Mei 2025</p>
          </div>
          <button className="bg-[#D48DB3] text-white rounded px-4 py-2 text-sm">Logout</button>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 w-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-xl">Tambah Aksesoris</h3>
              <p className="text-sm text-gray-500">Menampilkan Detail</p>
            </div>
          </div>

          <div className="space-y-6">

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="text-sm font-medium">Nama item</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaTshirt className="text-gray-400 mr-2" />
                  <input
                    placeholder="Kostum Walid"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Harga item perhari</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaPhoneAlt className="text-gray-400 mr-2" />
                  <input
                    placeholder="20000"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Dropdown tipe */}
              <div>
                <label className="text-sm font-medium">Size</label>
                <div className="flex items-center border rounded px-4 py-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  >
                    <option value="">Pilih Tipe</option>
                    <option value="S">Senjata</option>
                    <option value="M">Kepala</option>
                    <option value="L">Perhiasan</option>
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
              onClick={() => navigate(-1)}
              className="bg-[#D48DB3] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2"
            >
              Kembali
            </button>
            <button className="bg-[#F4A1B2] text-white px-6 py-2 rounded-md text-sm flex items-center gap-2">
              Tambah Item
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
