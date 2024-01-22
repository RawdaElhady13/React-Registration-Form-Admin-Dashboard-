import axios from "axios";
import {  useEffect, useState } from "react";
import './index.css'
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function Forms(props){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [passwordR , setPasswordR] = useState("");
   const [accept,setAccept]=useState(false);
   const [EmailError,setEmailError]=useState();
   const cookie=new Cookies();
   const getToken=cookie.get("Bearer");
         const nav =useNavigate();
   const StyleRegister ={
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    marginTtop: '40px'
   }
   const FormRegister={boxShadow: '0 2px 15px rgb(0 0 0 / 50%)',
   width:'400px'}
   const button={
    width:"30%",
    fontSize: '18px'
   }
   useEffect(()=> {
setName(props.name)
setEmail(props.email)
   },[props.name,props.email]);
   async function Submit(event){
    event.preventDefault();
    setAccept(true);
   let flag=true;
   if(name === "" || password.length < 8  || passwordR !== password)
    flag=false;
   else flag=true;
    try{
 if(flag===true)
  {  
       const response = await axios.post(`http://127.0.0.1:8000/api/${props.endpoint}` ,{
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordR,
        },{headers:
            { Authorization:"Bearer "+getToken,}
    })
        nav(props.navigate)
      }
        }catch(error){
            setEmailError(error.response.status)
            
        }
}
    return( 
        <div className="register" style={props.StyleOfRegister && StyleRegister}>
        <form onSubmit={Submit} style={props.StyleOfRegister && FormRegister }>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name..." value={name} 
            onChange={(event) => setName(event.target.value)}/>
            {name === "" && accept && <p className="error">Name is required</p>}
            <label htmlFor="email">Email:</label>
            <input  type="email" id="email" placeholder="Email..." required value={email}
            onChange={(event) => setEmail(event.target.value)}/>
            {accept && EmailError === 422  && <p className="error"> The Email has already been taken </p> }
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password..." value={password}
            onChange={(event) => setPassword(event.target.value)} />
           {password.length < 8 && accept && <p  className="error">password must be more than 8 char</p> }
            <label htmlFor="repeat">Repeat Password:</label>
            <input id="repeat" type="password" placeholder="Repeat Password.." value={passwordR} 
            onChange={(event) => setPasswordR(event.target.value)}/>
            {passwordR !== password && accept && <p  className="error">password does not match</p>}
            <div style={{textAlign:'center'}}>
            <button type="submit" style={props.buttonstyle && button}>{props.button}</button>
            </div>
        </form>
        </div>);
}