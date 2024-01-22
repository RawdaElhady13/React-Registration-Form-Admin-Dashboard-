import { Link } from "react-router-dom";

export default function TopBar(){
    return(
        <div className="container d-flex top-bar">
                <h1 className="main-nav">DashBoard</h1>
                <Link to="/" style={{textAlign:'center'}} className="register-nav" >Go To Website </Link>
        </div>

    );
}