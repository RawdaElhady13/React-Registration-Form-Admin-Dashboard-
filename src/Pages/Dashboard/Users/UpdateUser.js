import { useEffect, useState} from "react";
import Forms from "../../../components/Forms/Forms";
import Cookies from "universal-cookie";
import axios from "axios";

export default function UpdateUser(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const cookie=new Cookies();
    const getToken=cookie.get("Bearer");
let id =window.location.pathname.split("/").slice(-1)[0]
   useEffect(()=> {
    axios.get (`http://127.0.0.1:8000/api/user/showbyid/${id}`,{
        headers:{
        Authorization:"Bearer "+getToken,
    }})
   .then((data)=>{
    setName(data.data[0].name)
    setEmail(data.data[0].email)
   });
},[]);
    return(
        <div className="parent">
           <Forms 
           button="Update" 
           name={name} 
           email={email}
           endpoint={`user/update/${id}`}
           navigate={"../Users"}
            buttonstyle={true} />
        </div>
    );
}