import { createContext, useState } from "react";

export const User=createContext({});
export default function UserProvider({children}){
    const [Auth ,setAuth]=useState({});
    return(
        <User.Provider value={{Auth , setAuth}}>
{children}
        </User.Provider>
    );
}