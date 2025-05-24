import { Link } from "react-router";

function ButtonLink({ children, href, className }) {
    return (
        <>
            <button>
                <Link to="/Login">Sewa Sekarang</Link>
            </button>
        </>
    );    
}

export default ButtonLink;