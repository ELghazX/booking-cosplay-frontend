import { useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash, FaPlus, FaHatCowboy, FaTshirt } from 'react-icons/fa';
import Sidebar from "../Components/Sidebar";
import { useNavigate } from 'react-router-dom';
import api from "../api/axios";
import Swal from "sweetalert2";

export default function Item() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [filterKategori, setFilterKategori] = useState("ALL");
  const name = localStorage.getItem("name");
  const handleView = (id) => {
    navigate(`/detail-item/${id}`);
  };

  const handleEditKostum = (item) => {
    navigate(`/ubah-kostum/${item.id}`);
  }
  const handleEditAksesoris = (item) => {
    navigate(`/ubah-aksesoris/${item.id}`);
  }

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Yakin hapus item ini?",
      text: "Item akan disembunyikan dari daftar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });
    if (confirm.isConfirmed) {
      try {
        await api.patch(`/items/${id}`, { deleted: true });
        setItems(items => items.map(item => item.id === id ? { ...item, deleted: true } : item));
        Swal.fire("Berhasil!", "Item telah dihapus.", "success");
      } catch (err) {
        Swal.fire("Gagal!", err.response?.data?.message || "Terjadi kesalahan.", "error");
      }
    }
  };
  

  const DATA_PER_PAGE = 10;

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        // Ganti endpoint sesuai API Anda
        const res = await api.get("/items");
        if (res.data.status) {
          setItems(res.data.data);
          setTotalData(res.data.data.length);
          setError("");
        } else {
          setItems([]);
          setTotalData(0);
          setError(res.data.message || "Tidak ada data");
        }
      } catch (err) {
        setItems([]);
        setTotalData(0);
        setError(err.response?.data?.message || "Terjadi kesalahan");
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  
  const filteredItems = items
    .filter(item => !item.deleted)
    .filter(item => filterKategori === "ALL" ? true : item.category == filterKategori);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / DATA_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * DATA_PER_PAGE,
    currentPage * DATA_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="flex ">
      <Sidebar />

      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Selamat Datang, {name}</h2>
            <p className="text-sm text-gray-600">{new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <button className="bg-[#D48DB3] text-white px-4 py-2 rounded">Logout</button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow p-6 relative">
          {/* Tombol Tambah */}
          <div className="absolute right-6 top-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-[#C48DB3] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#B47DA3]"
              >
                <FaPlus /> Tambah
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-[#FFD9CF] border border-pink-300 rounded-md shadow-md z-10 w-40">
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#F5CFC3]" onClick={() => navigate("/tambah-aksesoris")}>
                    <FaHatCowboy /> Accessory
                  </button>
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[#F5CFC3] border-t border-pink-300"  onClick={() => navigate("/tambah-kostum")}>
                    <FaTshirt /> Costume
                  </button>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-base font-semibold mb-1">List Item</h3>
          <p className="text-sm text-gray-500 mb-4">
            Menampilkan Item di Sistem ChocomintCos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Kategori</label>
              <select
                className="border rounded px-3 py-2 w-full text-sm text-gray-700"
                value={filterKategori}
                onChange={e => { setFilterKategori(e.target.value)}}
              >
                <option value="ALL">Semua</option>
                <option value="costume">Costume</option>
                <option value="accessory">Accessory</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-8">Memuat data...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : paginatedItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Tidak ada data</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#F7F7F7] text-gray-700 font-medium">
                      <th className="py-3 px-4">No</th>
                      <th className="py-3 px-4">Id Item</th>
                      <th className="py-3 px-4">Nama Item</th>
                      <th className="py-3 px-4">Harga per hari</th>
                      <th className="py-3 px-4">Kategori</th>
                      <th className="py-3 px-4">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItems.map((item, index,) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{(currentPage - 1) * DATA_PER_PAGE + index + 1}</td>
                        <td className="py-2 px-4">{item.id}</td>
                        <td className="py-2 px-4">{item.name}</td>
                        <td className="py-2 px-4">{item.pricePerDay?.toLocaleString()}</td>
                        <td className="py-2 px-4">{item.category}</td>
                        <td className="py-2 px-4 flex gap-2">
                          <button className="bg-sky-400 text-white p-2 rounded" onClick={() => handleView(item.id)}><FaEye /></button>
                          <button
                            className="bg-blue-600 text-white p-2 rounded"
                            onClick={() => {
                              if (item.category === "costume") {
                                handleEditKostum(item);
                              } else if (item.category === "accessory") {
                                handleEditAksesoris(item);
                              }
                            }}
                          >
                            <FaEdit />
                          </button>
                          <button className="bg-red-600 text-white p-2 rounded" onClick={() => handleDelete(item.id)}><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div>
                  Tampilan {paginatedItems.length} dari {filteredItems.length} data
                </div>
                <div className="flex items-center gap-1">
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(1)} disabled={currentPage === 1}>Awal</button>
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-[#D48DB3] text-white" : ""}`}
                      onClick={() => goToPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
                  <button className="px-3 py-1 border rounded" onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>Akhir</button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}