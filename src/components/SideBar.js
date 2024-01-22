import {  NavLink } from "react-router-dom";

export default function SideBar(){
    return(
        <div className="side-bar ">
            <NavLink  to="/Dashboard/Users" className="item-link"> <i className="fa-solid fa-users"></i> Users </NavLink >
            <NavLink  to="/Dashboard/User/Create" className="item-link"><i className="fa-solid fa-user-plus"></i>New User</NavLink >
        </div>
    );
}