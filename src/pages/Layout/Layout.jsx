import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { BackgroundContext } from "../../context/BackgroundContext";

const Layout = () =>{
   const {changeBackground} = useContext(BackgroundContext)
   
return(
<>

    <Header/>

    <body style={{background:changeBackground ? "rgb(34, 34, 34)" : "white"}}>
        <Outlet/>
    </body>
    
    <Footer/>
</>)
}

export default Layout;