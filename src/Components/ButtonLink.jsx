import { Link } from "react-router";

function ButtonLink({ children, href, className }) {
    return (
        <>
            <button>
                <Link to="/login">Button</Link>
            </button>
        </>
    );    
}

export default ButtonLink;