import { useContext } from "react";
import { userNameContext } from "../../context/UserNameContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const {userName} = useContext(userNameContext);

    if(userName) return <>{children}</>
    else return <Navigate to="/"/>
}

export default ProtectedRoute;