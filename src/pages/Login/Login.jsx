import { useState } from "react";
import pokedex_img from "../../assets/img/Pokedex.png";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userNameContext } from "../../context/UserNameContext";
import { useRef } from "react";

const Login = () =>{
    const navigate = useNavigate();
    const [trainerNameInut, setTrainerNameInut] = useState("");
    const {saveUserName} = useContext(userNameContext)
    const [nameError, setNameError] = useState("");
    const inputHasAlreadyTouched = useRef(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!nameError && inputHasAlreadyTouched.current == true){
            saveUserName(e.target[0].value)
            navigate("/pokedex")
            e.target[0].value = "";
        }
    }

    const handleOnchange = (e) =>{
        inputHasAlreadyTouched
        const name = e.target.value;
        if(!inputHasAlreadyTouched.current) inputHasAlreadyTouched.current =true;
        if(!name) setNameError("the name is empty")
        else if(/[^a-z]/i.test(name)) setNameError("only letters and spaces are allowed")
        else if(!/[a-z]{2,} ?$/.test(name)) setNameError("the name must have at least two letters")
        else setNameError("")

        setTrainerNameInut(name)

    }

    return(
    <>
        <div className="loginContainer">
            <div className="login_img">
                <img src={pokedex_img} alt="pokedex_img" />
            </div>
            <div className="trainerMessage">
             <h1 className="loginTitle">¡Hi trainer!</h1>
             <h2>To start, give me your name</h2>
            </div>

            <form onSubmit={handleSubmit} className="LoginForm">
                <p className="nameError">{nameError}</p>
                <div className="insideForm">
                <input type="text" name="trainerNameInput" onChange={handleOnchange}  value={trainerNameInut} placeholder="Your name..."/>
                <button type="submit">Start</button>
                </div>
            </form>


        </div>
        <div className="loginFooterContainer">
                <div className="redDivlogin">
                </div>
                <div className="blackDivlogin">
                </div>
                <div className="ballDivlogin">
                    <div className="insideBallDivlogin">
                    </div>
                </div>
            </div>
    </>)
}
export default Login;