import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Header (){
   
  const cookie=new Cookies();
  const getToken=cookie.get("Bearer");
  async function handleLogout(){
   await axios.post("http://127.0.0.1:8000/api/logout" ,null,{headers:{
        Authorization:"Bearer "+getToken,
    }});
    cookie.remove("Bearer");
   window.location.pathname="/";
  }
    return(
    <div className="container" >

        <nav className="d-flex">
             <div className="d-flex" >
                <Link to="/" className="main-nav">Home</Link>
                <Link to="/About"  className="main-nav">About</Link>
             </div>
            {!getToken ?(
             <div className="d-flex">
               <Link to="/Register" style={{textAlign:'center'}} className="register-nav"> Register</Link>
               <Link to="/Login" style={{textAlign:'center'}} className="register-nav"> Login</Link>
               
               </div> 
             ) :(
                <div><Link to="/Dashboard" style={{textAlign:'center'}} className="register-nav"> Dashboard</Link>
                <Link to="/" style={{textAlign:'center'}} className="register-nav" onClick={handleLogout}> log Out</Link>
                </div>
             )}
        </nav>

    </div>
    );
}
