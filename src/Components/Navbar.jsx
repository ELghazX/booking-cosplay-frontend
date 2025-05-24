import { Link } from "react-router"
function Navbar () {
  return (
    <div className="h-20 flex flex-row items-center justify-between px-[5%] shadow-[0_0_10px_#C599B6] bg-[#FFF7F3] text-[#C599B6] z-10">
      <div className="text-[1.6em] font-bold">
        <h1><Link to="/" className="text-[#C599B6] no-underline">ChocoMintCos</Link></h1>
      </div>
      <ul className="flex items-center list-none p-0">
        <li><Link to="/" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">Beranda</Link></li>
        <li><Link to="/koleksi" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">Koleksi</Link></li>
        <li><Link to="/about" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">About</Link></li>
      </ul>
      <div className="text-[1.6em] text-[#FFF7F3]">
        <h1>ChocoMintCos</h1>
      </div>
    </div>
  );
}

export default Navbar;