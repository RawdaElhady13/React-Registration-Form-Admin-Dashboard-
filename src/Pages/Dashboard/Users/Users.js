import axios from "axios";
import {  useEffect, useState } from "react";
import {  Link } from "react-router-dom";

import Cookies from "universal-cookie";

   export default function Users(){
   const[Users,setUsers]=useState([]);
   const[RunUseEffect,setRun]=useState(0);
  
   //cookie
   const cookie=new Cookies();
   const getToken=cookie.get("Bearer")
   useEffect(()=> {
    axios.get ("http://127.0.0.1:8000/api/user/show" ,{
        headers :
{
    Authorization:"Bearer " + getToken ,
}})  
    .then((data)=>setUsers(data.data));
},[RunUseEffect]);
const ShowUsers =Users.map((el,index) => (
    <tr key={index}>
         <td>{index+1}</td>
         <td>{el.name}</td>
         <td>{el.email}</td>
    <td>
        <Link to={`${el.id}`}>
        <i 
        className="fa-solid fa-pen-to-square" 
        style={{color:"#74afb9", paddingRight:"10px" ,fontSize:"20px" ,cursor:"pointer"}}>
        </i>
        </Link>
        <i 
        className="fa-solid fa-trash" 
        onClick={()=>DeleteUser(el.id)} 
        style={{color:"red", fontSize:"20px" ,cursor:"pointer"}}>
        </i>
    </td>
    </tr>));

    async function DeleteUser(id){
     const response =  await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`,{ 
         headers:{
           Authorization:"Bearer "+getToken,
        }})
        setRun((prev)=>(prev+1));
        console.log(response);
}

    return(
        <div style={{padding:"20px"}}>
        <table border={1}>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {ShowUsers}
            </tbody>
        </table>
        </div>
    );
}