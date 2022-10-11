import "./logo.scss"
import developer from "../../assets/images/Luis.png";


function Logo() {

    return (
        <div className="logo-container">
            <img className="solid-logo" alt="developer" src={developer}></img>
        </div>
    )
}

export default Logo;