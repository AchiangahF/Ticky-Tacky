import { useNavigate } from "react-router-dom"

function Header(){

    const navigate = useNavigate();
    
    return(
        <section className="w-100 text-end p-3 border-bottom">
            <button className="btn btn-danger" onClick={() => navigate("/")}>Logout</button>
        </section>
    )
}

export default Header