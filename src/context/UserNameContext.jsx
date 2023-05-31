import { useState } from "react";
import { createContext } from "react";

export const userNameContext = createContext("");

export const UserNameProvider = ({children}) =>{
    const [userName, setUserName] = useState(localStorage.getItem("userName"));

    const saveUserName = (newUserName) => {
        setUserName(newUserName);
        localStorage.setItem("userName", newUserName)
    }
    const removeUserName = ()=> {
        setUserName("");
        localStorage.removeItem("userName")
    }
    const value = {userName, saveUserName, removeUserName};

    return(
        <userNameContext.Provider value={value}>
            {children}
        </userNameContext.Provider>
    )

}