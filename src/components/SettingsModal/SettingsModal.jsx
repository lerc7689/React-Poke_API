import { useState } from "react"
import { BackgroundContext } from "../../context/BackgroundContext";
import { useContext } from "react";
import "./SettingsModal.css"

const SettingsModalComp= ({setQuatityPagination}) =>{
    const [isSettingModalVisible, setIsSettingModalVisible] = useState(false)
    const {changeBackground, changeBackgroundFN} = useContext(BackgroundContext)

return(<>

<button className="settingBtn" onClick={()=> setIsSettingModalVisible(!isSettingModalVisible)}>Settings </button>

    {/* {isSettingModalVisible && */}
        <div className={`settingModal ${isSettingModalVisible ? "show" : ""}`}>
              <div className="selectContainer">
              <select name="select" onChange={(e)=>  {if(Number(e.target.value))setQuatityPagination(e.target.value)}}>
              <option selected>Change quantity per page</option>
                  <option >20</option>
                  <option >30</option>
                  <option >40</option>
              </select>
              </div>
  
              <p>Dark/Normal mode switch</p>
              <div className="switchContainer">
                <button 
                className="switchInside" 
                onClick={()=>changeBackgroundFN()}
                // style={{right:changeBackground && 0, left:changeBackground == false && 0}}
                style={{
                    transform: changeBackground ? "translateX(-20px)" : "translateX(0)",
                }}
                ></button>
            </div>
      </div>
    {/* }  */}
</>)
}

export default SettingsModalComp;