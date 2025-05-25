import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import profileImg from "../assets/profile.png";
import MiniMenu from "./MiniMenu"; 

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    setShowMenu((prev) => !prev);
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
      <div className="place-self-right justify-self-end relative">
        {isLoggedIn ? (
          <>
            <img
              src={profileImg}
              alt="Profile"
              onClick={handleProfileClick}
              className="w-12 h-12 rounded-full border-2 border-[#C599B6] cursor-pointer object-cover transition-shadow transition ease-in-out duration-300 shadow-[0_0_10px_#C599B6] hover:shadow-[0_0_40px_#C899B6] hover:scale-105"
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 z-50">
                <MiniMenu />
              </div>
            )}
          </>
        ) : (
          <p
            className="px-5 py-3 bg-[#C599B6] text-[#FFF7F3] font-bold rounded hover:bg-[#A67A9E] transition-colors cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;