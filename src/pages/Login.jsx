import { FaEnvelope, FaLock } from "react-icons/fa";
import illustration from "../assets/Frame 33.png"; // Ganti sesuai path gambar kamu

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F2] flex items-center justify-center">
      <div
        className="bg-[#FACCC8] rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between overflow-hidden"
        style={{ width: "1466px", height: "796px" }}
      >
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-full">
          <img
            src={illustration}
            alt="Illustration"
            className="w-[80%] max-w-[400px]"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 px-16">
          <h2 className="text-3xl font-bold text-center mb-8">LOGIN</h2>
          <form className="space-y-6">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#C99EBF] text-white font-semibold py-2 rounded-md hover:bg-[#b987ac] transition"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
