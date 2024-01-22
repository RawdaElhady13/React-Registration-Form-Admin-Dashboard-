import { Route, Routes } from "react-router-dom";
import "./Pages/Dashboard/Dashboard.css";
//Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard";
//Users
import Users from "./Pages/Dashboard/Users/Users";
import UpdateUser from "./Pages/Dashboard/Users/UpdateUser";
import CreateUser from "./Pages/Dashboard/Users/CreateUser";
//Website
import Signup from "./Pages/Website/Auth/signup";
import Login from "./Pages/Website/Auth/Login";
import Home from "./Pages/Website/Home";
import About from "./Pages/Website/About";
import RequireAuth from "./Pages/Website/Auth/RequireAuth";
import PersistLogin from "./Pages/Website/Auth/PersistLogin";


export default function App(){
return(
  <div > 
    <Routes>
     <Route path="/Register" element={<Signup/> }/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
      {/*protected Route */} 
      <Route element={<PersistLogin/>}>
      <Route element={<RequireAuth/>}>
     <Route path="/Dashboard" element={<Dashboard/>} >
        <Route path="Users" element={<Users/>}/>
        <Route path="Users/:id" element={<UpdateUser/>}/>
        <Route path="User/Create" element={<CreateUser/>}/>
          </Route>
     </Route>
    </Route>
     </Routes>
  </div>);
}
