import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
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
    <div className="min-h-screen flex items-center justify-center bg-[#FFF5F0]">
      <div className="flex bg-[#F9C9B8] px-14 py-10 rounded-lg shadow-md items-center space-x-12">
        <div className="bg-white p-6 rounded">
          <img
            src="/cosplay-logo.png"
            alt="Cosplay Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        <form className="flex flex-col items-center w-72" onSubmit={handleSubmit}>
          <h2 className="text-black font-bold text-xl mb-6 text-center">LOGIN</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-4 p-2 bg-white border-none rounded shadow-sm"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-6 p-2 bg-white border-none rounded shadow-sm"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#B679B1] text-white py-2 rounded-md hover:bg-[#a765a4]"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;