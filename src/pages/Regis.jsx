function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF5F0]">
      <div className="flex bg-[#F9C9B8] px-14 py-10 rounded-lg shadow-md items-center space-x-12">
        <div className="flex flex-col items-center w-72">
          <h2 className="text-black font-bold text-xl mb-6 text-center">REGISTER</h2>

          <input
            type="text"
            placeholder="Email"
            className="w-full mb-4 p-2 bg-white border-none rounded shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 bg-white border-none rounded shadow-sm"
          />
          <button className="w-full bg-[#B679B1] text-white py-2 rounded-md hover:bg-[#a765a4]">
            REGISTER
          </button>
        </div>

        {/* Logo (di kanan) */}
        <div className="bg-white p-6 rounded">
          <img
            src="/cosplay-logo.png" // Pastikan file ini ada di folder public/
            alt="Cosplay Logo"
            className="w-32 h-32 object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default Register;
