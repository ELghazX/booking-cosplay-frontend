import { Link } from "react-router";

function ButtonLink({ children, href, className }) {
    return (
        <>
            <button>
                <Link to="/Editbooking">Sewa Sekarang</Link>
            </button>
        </>
    );    
}

export default ButtonLink;