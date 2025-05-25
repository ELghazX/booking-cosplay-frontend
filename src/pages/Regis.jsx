import Inputan from "../Components/Inputan";
import api from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Regis() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", form);
            if (res.data.status === "true") {
                alert("Register sukses! Silakan login.");
                navigate(`/login`);
            } else {
                alert(res.data.message || "Register gagal!");
                setForm({ name: "", email: "", phone: "", password: "" }); // reset form
            }
        } catch (err) {
            alert("Register gagal! " + (err.response?.data?.message || err.message));
            setForm({ name: "", email: "", phone: "", password: "" }); // reset form
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
            <Inputan
                label="Nama"
                name="name"
                placeholder="Masukkan nama lengkap"
                type="text"
                onChange={handleChange}
                value={form.name}
            />
            <Inputan
                label="Email"
                name="email"
                placeholder="Masukkan email"
                type="email"
                onChange={handleChange}
                value={form.email}
            />
            <Inputan
                label="Phone"
                name="phone"
                placeholder="Masukkan phone"
                type="number"
                onChange={handleChange}
                value={form.phone}
            />
            <Inputan
                label="Password"
                name="password"
                placeholder="Masukkan password"
                type="password"
                onChange={handleChange}
                value={form.password}
            />
            <button type="submit" className="bg-[#C599B6] text-white px-4 py-2 rounded mt-4 w-full">Register</button>
        </form>
    );
}