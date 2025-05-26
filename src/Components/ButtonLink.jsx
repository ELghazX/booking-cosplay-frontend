import { Link } from "react-router";

function ButtonLink({ children, href, className }) {
    return (
        <>
            <button>
                <Link to="/Tambahaksesoris">Sewa Sekarang</Link>
            </button>
        </>
    );    
}

export default ButtonLink;