
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
export default function RequireAuth()
{const cookie=new Cookies();
    const getToken=cookie.get("Bearer");
    
    const location=useLocation();
return(
    getToken ? <Outlet/> : <Navigate state={{from: location }} replace to ="./Login"/>
    );
}