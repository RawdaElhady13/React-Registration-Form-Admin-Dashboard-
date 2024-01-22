import { useContext, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import { User } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Login(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [accept,setAccept]=useState(false);
    const [EmailError,setEmailError]=useState(false);

    const UserNow=useContext(User);
    const nav =useNavigate();
    //cookie
    const cookie=new Cookies();

    async function Submit(event){
    event.preventDefault();
    setAccept(true);
    let flag=true;
    if (password.length < 8){
        flag=false;}
        else flag=true;
        if(flag){
    try{
       let response = await axios.post('http://127.0.0.1:8000/api/login' ,{
             email: email,
             password: password,  
        })
             const token =response.data.data.token
             cookie.set("Bearer" ,token ,{path: '/'});
             
             const Userdetails =response.data.data.user
             UserNow.setAuth({token,Userdetails});
             
            nav("/Dashboard")
        }
        catch(error){
            if(error.response.status === 401){
            setEmailError(true);
            }
        }}
}

    return(
    <div> <Header/> 
        <div className="parent" style={{ height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
       <div className="register" style={{ display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            marginTtop: '40px'}}>
       <form onSubmit={Submit} style={{boxShadow: '0 2px 15px rgb(0 0 0 / 50%)',
            width:'400px'}}>
                <label htmlFor="email">Email:</label>
                <input  type="email" id="email" placeholder="Email..." required value={email}
                onChange={(event) => setEmail(event.target.value)}/>
                {accept && EmailError && <p className="error">Credentials do not match</p> }
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password..." value={password}
                onChange={(event) => setPassword(event.target.value)} />
               {password.length < 8 && accept && <p  className="error">password must be more than 8 char</p> }
                <div style={{textAlign:'center'}}>
                <button type="submit">Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}