import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import illustration from "../assets/foto.png";
import api from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Regis() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await api.post("/auth/register", form);
        try {
            if (res.data.status == true) {
                setForm({ name: "", email: "", phone: "", password: "" }); 
                Swal.fire({
                    title: "Berhasil!",
                    text: res.data.message,
                    icon: "success"
                });

                navigate("/login");
            } else {
                Swal.fire({
                    title: "Gagal!",
                    text: res.data.message,
                    icon: "error"
                });
            }
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: err?.response?.data?.message || err.message || "Terjadi kesalahan.",
                icon: "error"
            });
        }
    };

    return (
        <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-[1466px] h-[796px] bg-[#F9C9BB] rounded-2xl shadow-lg flex overflow-hidden">
            {/* Kolom Kiri: Form */}
            <div className="w-1/2 p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-black mb-10 text-center">REGISTER</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Nama */}
                <div className="flex items-center bg-white px-4 py-3 rounded-md">
                <FaUser className="text-gray-400 mr-3" />
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jahron Al-Syukri"
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                />
                </div>

                {/* Telepon */}
                <div className="flex items-center bg-white px-4 py-3 rounded-md">
                <FaPhone className="text-gray-400 mr-3" />
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0812 0896 0853"
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                />
                </div>

                {/* Email */}
                <div className="flex items-center bg-white px-4 py-3 rounded-md">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                />
                </div>

                {/* Password */}
                <div className="flex items-center bg-white px-4 py-3 rounded-md">
                <FaLock className="text-gray-400 mr-3" />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="************"
                    className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    required
                />
                </div>

                {/* Tombol Register */}
                <button
                type="submit"
                className="w-full mt-4 bg-[#C199B3] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#b088a8] transition"
                >
                REGISTER
                </button>
            </form>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-full">
            <img
                src={illustration}
                alt="Illustration"
                className="w-[80%] max-w-[600px]"
            />
            </div>
        </div>
        </div>
    );
}
export default Regis;