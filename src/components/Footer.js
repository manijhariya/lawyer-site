import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";

import ButtonMailto from "./MailTo"
import './footer.css'
const Footer = () =>{
    return (
	<div className="footer">
	<h2> We're Here To Help | <Link to="contactus"> Contact Us  </Link></h2>
	<h2> Phone Number | Email-Id </h2>
	<hr  style={{
    		color: '#000000',
   		backgroundColor: '#000000',
    		width : "70%",
		height: .5,
    		borderColor : '#000000'
	}}/>
	<br />
	<h2> <ButtonMailto label=<img src={mail} alt=""/> mailto="mailto:no-reply@example.com" ></ButtonMailto>
	     <Link to={{ pathname: "https://fb.com" }} target="_blank"> <img src={facebook} alt=""></img> </Link>
             <Link to={{ pathname: "https://linkedin.com" }} target="_blank"> <img src={linkedin} alt=""></img> </Link>
             <Link to={{ pathname: "https://instagram.com" }} target="_blank"> <img src={instagram} alt=""></img> </Link>
        </h2>
	<h3> Attorney Advertising | Terms of Use </h3>
        <h3> ©2021 Firm . All rights reserved. </h3>
	</div>
    )
}
export default Footer;
