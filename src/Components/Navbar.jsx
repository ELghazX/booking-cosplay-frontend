import { Link } from "react-router"
function Navbar () {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <h1>ChocoMintCos</h1>
      </div>
      <ul className="navbarMenu">
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/kategori">Kategori</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="tambahannav">
        <h1>ChocoMintCos</h1>
      </div>
    </div>
  );
}

export default Navbar;