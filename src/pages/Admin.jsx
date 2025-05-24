import Sidebar from "../Components/Sidebar";

export default function Admin() {
    return (
        <>  
            <Sidebar />
            <div className="flex flex-col items-center justify-center h-screen bg-[#FFF7F3]">
                <h1 className="text-4xl font-bold text-[#C599B6]">Detail Produk</h1>
                <p className="mt-4 text-lg text-[#C599B6]">Informasi lebih lanjut tentang produk ini.</p>
            </div>
        </>
    );
}