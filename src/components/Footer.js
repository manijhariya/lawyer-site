import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";

import './footer.css'
const Footer = () =>{
    return (
	<div className="footer">
	<div className="footer-div">
	<h2> We're Here To Help | <Link className="nav-a" to="contactus"> Contact Us  </Link></h2>
	<h2> (91) 9806747363 | saraswat.vipul@gmail.com </h2>
	<hr  style={{
    		color: '#000000',
   		backgroundColor: '#000000',
    		width : "70%",
		height: .5,
    		borderColor : '#000000'
	}}/>
	<br />
	<h2> 
	     <Link to={{ pathname: "mailto:saraswat.vipul@gmail.com" }} target="_blank"> <img src={mail} alt=""></img> </Link>
	     <Link to={{ pathname: "https://facebook.com" }} target="_blank"> <img src={facebook} alt=""></img> </Link>
             <Link to={{ pathname: "https://linkedin.com/in/vipul-saraswat-34946976" }} target="_blank"> <img src={linkedin} alt=""></img> </Link>
             <Link to={{ pathname: "https://instagram.com/saraswatvipul" }} target="_blank"> <img src={instagram} alt=""></img> </Link>
        </h2>
	<h3> Attorney Advertising | Terms of Use </h3>
        <h3> ©2021 Firm . All rights reserved. </h3>
	</div>
	</div>
    )
}
export default Footer;

