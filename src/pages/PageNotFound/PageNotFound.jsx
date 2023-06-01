import imgNotFound from "../../assets/img/404.jpg"
import "./PageNotFound.css"
const PageNotFound = () =>{
    return(<>
            <div className="pageNotFound">
                <div className="imgContainerNotFound">
                    <img src={imgNotFound} alt="" />
                </div>
            </div>
    </>)
}
export default PageNotFound;