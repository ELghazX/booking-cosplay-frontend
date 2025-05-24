import { useNavigate } from "react-router-dom";
import { Link } from "react-router"
function Navbar () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/login`);
  };

  return (
    <div className="sticky top-0 h-20 grid grid-cols-3 items-center justify-between px-[5%] shadow-[0_0_10px_#C599B6] bg-[#FFF7F3] text-[#C599B6] z-1">
      <div className="place-self-left">
        <Link to="/" className="text-5xl font-bold text-[#C599B6] no-underline">ChocoMintCos</Link>
      </div>
      <ul className="place-self-center flex items-center list-none p-0">
        <li><Link to="/" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">Beranda</Link></li>
        <li><Link to="/koleksi" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">Koleksi</Link></li>
        <li><Link to="/about" className="text-[#C599B6] text-[1.3em] no-underline text-center mx-2.5">About</Link></li>
      </ul>
      <div className="place-self-right justify-self-end" onClick={handleClick}>
        <p className="px-5 py-3 bg-[#C599B6] text-[#FFF7F3] font-bold rounded hover:bg-[#A67A9E] transition-colors">Login</p>
      </div>
    </div>
  );
}

export default Navbar;