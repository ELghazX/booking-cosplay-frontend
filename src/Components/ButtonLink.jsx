import { useNavigate } from "react-router-dom";

function ButtonLink({ nama, path, className = "" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <div className={className} onClick={handleClick}>
            <p>{nama}</p>
        </div>
    );
}

export default ButtonLink;