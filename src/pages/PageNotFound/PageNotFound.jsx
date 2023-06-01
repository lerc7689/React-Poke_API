import imgNotFound from "../../assets/img/404.jpg"
import "./PageNotFound.css"
const PageNotFound = () =>{
    return(<>
            <div className="pageNotFound">
                {/* <h1>Error 404 : Page Not Found</h1> */}
                <div className="imgContainerNotFound">
                    <img src={imgNotFound} alt="" />
                </div>
            </div>
    </>)
}
export default PageNotFound;