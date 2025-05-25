import Sidebar from "../Components/Sidebar";

export default function Admin() {
    // Ambil nama admin dari localStorage
    const adminName = localStorage.getItem("name") || "Admin";

    return (
        <>  
            <Sidebar />
            <div className="flex flex-col items-center justify-center h-screen bg-[#FFF7F3]">
                <h1 className="text-4xl font-bold text-[#C599B6]">
                    Selamat Datang, {adminName}!
                </h1>
                <p className="mt-4 text-lg text-[#C599B6]">
                    Anda login sebagai admin. Silakan kelola data produk dan booking di sini.
                </p>
            </div>
        </>
    );
}