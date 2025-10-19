import "./Header.css";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import pokedex_img from "../../assets/img/Pokedex.png";
import { useContext } from "react";
import { userNameContext } from "../../context/UserNameContext";
 
const Header = () => {
    const {removeUserName} = useContext(userNameContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    
    const logout = () =>{
        removeUserName();
        navigate("/");
      }
    return(
    <>
    <header>
        <div className="redDiv">
        {location.pathname.startsWith("/pokedex/") && (
            <NavLink className={"nav-back-btn"} to={"/pokedex"}>Atrás</NavLink>
        )}
        <button onClick={logout} className="logoutBtn">Logout </button>
        </div>
        <div className="blackDiv">
        </div>
        <div className="ballDiv">
            <div className="insideBallDiv">
            </div>
        </div>
        <div className="imageContainer"> <img src={pokedex_img} alt="" /></div>
        </header>   
    </>);
}

export default Header;