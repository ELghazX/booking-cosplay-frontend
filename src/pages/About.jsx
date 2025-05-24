export default function Abot() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#FFF7F3]">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-[#C599B6]">Detail Produk</h1>
            <div className="mt-4">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-auto rounded-lg" />
            </div>
            <div className="mt-4">
            <h2 className="text-xl font-semibold text-[#C599B6]">Nama Produk</h2>
            <p className="text-gray-700">Deskripsi produk yang sangat menarik dan informatif.</p>
            </div>
        </div>
        </div>
    );
}