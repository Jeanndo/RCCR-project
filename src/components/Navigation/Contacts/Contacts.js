import React from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
const Contacts = () => {
  return(
  <div className="Contacts">
    <div className="Tel1">
      <CallIcon style={{ fontSize: "15px" }} />
    </div>
    <div className="Tel">+2507875182823</div>
    <div className="Email1">
      <MailOutlineIcon style={{ fontSize: "15px" }} />
    </div>
    <div className="Email">info@rccrwanda.com</div>

    {JSON.parse(sessionStorage.getItem("rccRwUser")) != null? (
      <div className="name-auth">
        <div>{JSON.parse(sessionStorage.getItem("rccRwUser")).data.user.lastName}</div>
        <Link to="/dashboard">
          <div style={{ backgroundColor:'#1976d2',color:'white',borderRadius:'5px',margin:'0 5px', fontSize:'14px', padding:'3px 5px', width:'fit-content'}}>
            DASHBOARD
          </div>
        </Link>
      </div>
    ) : (
      <>
        <div className="Login">
          <Link to="/login"> Login</Link>
        </div>
        <div className="Register1"><Link to="/signup"> Registar</Link></div>
      </>
    )}
  </div>)
};
export default Contacts;
