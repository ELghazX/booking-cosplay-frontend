import React, { useState } from "react";

function Userprofile() {
  const [fileName, setFileName] = useState("Belum ada file");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Foto Profil */}
        <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0 md:mr-6">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Profile"
            className="w-[200px] h-[270px] object-cover rounded-lg shadow-md"
          />

          {/* Tombol Upload */}
          <label
            htmlFor="file-upload"
            className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg cursor-pointer transition"
          >
            Pilih Foto
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={(e) =>
              setFileName(e.target.files[0] ? e.target.files[0].name : "Belum ada file")
            }
          />
          <p className="text-sm text-gray-600 mt-2">{fileName}</p>
        </div>

        {/* Informasi Akun */}
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Informasi Akun</h2>
          <form className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-700 text-white rounded-lg p-2 hover:bg-purple-800 transition"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
