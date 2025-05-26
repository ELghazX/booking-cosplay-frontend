import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Regis() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama lengkap harus diisi";
    if (!form.email.trim()) newErrors.email = "Email harus diisi";
    if (!form.phone.trim()) newErrors.phone = "Nomor telepon harus diisi";
    if (!form.password.trim()) newErrors.password = "Password harus diisi";
    return newErrors;
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
      const res = await api.post("/auth/register", form);
      if (res.data.status === true) {
        alert("Register sukses! Silakan login.");
        navigate("/login");
      } else {
        setApiError(res.data.message || "Register gagal!");
      }
    } catch (err) {
      setApiError(err.response?.data?.message || "Register gagal! " + err.message);
    }
  };
    return (
    <div className="min-h-screen bg-[#FFF7F3] flex items-center justify-center">
        <div className="bg-[#FAD0C4] rounded-2xl shadow-lg flex overflow-hidden p-6">
            {/* Left Panel - Registration Form */}
            <div className="w-1/2 p-6 flex flex-col justify-center mr-12">
            <h2 className="text-3xl font-bold mb-8 text-center">REGISTER</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
                {apiError && <div className="text-red-500 text-sm text-center">{apiError}</div>}

                <div>
                <label className="text-sm font-medium">Nama Lengkap</label>
                <div className="mt-1 relative">
                    <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jahron Al-Syukri"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                    />
                    <div className="text-red-500 text-sm mt-1 min-h-[20px]">
                        {errors.name || ""}
                    </div>
                </div>
                </div>

                <div>
                <label className="text-sm font-medium">Email</label>
                <div className="mt-1 relative">
                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jahron@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                    />
                    <div className="text-red-500 text-sm mt-1 min-h-[20px]">
                        {errors.email || ""}
                    </div>
                </div>
                </div>

                <div>
                <label className="text-sm font-medium">Nomor Telepon</label>
                <div className="mt-1 relative">
                    <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="089608560823"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                    />
                    <div className="text-red-500 text-sm mt-1 min-h-[20px]">
                        {errors.phone || ""}
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
                    Sudah punya akun?
                    <Link
                    to={"/login"}
                    >
                        <span className="text-sm text-blue-500 hover:underline text-center">
                            Login sekarang!
                        </span>
                    </Link>
                </p>
                
                <button
                type="submit"
                className="block text-center w-full py-2 bg-[#C599B6] text-white font-semibold rounded-md hover:bg-[#B386A3] transition-colors"
                >
                REGISTER
                </button>
                
                <Link
                to={"/"}
                className="block text-center w-full py-2 bg-[#C9B6C2] text-white font-semibold rounded-md hover:bg-[#B8A5B1] transition-colors"
                >
                Kembali ke Halaman Utama
                </Link>
            </form>
            </div>

            {/* Right Panel - Illustration */}
            <div className="w-1/2 p-8 flex items-center justify-center bg-[#FECFC3] ml-12">
            <img
                src="/register-illust.png" // You might want to use a different image for registration
                alt="Fashion illustration"
                className="max-w-full max-h-full object-contain"
            />
            </div>
        </div>
        </div>
    );
}
export default Regis;