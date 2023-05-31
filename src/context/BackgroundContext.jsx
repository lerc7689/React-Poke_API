import { useState } from "react";
import { createContext } from "react";

export const BackgroundContext = createContext(false);

export const BackgroundProvider = ({children}) =>{
    const [changeBackground, setChangeBackground] = useState(false);

    const changeBackgroundFN = () =>{
        if(changeBackground) setChangeBackground(false)
        else setChangeBackground(true)
    }
   
    const value = {changeBackground, changeBackgroundFN};

    return(
        <BackgroundContext.Provider value={value}>
            {children}
        </BackgroundContext.Provider>
    )

}