import {  useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import axios from "axios";
import LoadingScreen from "../../../components/LoadingScreen"
import Cookies from "universal-cookie";
export default function PersistLogin(){
   const [Loading,setLoading]=useState(true);
   // cookie
  
   const cookie=new Cookies();
   const getToken=cookie.get("Bearer")
   //send Refresh token
   useEffect(()=>{
    async function refresh(){
        try{
            await axios
            .post(`http://127.0.0.1:8000/api/refresh` , null ,{headers:{
                Authorization :"Bearer" + getToken ,
            },})
            .then((data)=> {
            cookie.set("Bearer",data.data.token ,{path: '/'})
         
            })
            
        }
        catch(error){
            console.log(error);
        }
    }
    !getToken ? refresh() :setLoading(false);
},[]);
    return Loading ? <LoadingScreen/> : <Outlet/>;
}
