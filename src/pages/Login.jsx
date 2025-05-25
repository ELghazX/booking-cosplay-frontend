import { FaEnvelope, FaLock } from "react-icons/fa";
import illustration from "../assets/Frame 33.png";
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", form);
      if (res.data.status === true) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", res.data.data.role);
        localStorage.setItem("userId", res.data.data.id);
        localStorage.setItem("userName", res.data.data.name);

        if (res.data.data.role === "ADMIN") {
          alert("Login admin sukses!");
          navigate("/admin");
        } else {
          alert("Login user sukses!");
          navigate("/koleksi");
        }
      } else {
        setError(res.data.message || "Login gagal!");
        localStorage.setItem("isLoggedIn", "false");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal! " + err.message);
      localStorage.setItem("isLoggedIn", "false");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#FFF3EF] flex items-center justify-center">
      <div className="w-[1466px] h-[796px] bg-[#FBD1C5] rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Kiri - Gambar/Ilustrasi */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={illustration}
            alt="Illustration"
            className="w-[80%] max-w-[600px]"
          />
        </div>

        {/* Kanan - Form Login */}
        <div className="w-1/2 flex flex-col justify-center px-14">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">LOGIN</h2>

          <form className="space-y-6">
            {/* Email */}
            <div className="flex items-center bg-white px-4 py-3 rounded-md shadow-sm">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white px-4 py-3 rounded-md shadow-sm">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="****************"
                className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* Tombol */}
            <button
              type="submit"
              className="w-full bg-[#C199B3] text-white font-semibold py-3 rounded-md hover:bg-[#b58fa6] transition"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
