import { FaEnvelope, FaLock } from "react-icons/fa";
import illustration from "../assets/Frame 33.png";
import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email harus diisi";
    if (!form.password.trim()) newErrors.password = "Password harus diisi";
    return newErrors;
  };  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setApiError("");
    try {
      const res = await api.post("/auth/login", form);
      if (res.data.status === true) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", res.data.data.role);
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("phone", res.data.data.phone);

        if (res.data.data.role === "ADMIN") {
          Swal.fire({
            title: "Berhasil!",
            text: res.data.message,
            icon: "success"
          });
          navigate("/item");
        } else {
          Swal.fire({
            title: "Berhasil!",
            text: res.data.message,
            icon: "success"
          });
          navigate("/koleksi");
        }
      } else {
        Swal.fire({
            title: "Gagal!",
            text: res.data.message,
            icon: "error"
          });
        localStorage.setItem("isLoggedIn", "false");
      }
    } catch (err) {
      Swal.fire({
            title: "Error!",
            text: err.response?.data?.message || "Terjadi kesalahan saat login",
            icon: "error"
          });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7F3] flex items-center justify-center">
      <div className="bg-[#FAD0C4] rounded-2xl shadow-lg flex overflow-hidden p-8">
        {/* Left Panel - Illustration */}
        <div className="w-1/2 p-8 flex items-center justify-center bg-[#FECFC3] ml-8">
          <img
            src="/login-illust.png"
            alt="Fashion illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center ml-8">
          <h2 className="text-3xl font-bold mb-8 text-center">LOGIN</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white" // Added bg-white
                />
                <div className="text-red-500 text-sm mt-1 min-h-[20px]">
                  {errors.email || ""}
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                />
                <div className="text-red-500 text-sm mt-1 min-h-[20px]">
                  {errors.password || ""}
                </div>
              </div>
            </div>
            <p className="text-sm text-center py-2">
              Belum punya akun? 
              <Link
                to={"/register"}
              >
                <span className="text-sm text-blue-500 hover:underline text-center py2">
                  Daftar sekarang!
                </span>
              </Link>
            </p>
            <button
              type="submit"
              className="block text-center w-full py-2 bg-[#C599B6] text-white font-semibold rounded-md hover:bg-[#B386A3] transition-colors"
            >
              LOGIN
            </button>
            <Link
              to={"/"}
              className="block text-center w-full py-2 bg-[#C9B6C2] text-white font-semibold rounded-md hover:bg-[#B8A5B1] transition-colors"
            >
              Kembali ke Halaman Utama
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
