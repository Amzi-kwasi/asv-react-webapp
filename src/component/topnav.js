import { Link } from "react-router-dom";
import "../asv.css";

function TNav(){
    return(
        <>
        <div id="navbar">
    <Link to="/"><img src={require('../img/logo.png')} className="logo" title="Home" />
    <span className="lg-nm">&nbsp;AsvanLauncher</span>
    <span className="log">&nbsp;ASVL</span>
    </Link>
    <i className="fa fa-ellipsis-v" style={{position:"absolute" , right:"20px" , bottom:"14px"  , cursor:"pointer"} }></i>
    </div>
        </>
    )
}

export default TNav;